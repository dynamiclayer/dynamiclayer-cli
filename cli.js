#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping, welche Dateien bei welchem Befehl kopiert werden
const filesMap = {
  badge: [
    { src: 'components/ui/Badge.js', dest: 'components/ui/Badge.js' },
    { src: 'styles/style.js', dest: 'styles/style.js' }
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
  theme: [
    { src: 'styles/style.js', dest: 'styles/style.js' }
  ]
};

const args = process.argv.slice(2);

function copyFiles(fileList) {
  const copied = new Set(); // Verhindern von doppeltem Kopieren

  fileList.forEach(file => {
    const fileKey = `${file.src}:${file.dest}`;
    if (copied.has(fileKey)) return;

    const src = path.join(__dirname, file.src);
    const dest = path.join(process.cwd(), file.dest);
    
    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      copied.add(fileKey);
      console.log(`✓ Kopiert: ${file.src} → ${file.dest}`);
    } catch (error) {
      console.error(`✗ Fehler beim Kopieren von ${file.src}:`, error.message);
    }
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
