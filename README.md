# DynamicLayer CLI

Copy high‑quality React Native UI components into your project in seconds — including icons and theme tokens. The CLI auto‑detects your folder layout and rewrites imports after copying.

## Install

```bash
npm install -g @dynamiclayer/cli
```

## Quick Start

```bash
# Copy a component
dynamiclayer add <component>

# Optional: choose target folders
dynamiclayer add <component> --components=src/components --styles=src/styles --assets=src/assets
```

Supported components:
- `alert`
- `avatar`
- `avatargroup`
- `badge`
- `tag`
- `theme` (copies only `styles/style.js`)

Docs for each component and the CLI are in `docs/`:
- docs/alert.md
- docs/avatar.md
- docs/avatar-group.md
- docs/badge.md
- docs/tag.md
- docs/cli.md

## Auto‑Detection and Config

- The CLI looks for common roots in your project: `src/components` → `src` → `app/components` → project root.
- From this, it derives target paths for `components/`, `styles/`, and `assets/`.
- Alternatively, add a `dynamiclayer.config.json` at your project root:

```json
{
  "componentsDir": "src/components",
  "stylesDir": "src/styles",
  "assetsDir": "src/assets"
}
```

## Import Rewrites

After copying, the CLI automatically fixes import paths in components:
- Imports to `../../styles/style` are rewritten relative to the new location.
- Imports to `../../assets/...` (e.g., icons) are mapped to the new `assets` path.

## Example Structure

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

## Peer Dependencies (install in your app)

Components rely on these packages. Install them in your target app (not the CLI):

```bash
npm install react-native-safe-area-context react-native-svg react-native-reanimated
```

## License

MIT — see `LICENSE`.

