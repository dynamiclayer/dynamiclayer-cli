# Doc Blueprint

Use this template as the baseline schema for future docs. Keep descriptions lean, focus on usage, and remove helper comments before publishing.

---

# ComponentName

One short sentence that says what the component does.

## Install

```bash
dynamiclayer add component-name
```

## Usage

```jsx
import ComponentName from "@/components/ui/ComponentName";

// Show the primary scenario.
<ComponentName /* key props */ />
```

- Explain what the snippet does and the outcome for the user.
- Mention any setup that must exist beforehand (providers, data, etc.).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `string` | `'value'` | Explain the prop in one short sentence. |

## Notes

- Call out important caveats, defaults, or usage tips.
- Link to other docs when the component accepts shared objects.

## Variants

| Variant | When to use | Key props/styles |
|---------|-------------|------------------|
| `primary` | Default action | `type="primary"` |

- Keep the table short and highlight what actually changes.

## Examples

```jsx
// Add at least two realistic scenarios.
<ComponentName variant="primary" />
```

- Add quick notes so readers know why each example matters.

## Related

- docs/another-component.md - Mention why it is relevant.
- docs/tag.md - Highlight complementary usage.

---

### CLI Doc Pattern

Use this section when documenting CLI commands instead of components.

# CommandName CLI

## Overview

- Summarize the tool, its primary purpose, and its audience.
- Reference related commands if helpful.

## Install

```bash
npm install -g dynamiclayer-cli
```

- Mention prerequisites (Node version, environment variables, etc.).

## Usage

```bash
dynamiclayer command-name [options]
```

- Document required options first, then optional flags.
- Provide multiple usage scenarios with short explanations.

## Options

| Flag | Type | Description |
|------|------|-------------|
| `--flag` | `string` | Explain what the flag does. |

- Call out defaults, mutually exclusive flags, and environment variables.

## Examples

```bash
dynamiclayer command-name --flag example
```

- Describe what the command does in this context and expected output.

## Troubleshooting

- List common errors, their causes, and fixes.
- Include links to other docs when available.

## Related

- docs/cli.md - Core CLI overview.
- docs/another-command.md - Complementary command.
