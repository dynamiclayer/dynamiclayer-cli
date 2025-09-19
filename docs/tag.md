# Tag

Compact label for metadata or status. Supports variants, sizes, and custom text.

## Install

```bash
dynamiclayer add tag
```

## Usage

```jsx
import Tag from "@/components/ui/Tag";

// Variants
<Tag>Default</Tag>
<Tag type="warning">Warning</Tag>
<Tag type="success">Success</Tag>
<Tag type="error">Error</Tag>

// Sizes
<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>

// With text prop
<Tag text="Custom Text" />

// With children
<Tag>Children Text</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' | 'warning' | 'success' | 'error'` | `'default'` | Visual variant. |
| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Component size. |
| `text` | `string` | `'Tag'` | Text content when children are not provided. |
| `style` | `ViewStyle` | `null` | Container style override. |
| `textStyle` | `TextStyle` | `null` | Label text style override. |
| `children` | `ReactNode` | `null` | Alternative to `text`. |

## Sizes

| Size | Height | Padding (X/Y) | Text Style |
|------|--------|---------------|------------|
| `sm` | 20 px | 4 / 2 px | `textStyles.text_xs_semibold` |
| `md` | 24 px | 8 / 2 px | `textStyles.text_sm_semibold` |
| `lg` | 28 px | 8 / 2 px | `textStyles.text_base_semibold` |

## Variants

| Type | Background | Text |
|------|------------|------|
| `default` | `colors.grey100` | `colors.grey600` |
| `warning` | `colors.yellow300` | `colors.yellow700` |
| `success` | `colors.green100` | `colors.green700` |
| `error` | `colors.red100` | `colors.red600` |

## Examples

```jsx
<Tag />
<Tag type="success" text="Live" />
<Tag size="sm" type="warning">Beta</Tag>
```

## Related

- docs/badge.md - Dot or count badge
- docs/alert.md - High-attention messaging
