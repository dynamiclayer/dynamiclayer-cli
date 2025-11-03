# Badge

Compact dot or pill for unread counts, notification totals, or quick status indicators. Can sit above another element with absolute positioning.

## Install

```bash
dynamiclayer add badge
```

## Usage

```jsx
import { View } from "react-native";
import Badge from "@/components/ui/Badge";

<View>
  <Badge size="sm" notifications={4} />
  <Badge notifications={5} />
  <Badge notifications={120} maxCount={99} offsetX={-5} offsetY={-5} />
  <Badge notifications={0} showZero />
</View>
```

- Offsets are measured from the parent view when `absolute` is true (default).
- Pass the unread or notification total through the `notifications` prop.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' | 'md'` | `'md'` | Dot or pill layout. |
| `notifications` | `number` | `undefined` | Number to display. |
| `showZero` | `boolean` | `false` | Render when the value equals zero. |
| `maxCount` | `number` | `99` | Switch to `"99+"` style suffix. |
| `absolute` | `boolean` | `true` | Toggle absolute positioning. |
| `offsetX` | `number` | `0` | Horizontal offset when absolute. |
| `offsetY` | `number` | `0` | Vertical offset when absolute. |
| `style` | `ViewStyle` | `null` | Wrapper override. |
| `badgeStyle` | `ViewStyle` | `null` | Dot or pill override. |
| `textStyle` | `TextStyle` | `null` | Label override. |

## Notes

- The component returns `null` unless it has a value or `showZero` is true.
- Set `absolute={false}` when the badge should take up layout space.
- Dot mode (`size="sm"`) hides the label and renders an 8 px circle.
- Pill mode (`size="md"`) centers text and enforces a minimum width.
- `maxCount` keeps large numbers compact by adding a `+` suffix.
- Wrapper uses `pointerEvents="none"` so taps fall through to the host control.

## Variants

| Variant | When to use | Key change |
|---------|-------------|-----------|
| `size="sm"` | Presence dots or notification hints | 8 px circle without text |
| `size="md"` | Counts and totals | 16 px pill with text |

## Examples

```jsx
<Badge notifications={12} />
<Badge notifications={34} maxCount={99} />
<Badge notifications={3} absolute={false} />
<Badge notifications={0} showZero badgeStyle={{ backgroundColor: "#2dd4bf" }} />
```

- Pair with `Alert` to flag new announcements on navigation icons.

## Related

- docs/alert.md - Promote important notifications
- docs/tag.md - Inline status labels
