# uav-docs-mirror

将三个 GitHub 上的 VitePress 文档站，通过「源码构建 + URL 重写」镜像到自己的域名下，由腾讯 EdgeOne Pages 提供静态托管。

| 站点 | 上游域名 | GitHub 仓库 | 本地路由 |
| --- | --- | --- | --- |
| px4 | docs.px4.io | PX4/PX4-Autopilot | /px4 |
| mavlink | mavlink.io | mavlink/mavlink-devguide | /mavlink |
| qgroundcontrol | docs.qgroundcontrol.com | mavlink/qgroundcontrol | /qgroundcontrol |

访问入口：

- `open.nextpilot.org/px4`
- `open.nextpilot.org/mavlink`
- `open.nextpilot.org/qgroundcontrol`

根路径 `open.nextpilot.org/` 会展示导航首页，引导访问以上三个站点。

## 架构（GitOps）

采用「产物入库 + CI 构建」的方式，EdgeOne 只做纯静态托管。**源码与产物分分支存放**：`main` 分支只留源码、配置和清单，构建产物推送到独立的 `gh-pages` 分支。

```text
上游 GitHub 仓库更新
      ↓
GitHub Actions（每天定时检测上游 commit）
      ↓ 有更新
拉取源码 → npm install → VitePress 构建
      ↓
重写绝对 URL → 本地路径（/px4 /mavlink /qgroundcontrol）
      ↓
校验无原站域名残留
      ↓
产物 force-push 到 gh-pages 分支
      ↓
EdgeOne Pages 检测到 gh-pages push → 静态托管
      ↓
用户访问 open.nextpilot.org/{px4,mavlink,qgroundcontrol}
```

**关键点**：EdgeOne 监听的是 `gh-pages` 分支的 push，而文档内容来自上游三个仓库。因此由 GitHub Actions 每天定时把「上游更新」翻译成「gh-pages 分支更新」，从而触发 EdgeOne 自动部署。

> 为什么推 gh-pages 而不是 main：main 分支保持干净（只含源码/配置/manifest），产物独立到 gh-pages，diff 清晰、符合 GitHub Pages 惯例。

## 目录结构

```bash
uav-docs-mirror/
├─ .github/workflows/sync.yml   # 定时同步 CI
├─ config/sites.js              # 各站点配置
├─ src/
│  ├─ index.js                  # 主流程编排 + 发布 + 首页 + 调度
│  ├─ rewrite.js                # 绝对 URL 重写 + 残留校验
│  └─ utils.js                  # 更新检测 / 拉取 / 构建 / manifest
├─ manifest.json                # 记录各站点上次构建的上游 commit（在 main）
├─ dist/                        # 构建产物（本地临时，force-push 到 gh-pages，不入 main）
├─ data/                        # 拉取的源码与本地版本快照（不入库）
├─ package.json
├─ README.md
└─ claude.md
```

## 模块说明

每个 JS 文件的功能与作用：

### [config/sites.js](config/sites.js) — 站点配置（数据源头）

导出三个站点的配置数组。每个站点包含 `name`/`title`（标识与友好名）、`upstreamHost`（原站域名）、`publicPrefix`（本地路由前缀）、`repoUrl`（GitHub 仓库）、`sparseDirs`（sparse-checkout 目录）、`buildCommands`（构建命令）、`outputDir`/`versionDir`/`repoDir`（产物/版本/源码目录）、`buildOutputDir`（VitePress 输出位置）。

### [src/utils.js](src/utils.js) — 底层工具（数据获取）

- `detectUpdates(site)` — 调 GitHub API 查上游最新 commit，与 manifest.json 比对，返回 `{ changed, sha }`
- `cloneOrPullRepo(site)` — 克隆/更新源码仓库，`sparseDirs` 走 sparse-checkout
- `runBuild(site, repoPath)` / `runCommand(command, cwd)` — 执行构建命令
- `readManifest` / `writeManifest` / `updateManifest` / `getLastSha` — 读写 manifest.json（各站点上游 commit 状态）
- `ensureDir` — 递归建目录

### [src/rewrite.js](src/rewrite.js) — 产物处理（重写 + 校验）

- `rewriteBuiltStaticDir(site, buildDir, outputDir)` — 遍历构建产物，复制到 `outputDir` 并逐文件重写
- `rewriteHtmlFile` — 重写 HTML 的 `href` / `src` / `poster` / `action` / `srcset`
- `rewriteStaticTextFile` — 重写 CSS/JS/JSON 里的 `url(...)`
- `rewriteUrl` — 单个 URL 重写
- `validateSite(site)` — 递归扫描输出目录，确认无 `upstreamHost` 残留

