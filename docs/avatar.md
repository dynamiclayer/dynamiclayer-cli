# Avatar

Circular user representation as icon, initials, or image. Supports online/offline indicators and multiple sizes.

## Install

```bash
dynamiclayer add avatar
```

## Usage

```jsx
import Avatar from "@/components/ui/Avatar";

// Types
<Avatar type="icon" />
<Avatar type="initials" />
<Avatar type="image" image={require("./profile.png")} />

// States
<Avatar state="default" />
<Avatar state="online" />
<Avatar state="offline" />

// Sizes
<Avatar size="xs" />
<Avatar size="sm" />
<Avatar size="md" />
<Avatar size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'icon' | 'initials' | 'image'` | `'icon'` | Display style. |
| `state` | `'default' | 'online' | 'offline'` | `'default'` | Status indicator. |
| `size` | `'xs' | 'sm' | 'md' | 'lg'` | `'md'` | Overall avatar size. |
| `image` | `ImageSourcePropType` | `null` | Source when `type="image"`.

## Sizes

| Size | Diameter | Status Dot |
|------|----------|------------|
| `xs` | 32 px | 12 px |
| `sm` | 40 px | 14 px |
| `md` | 48 px | 16 px |
| `lg` | 56 px | 18 px |

## Examples

```jsx
// Icon with online status
<Avatar type="icon" state="online" size="lg" />

// Initials
<Avatar type="initials" size="md" />

// Image with offline state
<Avatar type="image" state="offline" size="sm" image={require("./profile.png")} />

// Default (md icon)
<Avatar />
```

## Related

- docs/avatar-group.md - Stack multiple avatars
