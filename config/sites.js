module.exports = [
  {
    name: 'px4',
    title: 'PX4 用户指南',
    upstreamHost: 'docs.px4.io',
    publicPrefix: '/px4',
    sourceUrl: 'https://docs.px4.io/',
    repoUrl: 'https://github.com/PX4/PX4-Autopilot.git',
    sparseDirs: ['docs'],
    buildCommands: [
      'cd docs && yarn install --frozen-lockfile',
      'cd docs && npm run docs:build_ubuntu'
    ],
    allowedPathPrefixes: ['/', '/en/', '/zh/'],
    ignorePatterns: [/\/api\//i, /utm_/i, /google-analytics/i],
    outputDir: 'dist/px4',
    versionDir: 'data/versions/px4',
    repoDir: 'data/repos/px4',
    buildOutputDir: 'docs/.vitepress/dist'
  },
  {
    name: 'mavlink',
    title: 'MAVLink 开发者指南',
    upstreamHost: 'mavlink.io',
    publicPrefix: '/mavlink',
    sourceUrl: 'https://mavlink.io/',
    repoUrl: 'https://github.com/mavlink/mavlink-devguide.git',
    buildCommands: [
      'yarn install --frozen-lockfile',
      'npm run docs:build_ubuntu'
    ],
    allowedPathPrefixes: ['/', '/en/', '/docs/'],
    ignorePatterns: [/\/api\//i, /utm_/i],
    outputDir: 'dist/mavlink',
    versionDir: 'data/versions/mavlink',
    repoDir: 'data/repos/mavlink',
    buildOutputDir: '.vitepress/dist'
  },
  {
    name: 'qgroundcontrol',
    title: 'QGroundControl 指南',
    upstreamHost: 'docs.qgroundcontrol.com',
    publicPrefix: '/qgroundcontrol',
    sourceUrl: 'https://docs.qgroundcontrol.com/',
    repoUrl: 'https://github.com/mavlink/qgroundcontrol.git',
    sparseDirs: ['docs', 'package.json', 'package-lock.json'],
    buildCommands: [
      'npm ci',
      'npm run docs:build'
    ],
    allowedPathPrefixes: ['/', '/en/', '/zh/'],
    ignorePatterns: [/\/api\//i, /utm_/i],
    outputDir: 'dist/qgroundcontrol',
    versionDir: 'data/versions/qgroundcontrol',
    repoDir: 'data/repos/qgroundcontrol',
    buildOutputDir: 'docs/.vitepress/dist'
  }
];
