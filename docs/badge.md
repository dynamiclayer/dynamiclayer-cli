# Badge

Small dot or pill to show counts or notifications. Can be absolutely positioned over another element.

## Install

```bash
dynamiclayer add badge
```

## Usage

```jsx
import { View } from "react-native";
import Badge from "@/components/ui/Badge";

<View>
  {/* Dot */}
  <Badge size="sm" />

  {/* Count */}
  <Badge count={5} />

  {/* Max + offsets */}
  <Badge count={120} maxCount={99} offsetX={-5} offsetY={-5} />

  {/* Show zero */}
  <Badge notifications={0} showZero />
</View>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' | 'md'` | `'md'` | `'sm'` renders a dot, `'md'` renders a pill. |
| `count` | `number` | `null` | Value to display. |
| `notifications` | `number` | `null` | Alternative to `count`. |
| `showZero` | `boolean` | `false` | Render the badge when the value is `0`. |
| `maxCount` | `number` | `99` | Switch to `maxCount+` when exceeded. |
| `absolute` | `boolean` | `true` | Position absolutely relative to parent. |
| `offsetX` | `number` | `0` | Horizontal offset when `absolute`. |
| `offsetY` | `number` | `0` | Vertical offset when `absolute`. |
| `style` | `ViewStyle` | `null` | Container style override. |
| `badgeStyle` | `ViewStyle` | `null` | Dot or pill style override. |
| `textStyle` | `TextStyle` | `null` | Label text style override. |

## Sizes

| Size | Shape | Height | Text Style |
|------|-------|--------|------------|
| `sm` | Dot | 8 px | `null` |
| `md` | Pill | 16 px | `textStyles.text_xs_semibold` |

## Examples

```jsx
<Badge />
<Badge count={34} maxCount={99} />
<Badge count={3} absolute={false} />
<Badge count={0} showZero badgeStyle={{ backgroundColor: "#2dd4bf" }} />
```

## Related

- docs/alert.md - Promote important notifications
- docs/tag.md - Inline status labels
