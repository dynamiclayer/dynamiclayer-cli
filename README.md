# DynamicLayer CLI

A small CLI to quickly copy prebuilt React Native UI components into your project — including icons and styles. The CLI auto-detects your component folder layout and rewrites imports after copying.

## Installation

```bash
npm install -g @dynamiclayer/cli
```

## Peer Dependencies (install in your target project)

Copied components rely on the following packages. Install these in your app (not in the CLI):

```bash
npm install react-native-safe-area-context react-native-svg react-native-reanimated
```

Note: These are declared as peerDependencies of the CLI.

## Usage

```bash
dynamiclayer add <component>

# Optional: choose target folders
dynamiclayer add <component> \
  --components=src/components \
  --styles=src/styles \
  --assets=src/assets
```

Supported components:
- `alert`
- `avatar`
- `avatargroup`
- `badge`
- `tag`
- `theme` (copies only `styles/style.js`)

## Auto-Detection & Config

- Auto-detection checks in your project: `src/components` → `src` → `app/components` → project root.
- From this, target paths for `components/`, `styles/`, and `assets/` are derived.
- Alternatively, add a `dynamiclayer.config.json` in your project root:

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

## License

MIT — see `LICENSE`.

