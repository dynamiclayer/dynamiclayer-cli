# Avatar Component

Use this command to install the component in your project:

```bash
dynamiclayer add avatar
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import { Avatar } from "@/components/ui/avatar"

// Different types
<Avatar type="icon" />
<Avatar type="initials" />
<Avatar type="image" />

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

## Examples

```jsx
// Icon avatar with online status
<Avatar type="icon" state="online" size="lg" />

// Initials avatar
<Avatar type="initials" size="md" />

// Image avatar with offline status
<Avatar type="image" state="offline" size="sm" />
```