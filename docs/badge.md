# Badge Component

The `Badge` component shows notifications or counts attached to an element. It can render as a small dot or as a pill with text.

## Install

```bash
dynamiclayer add badge
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import Badge from '@/components/ui/Badge';

const MyComponent = () => (
  <View>
    {/* Simple dot badge */}
    <Badge size="sm" />

    {/* Badge with count */}
    <Badge count={5} />

    {/* Badge with max count and offset */}
    <Badge count={120} maxCount={99} offsetX={-5} offsetY={-5} />

    {/* Badge with notifications and showing zero */}
    <Badge notifications={0} showZero={true} />
  </View>
);

export default MyComponent;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | 'sm' | 'md' | Size of the badge. `'sm'` renders a dot, `'md'` renders a pill |
| `count` | number | - | The numeric count to display |
| `notifications` | number | - | Alternative to `count` for notification counts |
| `showZero` | boolean | false | If true, shows the badge when the value is 0 |
| `maxCount` | number | 99 | Maximum displayed value before showing `maxCount+` |
| `absolute` | boolean | true | If true, positions the badge absolutely |
| `offsetX` | number | 0 | Horizontal offset when `absolute` is true |
| `offsetY` | number | 0 | Vertical offset when `absolute` is true |
| `style` | ViewStyle | - | Container style |
| `badgeStyle` | ViewStyle | - | Style for the dot or pill |
| `textStyle` | TextStyle | - | Style for the text inside the pill |
| `...rest` | any | - | Other props passed to the container View |

