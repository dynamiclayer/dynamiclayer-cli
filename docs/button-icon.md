# Button Icon

Square action button that wraps a single icon while reusing the button press, loading, and disabled states. Ideal for toolbars and dense UI controls.

## Install

```bash
dynamiclayer add buttonicon
```

## Usage

```jsx
import { View } from "react-native";
import ButtonIcon from "@/components/ui/ButtonIcon";
import MoreIcon from "@/assets/icons/moreIcon";

<View style={{ flexDirection: "row", alignItems: "center" }}>
  <ButtonIcon type="primary" icon={<MoreIcon />} onPress={() => {}} />
  <View style={{ width: 12 }} />
  <ButtonIcon type="secondary" size="sm" icon={<MoreIcon />} />
  <View style={{ width: 12 }} />
  <ButtonIcon state="loading" icon={<MoreIcon />} />
</View>
```

- Applies matching colors and rounded corners from the core button system.
- Replace `<MoreIcon />` with any SVG or vector icon component already in your project.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | `null` | Icon element rendered in the center of the button. |
| `onPress` | `() => void` | `undefined` | Callback when the button is pressed. Ignored in non-interactive states. |
| `type` | `'primary' \| 'secondary' \| 'tertiary'` | `'secondary'` | Visual theme for background, border, and icon tint. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'lg'` | Sets height and internal padding to keep the button square. |
| `state` | `'default' \| 'hover' \| 'pressed' \| 'disabled' \| 'loading'` | `'default'` | Force a specific visual state. |
| `containerStyle` | `ViewStyle` | `null` | Style override applied to the outer pressable. |

## Notes

- When `state="loading"` the button replaces the icon with an animated three-dot loader and disables presses.
- Setting `state="disabled"` blocks taps while retaining the layout footprint.
- Internal hover and pressed states trigger automatically when no explicit `state` prop is provided.
- The button is square by default; adjust width or padding via `containerStyle` for custom layouts.

## Variants

| Variant | When to use | Key change |
|---------|-------------|------------|
| `type="primary"` | Main actions, confirmations | Violet background, white icon |
| `type="secondary"` | Neutral actions | Charcoal background, white icon |
| `type="tertiary"` | Light mode or neutral surfaces | White background with subtle border |
| `size="xs"` | Tight toolbars | 32 px height |
| `size="lg"` | Primary call-to-action icons | 56 px height |

## Examples

```jsx
<ButtonIcon type="primary" icon={<EditIcon />} onPress={handleEdit} />
<ButtonIcon type="tertiary" state="disabled" icon={<TrashIcon />} />
<ButtonIcon state="loading" type="secondary" icon={<RefreshIcon />} />
```

- Use different icon components to convey the action clearly.
- Loading state communicates background work without leaving the button footprint.

## Related

- docs/badge.md - Badge counts for toolbar icons
- docs/alert.md - Complementary feedback banners
