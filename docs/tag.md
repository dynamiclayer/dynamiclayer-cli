# Tag

Compact pill label for metadata, statuses, and filter chips. Comes with semantic variants (`default`, `warning`, `success`, `error`) and size presets.

## Install

```bash
dynamiclayer add tag
```

## Usage

```jsx
import Tag from "@/components/ui/Tag";

<Tag>Default</Tag>
<Tag type="warning">Warning</Tag>
<Tag type="success">Success</Tag>
<Tag type="error">Error</Tag>

<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>

<Tag text="Custom Text" />
<Tag>Children Text</Tag>
```

- Prefer `children` for dynamic text; `text` is a quick fallback.
- Unknown `type` or `size` values fall back to `default` and `md`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' | 'warning' | 'success' | 'error'` | `'default'` | Semantic color scheme. |
| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Controls height, padding, and typography. |
| `text` | `string` | `'Tag'` | Content when `children` is missing. |
| `style` | `ViewStyle` | `null` | Wrapper override. |
| `textStyle` | `TextStyle` | `null` | Label override. |
| `children` | `ReactNode` | `null` | Alternative to `text`; rendered as-is. |

## Notes

- `children` wins over `text`, so avoid supplying both.
- Apply `textStyle` for casing changes or extra spacing.
- Tag centers its label and keeps horizontal padding consistent.
- Size presets keep heights predictable across lists and cards.
- No internal loading state; control rendering at a higher level.

## Variants

| Variant | When to use | Key change |
|---------|-------------|-----------|
| `type="default"` | Neutral metadata badges | Grey background and text |
| `type="warning"` | Cautionary states | Yellow background and text |
| `type="success"` | Positive confirmations | Green background and text |
| `type="error"` | Problems needing attention | Red background and text |

### Sizes

| Size | Height | Padding (x/y) | Typography |
|------|--------|---------------|------------|
| `sm` | 20 px | 4 / 2 px | `textStyles.text_xs_semibold` |
| `md` | 24 px | 8 / 2 px | `textStyles.text_sm_semibold` |
| `lg` | 28 px | 8 / 2 px | `textStyles.text_base_semibold` |

## Examples

```jsx
<Tag />
<Tag type="success" text="Live" />
<Tag size="sm" type="warning">Beta</Tag>
```

- Pair with `Badge` to show both state and count on the same element.

## Related

- docs/badge.md - Dot or count badge
- docs/alert.md - High-attention messaging
