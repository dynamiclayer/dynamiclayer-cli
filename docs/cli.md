# CLI

Minimal command-line tool to copy components and theme files into your project. Auto-detects common folder layouts and rewrites relative imports.

## Install

```bash
npm install -g @dynamiclayer/cli
```

## Usage

```bash
# Copy a component
dynamiclayer add <component>

# Override target folders
dynamiclayer add <component> \
  --components=src/components \
  --styles=src/styles \
  --assets=src/assets
```

Available components: `alert`, `avatar`, `avatargroup`, `badge`, `tag`, `theme`.

## Auto-Detection

The CLI searches for a base path in this order:
1. `src/components`
2. `src`
3. `app/components`
4. Project root

From that base path it derives `components/`, `styles/`, and `assets/` targets.

## Project Config

Create `dynamiclayer.config.json` in your project root to override paths:

```json
{
  "componentsDir": "src/components",
  "stylesDir": "src/styles",
  "assetsDir": "src/assets"
}
```

## Import Rewrites

After copying, the CLI adjusts imports inside components:
- Rewrites imports to `styles/style`
- Rewrites imports to `assets/*` (for icons, images, etc.)

## Peer Dependencies

Install these in your target app:

```bash
npm install react-native-safe-area-context react-native-svg react-native-reanimated
```

## Related

- docs/avatar.md - Avatar component reference
- docs/README.md - Docs overview
