#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping, welche Dateien bei welchem Befehl kopiert werden
const filesMap = {
  badge: [
    { src: 'components/Badge.js', dest: '@/components/ui/Badge.js' },
    { src: 'styles/style.js', dest: '@/styles/style.js' }
  ],
  avatar: [
    { src: 'components/Avatar.js', dest: '@/components/ui/Avatar.js' },
    { src: 'styles/style.js', dest: '@/styles/style.js' },
    { src: 'assets/icons/avatarIcon.js', dest: '@/assets/icons/avatarIcon.js' },
    { src: 'assets/icons/onlineIcon.js', dest: '@/assets/icons/onlineIcon.js' },
    { src: 'assets/icons/offlineIcon.js', dest: '@/assets/icons/offlineIcon.js' }
  ],
  theme: [
    { src: 'styles/style.js', dest: '@/styles/style.js' }
  ]
};

const args = process.argv.slice(2);

function copyFiles(fileList) {
  fileList.forEach(file => {
    const src = path.join(__dirname, file.src);
    // Convert @/ to actual path
    const normalizedDest = file.dest.replace('@/', '');
    const dest = path.join(process.cwd(), normalizedDest);
    
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Kopiert ${file.src} nach ${dest}`);
  });
}

if (args[0] === 'add' && args[1]) {
  const name = args[1].toLowerCase();
  const files = filesMap[name];
  if (!files) {
    console.error(`Unbekannte Komponente: ${name}`);
    process.exit(1);
  }
  copyFiles(files);
} else {
  console.log('Verwendung: dynamiclayer add <komponente>');
  console.log('Verfügbare Komponenten:', Object.keys(filesMap).join(', '), '\n');
}
