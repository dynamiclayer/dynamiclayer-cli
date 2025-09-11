#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function parseFlags(argv) {
  const flags = {};
  argv.forEach((arg) => {
    if (arg.startsWith('--')) {
      const [k, v] = arg.replace(/^--/, '').split('=');
      if (k) flags[k] = v ?? true;
    }
  });
  return flags;
}

function loadConfig(cwd) {
  const configPath = path.join(cwd, 'dynamiclayer.config.json');
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Warning: Could not read dynamiclayer.config.json:', e.message);
    }
  }
  return {};
}

function detectDirs(cwd) {
  const has = (p) => fs.existsSync(path.join(cwd, p));
  let base = '';
  if (has('src/components')) base = 'src';
  else if (has('src')) base = 'src';
  else if (has('app/components')) base = 'app';
  const componentsDir = path.join(base, 'components');
  const stylesDir = path.join(base, 'styles');
  const assetsDir = path.join(base, 'assets');
  return { componentsDir, stylesDir, assetsDir };
}

function resolveTargetDirs(cwd, flags) {
  const detected = detectDirs(cwd);
  const config = loadConfig(cwd);
  const res = {
    componentsDir: flags.components || config.componentsDir || detected.componentsDir,
    stylesDir: flags.styles || config.stylesDir || detected.stylesDir,
    assetsDir: flags.assets || config.assetsDir || detected.assetsDir,
  };
  Object.keys(res).forEach((k) => {
    if (typeof res[k] === 'string') {
      res[k] = res[k].replace(/^\.\//, '');
      if (res[k] === '') res[k] = '.';
    }
  });
  return res;
}

function mapDestPath(relDest, dirs) {
  if (relDest.startsWith('components/')) return path.join(dirs.componentsDir, relDest.replace(/^components\//, ''));
  if (relDest.startsWith('styles/')) return path.join(dirs.stylesDir, relDest.replace(/^styles\//, ''));
  if (relDest.startsWith('assets/')) return path.join(dirs.assetsDir, relDest.replace(/^assets\//, ''));
  return relDest;
}

function adjustImportsForFile(absFilePath, dirs, cwd) {
  if (!/\.(js|jsx|ts|tsx)$/.test(absFilePath)) return;
  const fileRel = toPosix(path.relative(cwd, absFilePath));
  const assetsRoot = toPosix(dirs.assetsDir) + '/';
  const stylesRoot = toPosix(dirs.stylesDir) + '/';
  if (fileRel.startsWith(assetsRoot) || fileRel.startsWith(stylesRoot)) return;
  try {
    const source = fs.readFileSync(absFilePath, 'utf8');
    const fileDir = path.dirname(absFilePath);
    const targetStyleBase = path.join(cwd, dirs.stylesDir, 'style');
    const targetAssetsBase = path.join(cwd, dirs.assetsDir);
    let updated = source;
    // Rewrite imports to styles/style
    updated = updated.replace(/from\s+(["'])((?:\.{1,2}\/)+)styles\/style\1/g, (m, quote) => {
      const relToStyle = path.relative(fileDir, targetStyleBase);
      let newPath = toPosix(relToStyle);
      if (!newPath.startsWith('.')) newPath = './' + newPath;
      return `from ${quote}${newPath}${quote}`;
    });
    // Rewrite imports to assets/*
    updated = updated.replace(/from\s+(["'])((?:\.{1,2}\/)+)assets\/(.*?)\1/g, (m, quote, _rel, subPath) => {
      const targetAbs = path.join(targetAssetsBase, subPath);
      const relToTarget = path.relative(fileDir, targetAbs);
      let newPath = toPosix(relToTarget).replace(/\.js$/i, '');
      if (!newPath.startsWith('.')) newPath = './' + newPath;
      return `from ${quote}${newPath}${quote}`;
    });
    if (updated !== source) fs.writeFileSync(absFilePath, updated, 'utf8');
  } catch (e) {
    console.warn('Warning: Could not adjust imports for', absFilePath, '-', e.message);
  }
}

const filesMap = {
  alert: [
    { src: 'components/ui/Alert.js', dest: 'components/ui/Alert.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' },
    { src: 'assets/icons/successIcon.js', dest: 'assets/icons/successIcon.js' },
    { src: 'assets/icons/informationIcon.js', dest: 'assets/icons/informationIcon.js' },
    { src: 'assets/icons/errorIcon.js', dest: 'assets/icons/errorIcon.js' },
    { src: 'assets/icons/disabledIcon.js', dest: 'assets/icons/disabledIcon.js' },
    { src: 'assets/icons/closeIcon.js', dest: 'assets/icons/closeIcon.js' }
  ],
  avatar: [
    { src: 'components/ui/Avatar.js', dest: 'components/ui/Avatar.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' },
    { src: 'assets/icons/avatarIcon.js', dest: 'assets/icons/avatarIcon.js' },
    { src: 'assets/icons/onlineIcon.js', dest: 'assets/icons/onlineIcon.js' },
    { src: 'assets/icons/offlineIcon.js', dest: 'assets/icons/offlineIcon.js' }
  ],
  avatargroup: [
    { src: 'components/ui/AvatarGroup.js', dest: 'components/ui/AvatarGroup.js' },
    { src: 'components/ui/Avatar.js', dest: 'components/ui/Avatar.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' },
    { src: 'assets/icons/avatarIcon.js', dest: 'assets/icons/avatarIcon.js' },
    { src: 'assets/icons/onlineIcon.js', dest: 'assets/icons/onlineIcon.js' },
    { src: 'assets/icons/offlineIcon.js', dest: 'assets/icons/offlineIcon.js' }
  ],
  badge: [
    { src: 'components/ui/Badge.js', dest: 'components/ui/Badge.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' }
  ],
  tag: [
    { src: 'components/ui/Tag.js', dest: 'components/ui/Tag.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' }
  ],
  theme: [
    { src: 'styles/style.js', dest: 'styles/style.js' }
  ]
};

const args = process.argv.slice(2);
const flags = parseFlags(args);

function copyFiles(fileList) {
  const copied = new Set();
  const cwd = process.cwd();
  const dirs = resolveTargetDirs(cwd, flags);
  let copiedCount = 0;

  [dirs.componentsDir, dirs.stylesDir, dirs.assetsDir].forEach((d) => {
    if (!d) return;
    try { fs.mkdirSync(path.join(cwd, d), { recursive: true }); } catch {}
  });

  console.log('Starting copy process');
  console.log(`Targets: components='${toPosix(dirs.componentsDir)}', styles='${toPosix(dirs.stylesDir)}', assets='${toPosix(dirs.assetsDir)}'`);

  fileList.forEach((file) => {
    const fileKey = `${file.src}:${file.dest}`;
    if (copied.has(fileKey)) return;

    const src = path.join(__dirname, file.src);
    const mappedDestRel = mapDestPath(file.dest, dirs);
    const dest = path.join(cwd, mappedDestRel);

    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      copied.add(fileKey);
      copiedCount += 1;
      console.log(`Copied: '${toPosix(path.relative(cwd, src))}' -> '${toPosix(path.relative(cwd, dest))}'`);
      adjustImportsForFile(dest, dirs, cwd);
    } catch (error) {
      console.error(`Error copying '${toPosix(path.relative(cwd, src))}':`, error.message);
    }
  });

  console.log(`Done: ${copiedCount} file(s) copied.`);
}

if (args[0] === 'add' && args[1]) {
  const name = args[1].toLowerCase();
  const files = filesMap[name];
  if (!files) {
    console.error(`Unknown component: ${name}`);
    process.exit(1);
  }
  copyFiles(files);
} else {
  console.log('Usage: dynamiclayer add <component> [--components=path] [--styles=path] [--assets=path]');
  console.log('Available components:', Object.keys(filesMap).join(', '), '\n');
  console.log('Optional: dynamiclayer.config.json in the project root, e.g.:');
  console.log('{ "componentsDir": "src/components", "stylesDir": "src/styles", "assetsDir": "src/assets" }');
}