### [src/index.js](src/index.js) — 主流程编排（入口）

- `buildSite(site, sha)` — 单站点完整流程：clone → build → rewrite → validate → updateManifest → deploy
- `detectAll(targets)` — 检测所有站点上游更新
- `runSites(siteFilter)` — 有更新则全量构建，最后生成首页
- `deploySite(site)` — 本地版本化快照（时间戳目录 + `latest` + `current.txt`）
- `writeHomepage(sites, distRoot)` — 生成导航首页 `dist/index.html`
- `startScheduler` — 本地 `--watch` 循环（按 `SYNC_INTERVAL_MS` 周期调用 `runSites`）
- `main()` — 解析命令行参数（`--watch` 常驻 / 站点名过滤）

数据流一览：

```text
config/sites.js（配置）
    ↓
src/index.js（入口）
    ├─ src/utils.js    检测更新 + 拉源码 + 构建 + manifest
    └─ src/rewrite.js  绝对 URL 重写 + 残留校验
```

## 本地运行

安装依赖：

```bash
npm install
```

单轮同步（检测 → 构建 → 重写 → 发布）：

```bash
npm start
```

本地构建（检测 → 构建 → 重写 → 校验，不发布、不记录版本）：

```bash
npm run build
```

只同步某个站点：

```bash
npm run sync:site -- px4
```

本地断网调试（跳过 GitHub 下载，保护流量）：

```bash
npm run dev
```

本地常驻循环（可选，生产推荐用 GitHub Actions 定时）：

```bash
npm run watch
```

语法检查：

```bash
npm run check
```

命令速查：

| 命令 | 检测上游 | 拉取构建 | 重写校验 | 记录 manifest | 版本化发布 |
| --- | --- | --- | --- | --- | --- |
| `npm start` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `npm run build` | ✅ | ✅ | ✅ | ❌ | ❌ |
| `npm run sync:site -- <name>` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `npm run dev` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `npm run watch` | ✅ | ✅ | ✅ | ✅ | ✅ |

## EdgeOne Pages 配置

1. 将本仓库推到 GitHub。
2. 在 EdgeOne 控制台 Pages 模块「导入 Git 仓库」，授权并选择本仓库。
3. 在「Git 管理」里把**生产分支设为 `gh-pages`**（EdgeOne 支持监听非默认分支）。
4. 构建配置：
   - 根目录：`./`
   - 构建命令：**留空**（产物已在 GitHub Actions 里构建好）
   - 输出目录：`/`（gh-pages 分支根即站点内容）
5. 保存后，每次 `gh-pages` 分支 push 都会自动部署；也可手动「重新部署」。

域名绑定 `open.nextpilot.org` 后，`gh-pages` 分支根的 `px4/`、`mavlink/`、`qgroundcontrol/` 分别对应 `/px4`、`/mavlink`、`/qgroundcontrol` 子路径。

## 触发机制

- GitHub Actions 每天定时（`sync.yml` 的 cron，默认每天 UTC 03:17）检测三个上游仓库。
- 也可在 GitHub 仓库 Actions 页手动触发 `Sync Docs`。
- 首次运行时 `manifest.json` 为空，检测到全部站点更新，全量构建并推送 gh-pages。
- 检测到任一站点更新即全量重建（保证 gh-pages 产物完整）。

## 回滚

- `main` 分支的 git 历史是配置与清单的版本记录。
- `gh-pages` 分支用 force 覆盖（单 commit），不保留历史；回滚靠 EdgeOne 控制台选择历史部署记录重新发布。
- 本地 `data/versions/{站点}/` 保留带时间戳的构建快照，供本地回溯。

## 环境变量

| 变量 | 说明 |
| --- | --- |
| `SKIP_GIT_SYNC` | `true` 时跳过 GitHub 检测与下载（本地调试用） |
| `SYNC_INTERVAL_MS` | 本地 `--watch` 模式的轮询间隔（毫秒，默认 1 小时） |
| `EDGEONE_DEPLOY_CMD` | 可选的 EdgeOne CLI 部署命令兜底（GitOps 模式下一般不用） |

## 注意事项

- 这是静态文档镜像，不适合复制动态站点功能。
- 绝对 URL 的修正统一在构建后执行（`src/rewrite.js`）。
- PX4-Autopilot 与 qgroundcontrol 仓库较大，已用 sparse-checkout 只拉取 `docs` 目录，避免全量克隆。
- 改动 `main` 分支不会触发 EdgeOne 部署，只有 `gh-pages` 分支 push 才触发。
