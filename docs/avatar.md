# Avatar Component

Use this command to install the component in your project:

```bash
dynamiclayer add avatar
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import Avatar from "@/components/ui/Avatar"

// Different types
<Avatar type="icon" />
<Avatar type="initials" />
<Avatar type="image" image={require('./profile.png')} />

// Different states
<Avatar state="default" />
<Avatar state="online" />
<Avatar state="offline" />

// Different sizes
<Avatar size="xs" />
<Avatar size="sm" />
<Avatar size="md" />
<Avatar size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'icon' \| 'initials' \| 'image' | 'icon' | Sets the avatar display type |
| state | 'default' \| 'online' \| 'offline' | 'default' | Controls the status indicator |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'md' | Controls the size of the avatar |
| image | ImageSourcePropType | null | The image source when type="image" |

## Size Dimensions

| Size | Dimensions | Status Dot |
|------|------------|------------|
| xs | 32px | 12px |
| sm | 40px | 14px |
| md | 48px | 16px |
| lg | 56px | 18px |

## Examples

```jsx
// Icon avatar with online status
<Avatar 
  type="icon" 
  state="online" 
  size="lg" 
/>

// Initials avatar with custom initials
<Avatar 
  type="initials" 
  size="md"
/>

// Image avatar with offline status and custom image
<Avatar 
  type="image" 
  state="offline" 
  size="sm"
  image={require('./profile.png')}
/>

// Default avatar with no status
<Avatar /> // Renders a medium icon avatar
```

## Related Components

- [Avatar Group](./avatar-group.md) - Display multiple avatars in a stack
