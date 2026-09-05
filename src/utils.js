const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { execSync } = require('child_process');

const MANIFEST_PATH = path.join(process.cwd(), 'manifest.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readManifest() {
  try {
    const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
}

function updateManifest(site, sha) {
  const manifest = readManifest();
  manifest[site.name] = {
    sha,
    updatedAt: new Date().toISOString()
  };
  writeManifest(manifest);
  return manifest;
}

function getLastSha(site) {
  const manifest = readManifest();
  return manifest[site.name]?.sha || null;
}

function runCommand(command, cwd) {
  execSync(command, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/bash'
  });
}

function isLocalDebugMode() {
  return process.env.SKIP_GIT_SYNC === 'true';
}

async function detectUpdates(site) {
  if (isLocalDebugMode()) {
    console.log(`[debug] ${site.name}: local debug mode enabled, skipping GitHub API polling`);
    return { changed: false, sha: null };
  }

  try {
    const match = site.repoUrl.match(/github\.com\/(.+?)\/(.+?)(?:\.git)?$/i);
    if (!match) {
      console.log(`[warn] ${site.name}: no GitHub repo detected, using fallback build trigger`);
      return { changed: true, sha: null };
    }

    const [_, owner, repo] = match;
    const githubUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;
    const res = await axios.get(githubUrl, {
      headers: {
        'User-Agent': 'uav-docs-mirror'
      },
      timeout: 20000
    });

    const latestSha = res.data?.[0]?.sha;
    if (!latestSha) {
      return { changed: true, sha: null };
    }

    const prev = getLastSha(site);
    if (prev && prev === latestSha) {
      return { changed: false, sha: latestSha };
    }

    return { changed: true, sha: latestSha };
  } catch (error) {
    console.warn(`[warn] ${site.name}: update detection failed -> ${error.message}`);
    return { changed: true, sha: null };
  }
}

async function cloneOrPullRepo(site) {
  if (isLocalDebugMode()) {
    console.log(`[debug] ${site.name}: local debug mode enabled, skipping GitHub clone/pull`);
    return null;
  }

  const repoDir = site.repoDir;
  ensureDir(path.dirname(repoDir));

  if (!fs.existsSync(repoDir)) {
    const sparseDirs = site.sparseDirs;
    if (sparseDirs && sparseDirs.length) {
      console.log(`[info] sparse-cloning ${site.repoUrl} into ${repoDir} (dirs: ${sparseDirs.join(', ')})`);
      runCommand(`git clone --depth 1 --filter=blob:none --sparse ${site.repoUrl} "${repoDir}"`, process.cwd());
      runCommand(`git sparse-checkout set --no-cone ${sparseDirs.join(' ')}`, repoDir);
    } else {
      console.log(`[info] cloning ${site.repoUrl} into ${repoDir}`);
      runCommand(`git clone --depth 1 ${site.repoUrl} "${repoDir}"`, process.cwd());
    }
    return repoDir;
  }

  console.log(`[info] updating existing repo ${repoDir}`);
  runCommand('git fetch --all --tags && git pull --ff-only origin HEAD', repoDir);
  return repoDir;
}

function fixTabsSyntax(repoPath) {
  // 上游非英语翻译（ko/uk 等）的 tabs 语法少了空格（`:::tab` 应为 `::: tab`），
  // 会导致 vue3-tabs-component 在 SSR 渲染时 inject tabsProvider 失败。这里统一修正。
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(p);
      } else if (entry.name.endsWith('.md')) {
        const text = fs.readFileSync(p, 'utf8');
        const fixed = text.replace(/^(\s*:+)(tab)(?=\s|$)/gm, '$1 $2');
        if (fixed !== text) {
          fs.writeFileSync(p, fixed);
        }
      }
    }
  }
  walk(repoPath);
}

async function runBuild(site, repoPath) {
  for (const command of site.buildCommands) {
    console.log(`[build] ${site.name}: ${command}`);
    runCommand(command, repoPath);
  }
}

module.exports = {
  ensureDir,
  readManifest,
  writeManifest,
  updateManifest,
  getLastSha,
  detectUpdates,
  cloneOrPullRepo,
  runBuild,
  runCommand,
  fixTabsSyntax
};
