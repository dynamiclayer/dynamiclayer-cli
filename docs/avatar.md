# Avatar

Circular user representation that can render an icon, initials, or an image. Supports online and offline indicators and size presets for lists or profile headers.

## Install

```bash
dynamiclayer add avatar
```

## Usage

```jsx
import Avatar from "@/components/ui/Avatar";

<Avatar type="icon" />
<Avatar type="initials" />
<Avatar type="image" image={require("./profile.png")} />

<Avatar state="online" size="lg" />
<Avatar state="offline" size="sm" />
```

- Pick a `type` based on the data you have.
- Presence dots appear when `state` is `online` or `offline`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'icon' | 'initials' | 'image'` | `'icon'` | How the avatar is drawn. |
| `state` | `'default' | 'online' | 'offline'` | `'default'` | Presence indicator. |
| `size` | `'xs' | 'sm' | 'md' | 'lg'` | `'md'` | Avatar diameter, typography, and dot size. |
| `image` | `ImageSourcePropType` | `null` | Source when `type="image"`. |

## Notes

- `type="image"` falls back to a placeholder if `image` is missing.
- Initials mode currently uses the built-in `"Aa"` placeholder; fork to customize.
- Presence dot hides automatically when `state="default"`.
- Icon mode keeps the SVG at roughly half the avatar size for consistent padding.
- Size presets adjust the presence dot position so it does not clip the edge.

## Variants

| Variant | When to use | Key change |
|---------|-------------|-----------|
| `type="icon"` | No user image available | Neutral background with default icon |
| `type="initials"` | Initials preferred | Text styled per size token |
| `type="image"` | User photo available | Full-bleed image with white background |

## Examples

```jsx
<Avatar />
<Avatar type="initials" state="online" size="lg" />
<Avatar type="image" state="offline" size="sm" image={require("./profile.png")} />
```

- Combine with `AvatarGroup` when multiple participants share the same surface.

## Related

- docs/avatar-group.md - Stack multiple avatars
