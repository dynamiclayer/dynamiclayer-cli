# Button Dock

Persistent action bar that pins one or two buttons to the bottom edge while respecting the device safe area insets.

## Install

```bash
dynamiclayer add buttondock
```

## Usage

```jsx
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import ButtonDock from "@/components/ui/ButtonDock";

<SafeAreaProvider>
  <ButtonDock
    direction="horizontal"
    firstButton={<Button text="Cancel" type="tertiary" />}
    secondButton={<Button text="Publish" onPress={handlePublish} />}
  />
</SafeAreaProvider>
```

- Renders two calls-to-action aligned to the bottom of the screen with consistent gaps and padding.
- Wrap the tree in `SafeAreaProvider` so the dock can read bottom inset values.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'horizontal' \| 'vertical'` | `'vertical'` | Orientation of the stacked buttons inside the dock. |
| `firstButton` | `ReactNode` | `null` | Element rendered in the first slot of the dock. |
| `secondButton` | `ReactNode` | `null` | Element rendered in the second slot of the dock. |
| `style` | `ViewStyle` | `null` | Optional style override applied to the overlay container. |

## Notes

- The dock stretches across the full width of the viewport and applies `colors.white` with a subtle top border from `styles/style.js`.
- The component forwards `pointerEvents="box-none"` to keep background scroll views responsive.
- Slot in any button components: primary actions go last when `direction="vertical"` so the hierarchy reads naturally.

## Variants

| Variant | When to use | Key change |
|---------|-------------|------------|
| `direction="vertical"` | Mobile layouts with stacked actions | Buttons appear as a column with even spacing. |
| `direction="horizontal"` | Wider screens or dual actions | Buttons share the width in a row. |

## Examples

```jsx
<ButtonDock
  firstButton={<Button text="Discard" type="secondary" />}
  secondButton={<Button text="Save Draft" />}
/>

<ButtonDock
  direction="horizontal"
  firstButton={<Button text="Preview" type="tertiary" />}
  secondButton={<Button text="Publish" type="primary" />}
/>
```

- Use the vertical layout for confirmation flows where primary and secondary actions must stay anchored.
- Horizontal layout keeps both buttons equally prominent on tablet or desktop surfaces.

## Related

- docs/button.md - Primary button component used inside the dock.
- docs/button-icon.md - Complementary icon-only actions for toolbars.
