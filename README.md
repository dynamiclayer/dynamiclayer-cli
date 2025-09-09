# DynamicLayer CLI

CLI zum schnellen Kopieren vorgefertigter React‑Native‑Komponenten in dein Projekt – inklusive Icons und Styles. Die CLI erkennt automatisch deinen Komponentenordner und passt Importe nach dem Kopieren an.

## Installation

```bash
npm install -g @dynamiclayer/cli
```

## Peer‑Dependencies (im Zielprojekt installieren)

Die kopierten Komponenten nutzen folgende Pakete. Bitte in deinem Projekt installieren (nicht in der CLI):

```bash
npm install react-native-safe-area-context react-native-svg react-native-reanimated
```

Hinweis: Diese sind als peerDependencies der CLI deklariert.

## Verwendung

```bash
dynamiclayer add <komponente>

# Optional mit Zielordnern
dynamiclayer add <komponente> \
  --components=src/components \
  --styles=src/styles \
  --assets=src/assets
```

Unterstützte Komponenten:
- `alert`
- `avatar`
- `avatargroup`
- `badge`
- `tag`
- `theme` (kopiert nur `styles/style.js`)

## Auto‑Erkennung & Konfiguration

- Auto‑Erkennung prüft in deinem Projekt: `src/components` → `src` → `app/components` → Projektroot.
- Daraus werden Zielpfade für `components/`, `styles/`, `assets/` abgeleitet.
- Alternative: Lege im Projektroot eine `dynamiclayer.config.json` an:

```json
{
  "componentsDir": "src/components",
  "stylesDir": "src/styles",
  "assetsDir": "src/assets"
}
```

## Import‑Rewrites

Nach dem Kopieren korrigiert die CLI Importpfade in den Komponenten automatisch:
- `../../styles/style` wird relativ zum neuen Speicherort angepasst.
- `../../assets/...` (z. B. Icons) wird auf den neuen `assets`‑Pfad gemappt.

## Beispiel‑Struktur

```
your-project/
  assets/
    icons/
      avatarIcon.js
      onlineIcon.js
      offlineIcon.js
  components/
    ui/
      Avatar.js
      Badge.js
  styles/
    style.js
```

## Lizenz

MIT – siehe [LICENSE](LICENSE).

