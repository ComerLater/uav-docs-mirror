# uav-docs-mirror 需求与设计说明

## 目标

将三个 GitHub 上的 VitePress 文档站镜像到 EdgeOne，通过自己的域名稳定访问：

| 站点 | 上游域名 | 仓库 | 访问 |
| --- | --- | --- | --- |
| px4 | docs.px4.io | PX4/PX4-Autopilot | open.nextpilot.org/px4 |
| mavlink | mavlink.io | mavlink/mavlink-devguide | open.nextpilot.org/mavlink |
| qgroundcontrol | docs.qgroundcontrol.com | mavlink/qgroundcontrol | open.nextpilot.org/qgroundcontrol |

## 最终方案（GitOps 产物入库，源码/产物分分支）

- **EdgeOne Pages 绑定本仓库的 `gh-pages` 分支**，只做纯静态托管：构建命令留空、输出目录 `/`。
- **GitHub Actions 每天定时**检测上游更新，在 CI 里完成 clone → build → 重写 → 校验，产物 force-push 到 `gh-pages` 分支。
- **`main` 分支**只保留源码、配置和 `manifest.json`（记录各站点上游 commit），保持干净。
- EdgeOne 检测到 `gh-pages` 分支 push 自动部署。

> 为什么把构建放在 GitHub Actions 而不是 EdgeOne：EdgeOne 构建环境拉大仓库 + 装依赖 + 跑 VitePress 易超时、难调试；GitHub Actions 环境可控、日志完整。

## 核心流程

```text
detectAll（检测所有站点上游更新）
  → 有任一更新 → 全量 buildSite：
      cloneOrPullRepo → runBuild → rewriteBuiltStaticDir
      → validateSite → updateManifest → deploySite
```

> 全量构建的原因：gh-pages 采用 force 覆盖推送，dist/ 必须完整，否则会丢失未更新站点的产物。

## 目录结构

```bash
config/sites.js        # 站点配置（域名/仓库/构建命令/输出目录）
src/index.js           # 主流程编排 + 发布 + 首页 + 调度，支持站点过滤与 --watch
src/rewrite.js         # 绝对 URL 重写 + 残留校验
src/utils.js           # 检测/拉取/构建/manifest 读写
manifest.json          # 各站点上次构建的上游 commit sha（在 main）
dist/                  # 构建产物（本地临时，force-push 到 gh-pages）
data/                  # 源码与本地快照（不入库）
```

## 已完成

- [x] 站点配置
- [x] 上游更新检测（GitHub API + manifest.json 持久化）
- [x] 源码拉取（`--depth 1`；PX4/qgroundcontrol 用 sparse-checkout 只拉 docs）与 VitePress 构建
- [x] 绝对 URL 重写（HTML 属性 / CSS / JS / JSON）
- [x] 残留域名校验
- [x] 本地版本化目录
- [x] GitHub Actions 定时同步 workflow（产物推 gh-pages）
- [x] 本地 `--watch` 循环调度

## 后续可补充

- 构建失败告警（群机器人 / 邮件）
- EdgeOne 部署钩子接入（更细粒度的触发）
- 回滚脚本（一键 revert manifest + 重建）
