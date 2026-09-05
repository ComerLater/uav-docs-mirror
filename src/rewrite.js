const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function rewriteUrl(rawUrl, site) {
  if (!rawUrl) return rawUrl;
  const value = rawUrl.trim();

  if (/^(mailto:|javascript:|data:|tel:)/i.test(value)) return value;

  try {
    const parsed = new URL(value);
    if (parsed.hostname !== site.upstreamHost) return value;

    const pathname = parsed.pathname === '/' ? '' : parsed.pathname;
    return `${site.publicPrefix}${pathname}`;
  } catch {
    const hostPattern = new RegExp(`https?:\\/\\/(${site.upstreamHost.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?:\\/)?`, 'gi');
    if (hostPattern.test(value)) {
      return value.replace(hostPattern, site.publicPrefix);
    }
    return value;
  }
}

function rewriteTextValue(text, site) {
  const upstreamPattern = new RegExp(`https?:\\/\\/${site.upstreamHost.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:\\/)?`, 'gi');
  return text.replace(upstreamPattern, `${site.publicPrefix}/`);
}

function rewriteHtmlFile(filePath, site) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);

  $('[href], [src], [poster], [action], [content]').each((_, el) => {
    ['href', 'src', 'poster', 'action', 'content'].forEach((attr) => {
      const value = $(el).attr(attr);
      if (!value) return;
      const rewritten = rewriteUrl(value, site);
      if (rewritten !== value) {
        $(el).attr(attr, rewritten);
      }
    });
  });

  $('[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset');
    if (!srcset) return;
    const rewritten = srcset
      .split(',')
      .map((part) => {
        const trimmed = part.trim();
        if (!trimmed) return trimmed;
        const [url, ...rest] = trimmed.split(/\s+/);
        const fixed = rewriteUrl(url, site);
        return `${fixed}${rest.length ? ` ${rest.join(' ')}` : ''}`;
      })
      .join(', ');
    $(el).attr('srcset', rewritten);
  });

  // 对序列化结果做全文替换，兜底覆盖 meta content、内联 script/style、JSON-LD 等未单独处理的位置
  return rewriteTextValue($.html(), site);
}

function rewriteStaticTextFile(filePath, site) {
  let text = fs.readFileSync(filePath, 'utf8');
  text = rewriteTextValue(text, site);
  fs.writeFileSync(filePath, text);
}

function rewriteBuiltStaticDir(site, buildDir, outputDir) {
  if (!fs.existsSync(buildDir)) {
    throw new Error(`build directory not found: ${buildDir}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const rewrittenFiles = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fromPath = path.join(currentDir, entry.name);
      const relative = path.relative(buildDir, fromPath);
      const toPath = path.join(outputDir, relative);

      if (entry.isDirectory()) {
        fs.mkdirSync(toPath, { recursive: true });
        walk(fromPath);
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      fs.mkdirSync(path.dirname(toPath), { recursive: true });
      fs.copyFileSync(fromPath, toPath);

      if (['.html', '.htm'].includes(ext)) {
        const rewritten = rewriteHtmlFile(toPath, site);
        fs.writeFileSync(toPath, rewritten);
        rewrittenFiles.push(toPath);
      } else if (['.css', '.js', '.json', '.txt'].includes(ext)) {
        rewriteStaticTextFile(toPath, site);
        rewrittenFiles.push(toPath);
      }
    }
  }

  walk(buildDir);
  return rewrittenFiles;
}

function walkAndCheck(dir, site, results = { upstreamLeak: false }) {
  if (!fs.existsSync(dir)) {
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndCheck(fullPath, site, results);
      continue;
    }

    try {
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.includes(site.upstreamHost)) {
        console.warn(`[warn] ${site.name}: leaked upstream host in ${fullPath}`);
        results.upstreamLeak = true;
      }
    } catch {
      // ignore binary files
    }
  }
  return results;
}

function validateSite(site) {
  const result = walkAndCheck(site.outputDir, site);
  return !result.upstreamLeak;
}

module.exports = {
  rewriteUrl,
  rewriteHtmlFile,
  rewriteStaticTextFile,
  rewriteBuiltStaticDir,
  validateSite
};
