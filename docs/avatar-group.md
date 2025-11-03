# Avatar Group

Stacks two avatars with overlap and swaps the second slot for a `+N` counter when the list exceeds `max`. Great for collaboration lists or shared owners.

## Install

```bash
dynamiclayer add avatargroup
```

## Usage

```jsx
import AvatarGroup from "@/components/ui/AvatarGroup";

<AvatarGroup avatars={[{ type: "icon" }, { type: "initials" }]} />

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
```

- Provide the avatars you want shown first; the remainder feeds the counter.
- `size` switches between 32 px (`xs`), 40 px (`sm`), 48 px (`md`), and 56 px (`lg`) layouts.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarProps[]` | `[]` | Data passed through to the Avatar component. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'lg'` | Diameter and typography preset. |
| `max` | `number` | `2` | Max visible avatars before showing `+N`. |
| `style` | `ViewStyle` | `null` | Optional wrapper override. |

## Notes

- When `avatars.length <= max`, both slots render full avatars.
- `AvatarProps` is the same shape documented in `docs/avatar.md`.
- First avatar sits on top; second slot overlaps by 16 px.
- Counter shows how many entries remain once the visible slots are filled, so the first avatar is not double-counted.
- Wrapper size expands automatically to fit one or two avatars.

## Variants

| Variant | When to use | Key change |
|---------|-------------|-----------|
| `size="xs"` | Dense lists and tables | Smaller avatars and counter text |
| `size="lg"` | Feature surfaces | Larger avatars with bold counter |

## Examples

```jsx
<AvatarGroup avatars={[{ type: "image", image: require("./ceo.png") }]} size="lg" />
<AvatarGroup avatars={[{ type: "icon" }, { type: "icon" }, { type: "icon" }]} max={1} size="xs" />
```

- Combine with `Badge` to mark unread conversations that involve the group.

## Related

- docs/avatar.md - Individual avatar reference
