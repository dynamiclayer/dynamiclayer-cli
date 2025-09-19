# Alert

Top-of-screen banner for success, error, warning, and information messages. Supports auto-dismiss, manual close, and safe-area aware layout.

## Install

```bash
dynamiclayer add alert
```

## Usage

```jsx
import Alert from "@/components/ui/Alert";

// Success
<Alert type="success" title="Success!" description="Saved." />

// Error that stays visible
<Alert type="error" title="Error" description="Something went wrong." stay />

// Without close icon
<Alert type="information" title="Info" description="New update available." closeIcon={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' | 'error' | 'warning' | 'information'` | `'information'` | Visual style and icon. |
| `title` | `string` | `null` | Main heading text. |
| `description` | `string` | `null` | Supporting message. |
| `closeIcon` | `boolean` | `true` | Show the close button. |
| `stay` | `boolean` | `false` | Prevent auto-dismiss. |

## Behavior

- Animated slide-in and fade-out
- Auto-dismisses after roughly 6 seconds unless `stay` is set
- Close button provides manual dismissal
- Layout respects safe-area insets

## Theming

Uses tokens from `styles/style.js` for colors, spacing, radius, and typography:
- Title: `textStyles.text_base_semibold`
- Description: `textStyles.text_base_regular`

## Accessibility

- Screen reader role: `alert`
- Close button includes an accessible label
- Generous hit slop on touch targets

## Examples

```jsx
<Alert type="warning" title="Heads up" description="Check your internet connection." />
<Alert type="success" title="Saved" description="Changes stored successfully." stay />
```

## Related

- docs/badge.md - Show counts on icons
- docs/tag.md - Label statuses inline
