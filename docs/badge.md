# Badge

Die `Badge`-Komponente wird verwendet, um Benachrichtigungen oder Zählungen anzuzeigen, die mit einem Element verknüpft sind. Sie kann als Punkt oder als Pille mit Text angezeigt werden.

## Verwendung

```jsx
import React from 'react';
import { View } from 'react-native';
import Badge from '@/components/ui/Badge';

const MyComponent = () => (
  <View>
    {/* Einfacher Punkt-Badge */}
    <Badge size="sm" />

    {/* Badge mit Zählung */}
    <Badge count={5} />

    {/* Badge mit maximaler Zählung und Offset */}
    <Badge count={120} maxCount={99} offsetX={-5} offsetY={-5} />

    {/* Badge mit Benachrichtigungen und angezeigter Null */}
    <Badge notifications={0} showZero={true} />
  </View>
);

export default MyComponent;
```

## Props

| Prop          | Typ       | Standardwert | Beschreibung                                                              |
| :------------ | :-------- | :----------- | :------------------------------------------------------------------------ |
| `size`        | `string`  | `'md'`       | Die Größe des Badges. `'sm'` für einen Punkt, `'md'` für eine Pille.    |
| `count`       | `number`  | `undefined`  | Die anzuzeigende Zählung.                                                 |
| `notifications` | `number`  | `undefined`  | Alternative zur `count`-Prop für Benachrichtigungen.                    |
| `showZero`    | `boolean` | `false`      | Wenn `true`, wird der Badge auch bei einem Wert von 0 angezeigt.         |
| `maxCount`    | `number`  | `99`         | Der maximale Wert, der angezeigt wird, bevor `maxCount+` angezeigt wird. |
| `absolute`    | `boolean` | `true`       | Wenn `true`, wird der Badge absolut positioniert.                        |
| `offsetX`     | `number`  | `0`          | Horizontaler Offset, wenn `absolute` auf `true` gesetzt ist.            |
| `offsetY`     | `number`  | `0`          | Vertikaler Offset, wenn `absolute` auf `true` gesetzt ist.              |
| `style`       | `StyleProp` | `undefined`  | Stil für den Container des Badges.                                        |
| `badgeStyle`  | `StyleProp` | `undefined`  | Stil für den Badge selbst (Punkt oder Pille).                             |
| `textStyle`   | `StyleProp` | `undefined`  | Stil für den Text innerhalb des Badges.                                   |
| `...rest`     | `any`     | `undefined`  | Alle anderen Props, die an die `View`-Komponente übergeben werden.      |