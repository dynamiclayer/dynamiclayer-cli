# Tag Component

Use this command to install the component in your project:

```bash
dynamiclayer add tag
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import { Tag } from "@/components/ui/Tag"

// Different types
<Tag>Default</Tag>
<Tag type="warning">Warning</Tag>
<Tag type="success">Success</Tag>
<Tag type="error">Error</Tag>

// Different sizes
<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>

// With custom text
<Tag text="Custom Text" />

// As a child component
<Tag>Children Text</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'default' \| 'warning' \| 'success' \| 'error' | 'default' | Sets the tag style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Controls the size of the tag |
| text | string | 'Tag' | The text content of the tag |
| style | ViewStyle | - | Additional styles for the tag container |
| textStyle | TextStyle | - | Additional styles for the tag text |
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
// Success tag with custom text
<Tag 
  type="success" 
  text="Completed" 
/>

// Large warning tag
<Tag 
  type="warning" 
  size="lg" 
  text="Pending" 
/>

// Small error tag with custom styles
<Tag 
  type="error" 
  size="sm" 
  text="Failed"
  style={{ marginLeft: 8 }}
  textStyle={{ fontWeight: 'bold' }}
/>

// Using children prop
<Tag type="success">
  Task Complete
</Tag>
```

## Content Priority

The tag content is determined in the following order:
1. Children prop (if provided)
2. Text prop (if provided)
3. Default text "Tag"
