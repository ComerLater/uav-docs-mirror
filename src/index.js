const fs = require('fs');
const path = require('path');
const sites = require('../config/sites');
const { rewriteBuiltStaticDir, validateSite } = require('./rewrite');
const { detectUpdates, cloneOrPullRepo, runBuild, updateManifest, runCommand, fixTabsSyntax } = require('./utils');

function ensureOutputDir(site) {
  fs.mkdirSync(site.outputDir, { recursive: true });
  fs.mkdirSync(site.versionDir, { recursive: true });
}

// ---- 本地版本化发布 ----

function removeDirectory(target) {
  if (!fs.existsSync(target)) return;
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const fullPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      removeDirectory(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(target, { recursive: true });
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function deploySite(site) {
  const versionDir = site.versionDir;
  fs.mkdirSync(versionDir, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const artifactDir = path.join(versionDir, timestamp);
  const latestDir = path.join(versionDir, 'latest');

  copyDirectory(site.outputDir, artifactDir);

  if (fs.existsSync(latestDir)) {
    removeDirectory(latestDir);
  }
  copyDirectory(site.outputDir, latestDir);

  fs.writeFileSync(path.join(versionDir, 'current.txt'), `${artifactDir}\n`, 'utf8');

  const edgeOneDeploy = process.env.EDGEONE_DEPLOY_CMD;
  if (edgeOneDeploy) {
    console.log(`[deploy] ${site.name}: running EdgeOne deploy command`);
    runCommand(edgeOneDeploy, process.cwd());
  } else {
    console.log(`[deploy] ${site.name}: versioned artifact ready at ${artifactDir}; EdgeOne will publish on push to gh-pages.`);
  }

  return true;
}

// ---- 导航首页 ----

function writeHomepage(sites, distRoot) {
  const cards = sites
    .map(
      (site) =>
        `<a class="card" href="${site.publicPrefix}/"><h2>${site.title || site.name}</h2><p>${site.upstreamHost}</p></a>`
    )
    .join('\n        ');

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文档导航</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: #f5f6f8;
      color: #1f2328;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    }
    h1 { font-size: 28px; margin-bottom: 8px; }
    .sub { color: #6a737d; margin-bottom: 32px; font-size: 15px; }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      max-width: 720px;
      width: 100%;
      justify-content: center;
    }
    .card {
      flex: 1 1 200px;
      background: #fff;
      border: 1px solid #e1e4e8;
      border-radius: 10px;
      padding: 20px;
      text-decoration: none;
      color: inherit;
      transition: box-shadow .15s ease, transform .15s ease;
    }
    .card:hover { box-shadow: 0 6px 18px rgba(0,0,0,.08); transform: translateY(-2px); }
    .card h2 { font-size: 18px; margin-bottom: 6px; }
    .card p { color: #6a737d; font-size: 14px; word-break: break-all; }
  </style>
</head>
<body>
  <h1>文档导航</h1>
  <p class="sub">选择一个文档站点</p>
  <div class="grid">
        ${cards}
  </div>
</body>
</html>
`;

  fs.mkdirSync(distRoot, { recursive: true });
  const outFile = path.join(distRoot, 'index.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log(`[homepage] written ${outFile}`);
}

// ---- 本地常驻循环 ----

function startScheduler() {
  const intervalMs = Number(process.env.SYNC_INTERVAL_MS || 60 * 60 * 1000);
  console.log(`[scheduler] polling every ${intervalMs}ms`);

  const loop = async () => {
    try {
      console.log('[scheduler] tick: sync cycle started');
      await runSites();
    } catch (err) {
      console.error('[scheduler] sync cycle failed:', err);
    }

    setTimeout(loop, intervalMs);
  };

  setTimeout(loop, 1000);
}

// ---- 主流程 ----

async function buildSite(site, sha, { skipDeploy = false } = {}) {
  console.log(`[start] ${site.name}: sync repo`);
  const repoPath = await cloneOrPullRepo(site);
  if (!repoPath) {
    console.log(`[skip] ${site.name}: GitHub sync disabled in local debug mode`);
    return false;
  }

  console.log(`[start] ${site.name}: fix upstream tabs syntax`);
  fixTabsSyntax(repoPath);

  console.log(`[start] ${site.name}: run build`);
  await runBuild(site, repoPath);

  const buildDir = path.join(repoPath, site.buildOutputDir);
  if (!fs.existsSync(buildDir)) {
    console.log(`[fail] ${site.name}: build output not found: ${buildDir}`);
    return false;
  }

  ensureOutputDir(site);

  if (process.env.SKIP_REWRITE === 'true') {
    // 暂时跳过 URL 重写，直接复制构建产物（跑通链路阶段用）
    console.log(`[start] ${site.name}: copy build output (rewrite skipped)`);
    copyDirectory(buildDir, site.outputDir);
  } else {
    console.log(`[start] ${site.name}: rewrite absolute URLs`);
    rewriteBuiltStaticDir(site, buildDir, site.outputDir);

    console.log(`[start] ${site.name}: validate output`);
    const ok = validateSite(site);
    if (!ok) {
      console.log(`[fail] ${site.name}: validation failed`);
      return false;
    }
  }

  if (skipDeploy) {
    console.log(`[done] ${site.name}: build complete (deploy + manifest skipped)`);
    return true;
  }

  console.log(`[start] ${site.name}: record version`);
  updateManifest(site, sha);

  console.log(`[start] ${site.name}: publish`);
  await deploySite(site);
  console.log(`[done] ${site.name}: sync complete`);
  return true;
}

async function detectAll(targets) {
  const updates = {};
  let anyChanged = false;

  for (const site of targets) {
    const { changed, sha } = await detectUpdates(site);
    updates[site.name] = { changed, sha };
    if (changed) anyChanged = true;
  }

  return { updates, anyChanged };
}

async function runSites(siteFilter, { skipDeploy = false, force = false } = {}) {
  const targets = siteFilter
    ? sites.filter((site) => site.name === siteFilter || site.publicPrefix === `/${siteFilter}`)
    : sites;

  const { updates, anyChanged } = await detectAll(targets);

  if (!force && !anyChanged) {
    console.log('[skip] no upstream change detected, nothing to build');
    return;
  }

  // gh-pages 采用 force 覆盖推送，dist/ 必须是完整产物，因此任一站点更新即全量重建
  console.log(force ? '[start] forced rebuild (manifest check skipped)' : '[start] upstream change detected, full rebuild');
  for (const site of targets) {
    await buildSite(site, updates[site.name].sha, { skipDeploy });
  }

  // 生成导航首页（始终基于全部站点，保证根路径 / 有入口）
  writeHomepage(sites, 'dist');
}

async function main() {
  const args = process.argv.slice(2);
  const watchMode = args.includes('--watch') || args.includes('-w');
  const skipDeploy = args.includes('--no-deploy');
  const force = args.includes('--force') || process.env.FORCE_BUILD === 'true';
  const siteFilter = args.find((arg) => !arg.startsWith('-'));

  if (watchMode) {
    startScheduler();
    return;
  }

  await runSites(siteFilter, { skipDeploy, force });
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { runSites, buildSite, ensureOutputDir };
