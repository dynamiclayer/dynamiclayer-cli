# Alert

Top-of-screen banner for success, error, warning, or information messages. Animates in, auto-dismisses by default, and respects safe-area padding.

## Install

```bash
dynamiclayer add alert
```

## Usage

```jsx
import Alert from "@/components/ui/Alert";

<Alert type="success" title="Success!" description="Saved." />
<Alert type="error" title="Error" description="Something went wrong." stay />
<Alert type="information" title="Info" description="New update available." closeIcon={false} />
```

- `stay` keeps the banner visible until dismissed manually.
- Set `closeIcon={false}` for passive information that should not be closed.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' | 'error' | 'warning' | 'information'` | `'information'` | Visual style and icon. |
| `title` | `string` | `null` | Heading text. |
| `description` | `string` | `null` | Body text. |
| `closeIcon` | `boolean` | `true` | Show the close button. |
| `stay` | `boolean` | `false` | Block the auto-dismiss timer. |

## Notes

- Provide at least one of `title` or `description`.
- `stay` disables the timer only; the close button still works when present.
- Banner slides in from the top, then fades and collapses on dismiss.
- Auto-dismiss fires after roughly six seconds unless `stay` is true.
- Close button includes generous hit slop for easier taps.

## Variants

| Variant | When to use | Key styling |
|---------|-------------|-------------|
| `success` | Confirm a finished task | Green icon on white banner |
| `error` | Blocking issues | Red icon on white banner |
| `warning` | Heads-up messages | Yellow icon for caution |
| `information` | Neutral updates | Violet-accented info icon |

## Examples

```jsx
<Alert type="warning" title="Heads up" description="Check your internet connection." />
<Alert type="success" title="Saved" description="Changes stored successfully." stay />
```

- Pair alerts with inline actions so users can resolve issues quickly.

## Related

- docs/badge.md - Show counts on icons
- docs/tag.md - Label statuses inline
