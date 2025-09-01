# Avatar Group Component

Use this command to install the component in your project:

```bash
dynamiclayer add avatar-group
```

## Usage

Add this code example to your project to see how the component works:

```jsx
import { AvatarGroup } from "@/components/ui/avatar-group"

// Basic usage with default settings
<AvatarGroup avatars={[
  { type: "icon" },
  { type: "initials" }
]} />

// With maximum display limit
<AvatarGroup 
  avatars={[
    { type: "image", source: require("./user1.png") },
    { type: "image", source: require("./user2.png") },
    { type: "icon" },
    { type: "icon" }
  ]}
  max={2}
  size="md"
/>

// Different sizes
<AvatarGroup avatars={[...]} size="xs" />
<AvatarGroup avatars={[...]} size="sm" />
<AvatarGroup avatars={[...]} size="md" />
<AvatarGroup avatars={[...]} size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| avatars | Array<AvatarProps> | [] | Array of avatar configurations |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'sm' | Controls the size of all avatars |
| max | number | 2 | Maximum number of avatars to display before showing count |
| style | ViewStyle | - | Additional styles for the container |

### AvatarProps Type

Each avatar in the `avatars` array accepts the same props as the Avatar component:

```typescript
type AvatarProps = {
  type?: 'icon' \| 'initials' \| 'image';
  state?: 'default' \| 'online' \| 'offline';
  source?: ImageSourcePropType;  // For type="image"
  initials?: string;             // For type="initials"
}
```

## Examples

```jsx
// Mix of different avatar types
<AvatarGroup 
  avatars={[
    { type: "image", source: userImage, state: "online" },
    { type: "initials", initials: "JD" },
    { type: "icon", state: "offline" }
  ]}
  size="lg"
/>

// Custom styling
<AvatarGroup 
  avatars={[...]}
  size="md"
  style={{ marginBottom: 16 }}
/>

// Show all avatars
<AvatarGroup 
  avatars={[
    { type: "icon" },
    { type: "icon" }
  ]}
  max={999}
  size="sm"
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
