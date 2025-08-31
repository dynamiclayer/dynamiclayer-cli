# Badge Component

Use this command to install the component in your project:

```bash
dynamiclayer add badge
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import { Badge } from "@/components/ui/Badge"

<Badge>Default</Badge>
<Badge type="warning">Warning</Badge>
<Badge type="success">Success</Badge>
<Badge type="error">Error</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'default' \| 'warning' \| 'success' \| 'error' | 'default' | Sets the badge style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Controls the size of the badge |
| text | string | 'Badge' | The text content of the badge |
| style | ViewStyle | - | Additional styles for the badge container |
| textStyle | TextStyle | - | Additional styles for the badge text |

## Examples

```jsx
// Success badge with custom text
<Badge type="success" text="Completed" />

// Large warning badge
<Badge type="warning" size="lg" text="Pending" />

// Small error badge with custom styles
<Badge 
  type="error" 
  size="sm" 
  text="Failed"
  style={{ marginLeft: 8 }}
  textStyle={{ fontWeight: 'bold' }}
/>
```
