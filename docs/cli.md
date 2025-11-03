# DynamicLayer CLI

Command-line tool that copies DynamicLayer UI components, styles, and assets into your project. It auto-detects common folder structures, rewrites relative imports, and respects project-level overrides.

## Overview

- Supports the `dynamiclayer add <component>` workflow for scaffolding UI building blocks.
- Detects `src/`, `app/`, or project-root layouts and rewrites imports accordingly.
- Optional `dynamiclayer.config.json` lets you define custom component, style, and asset paths once per project.

## Install

```bash
npm install -g @dynamiclayer/cli
```

- Requires Node.js 16 or newer.
- Install locally inside a project when you prefer a project script over a global binary.

## Usage

```bash
dynamiclayer add <component>

# Override target folders
dynamiclayer add <component> \
  --components=src/components \
  --styles=src/styles \
  --assets=src/assets
```

- Available components: `alert`, `avatar`, `avatargroup`, `badge`, `button`, `tag`, `theme`.
- Import rewrites run on `.js`, `.jsx`, `.ts`, and `.tsx` files so relative paths stay valid.

## Options

| Flag | Type | Description |
|------|------|-------------|
| `--components=<path>` | `string` | Destination for component files (default inferred or from config). |
| `--styles=<path>` | `string` | Destination for style tokens such as `styles/style.js`. |
| `--assets=<path>` | `string` | Destination for icons and other supporting assets. |

- Flags override config and auto-detection for the current run.
- Provide relative paths without leading `./`; the CLI normalizes them internally.

## Examples

```bash
# Copy the badge component into a monorepo package
dynamiclayer add badge --components=packages/mobile/src/ui --styles=packages/mobile/src/theme --assets=packages/mobile/src/assets

# Prime a fresh project with base theming tokens
dynamiclayer add theme
```

- After copying, review the console output to see where files landed and which imports were rewritten.

## Troubleshooting

- `Unknown component`: run `dynamiclayer add` without arguments to list supported names.
- `Could not read dynamiclayer.config.json`: ensure the file contains valid JSON; the CLI falls back to defaults if parsing fails.
- Imports not updating: verify your files use relative paths such as `../../styles/style`; absolute aliases are not rewritten.
- Missing peer dependencies: install `react-native-safe-area-context`, `react-native-svg`, and `react-native-reanimated` when copying components that rely on them.

## Related

- docs/README.md - Docs overview
- docs/avatar.md - Avatar component reference
