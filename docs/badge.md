# Badge Component

Use this command to install the component in your project:

```bash
dynamiclayer add badge
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import { Badge } from "@/components/ui/Badge"

// Different types
<Badge>Default</Badge>
<Badge type="warning">Warning</Badge>
<Badge type="success">Success</Badge>
<Badge type="error">Error</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// With custom text
<Badge text="Custom Text" />

// As a child component
<Badge>Children Text</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'default' \| 'warning' \| 'success' \| 'error' | 'default' | Sets the badge style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Controls the size of the badge |
| text | string | 'Badge' | The text content of the badge |
| style | ViewStyle | - | Additional styles for the badge container |
| textStyle | TextStyle | - | Additional styles for the badge text |
| children | ReactNode | - | Alternative to text prop |

## Size Dimensions

| Size | Height | Horizontal Padding | Text Size |
|------|--------|-------------------|-----------|
| sm | 20px | 4px | xs |
| md | 24px | 8px | sm |
| lg | 28px | 8px | base |

## Color Variants

| Type | Background | Text Color |
|------|------------|------------|
| default | grey100 | grey600 |
| warning | yellow300 | yellow700 |
| success | green100 | green700 |
| error | red100 | red600 |

## Examples

```jsx
// Success badge with custom text
<Badge 
  type="success" 
  text="Completed" 
/>

// Large warning badge
<Badge 
  type="warning" 
  size="lg" 
  text="Pending" 
/>

// Small error badge with custom styles
<Badge 
  type="error" 
  size="sm" 
  text="Failed"
  style={{ marginLeft: 8 }}
  textStyle={{ fontWeight: 'bold' }}
/>

// Using children prop
<Badge type="success">
  Task Complete
</Badge>
```

## Content Priority

The badge content is determined in the following order:
1. Children prop (if provided)
2. Text prop (if provided)
3. Default text "Badge"
