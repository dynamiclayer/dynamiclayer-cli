# Avatar Group

Display a compact stack of avatars with an optional "+N" counter when the list exceeds `max`.

## Install

```bash
dynamiclayer add avatargroup
```

## Usage

```jsx
import AvatarGroup from "@/components/ui/AvatarGroup";

// Basic two-person stack
<AvatarGroup avatars={[{ type: "icon" }, { type: "initials" }]} />

// Limit visible avatars
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

// Sizes
<AvatarGroup avatars={[...]} size="xs" />
<AvatarGroup avatars={[...]} size="lg" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarProps[]` | `[]` | Array of avatar configurations. |
| `size` | `'xs' | 'lg'` | `'lg'` | Diameter of all avatars. |
| `max` | `number` | `2` | Max visible avatars before showing `+N`. |
| `style` | `ViewStyle` | `null` | Container style override. |

`AvatarProps` matches the Avatar component:

```ts
type AvatarProps = {
  type?: "icon" | "initials" | "image";
  state?: "default" | "online" | "offline";
  image?: ImageSourcePropType;
};
```

## Behavior

- First avatar always renders in front
- Second slot toggles between avatar and `+N` counter based on `max`
- Avatars overlap by 16 px to create the stack
- Container resizes to fit one or two avatars automatically

## Examples

```jsx
<AvatarGroup avatars={[{ type: "image", image: require("./ceo.png") }]} size="lg" />
<AvatarGroup avatars={[{ type: "icon" }, { type: "icon" }, { type: "icon" }]} max={1} size="xs" />
```

## Related

- docs/avatar.md - Individual avatar documentation
