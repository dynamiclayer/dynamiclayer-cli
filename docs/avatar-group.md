# Avatar Group Component

Use this command to install the component in your project:

```bash
dynamiclayer add avatargroup
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import AvatarGroup from "@/components/ui/AvatarGroup"

// Basic usage with default settings
<AvatarGroup avatars={[
  { type: "icon" },
  { type: "initials" }
]} />

// With maximum display limit
<AvatarGroup 
  avatars={[
    { type: "image", image: require("./user1.png") },
    { type: "image", image: require("./user2.png") },
    { type: "icon" },
    { type: "icon" }
  ]}
  max={2}
  size="lg"
/>

// Different sizes
<AvatarGroup avatars={[...]} size="xs" />
<AvatarGroup avatars={[...]} size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| avatars | Array<AvatarProps> | [] | Array of avatar configurations |
| size | 'xs' \| 'lg' | 'lg' | Controls the size of all avatars |
| max | number | 2 | Maximum number of avatars to display before showing count |
| style | ViewStyle | - | Additional styles for the container |

### AvatarProps Type

Each avatar in the `avatars` array accepts the same props as the Avatar component:

```typescript
type AvatarProps = {
  type?: 'icon' | 'initials' | 'image';
  state?: 'default' | 'online' | 'offline';
  image?: ImageSourcePropType;  // For type="image"
}
```

## Examples

```jsx
// Mix of different avatar types
<AvatarGroup 
  avatars={[
    { type: "image", image: userImage, state: "online" },
    { type: "initials" },
    { type: "icon", state: "offline" }
  ]}
  size="lg"
/>

// Custom styling
<AvatarGroup 
  avatars={[...]}
  size="lg"
  style={{ marginBottom: 16 }}
/>

// Show all avatars
<AvatarGroup 
  avatars={[
    { type: "icon" },
    { type: "icon" }
  ]}
  max={999}
  size="lg"
/>
```

## Behavior

1. If there are 2 avatars:
   - Both avatars are displayed overlapping
   - No count indicator is shown

2. If there are 3 or more avatars:
   - First avatar is displayed
   - A count indicator shows the number of remaining avatars
   - The count appears in a circle matching the avatar size

3. Layout:
   - Avatars overlap by 16 pixels
   - Second avatar or count indicator is positioned behind the first avatar
