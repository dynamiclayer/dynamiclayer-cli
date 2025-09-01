# Alert Component

The Alert component is a versatile notification banner that appears at the top of the screen. It provides feedback about an operation's state through different types of alerts with customizable content.

## Usage

```jsx
import Alert from '../components/ui/Alert';

// Basic usage
<Alert 
  type="success"
  title="Success!"
  description="Your changes have been saved."
/>

// Alert that stays visible
<Alert 
  type="error"
  title="Error"
  description="Something went wrong."
  stay={true}
/>

// Alert without close icon
<Alert 
  type="information"
  title="Info"
  description="New updates available."
  closeIcon={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | `"information"` | The type of alert. Can be `"success"`, `"error"`, `"warning"`, or `"information"`. |
| `title` | string | - | The main heading text of the alert. |
| `description` | string | - | The detailed message of the alert. |
| `closeIcon` | boolean | `true` | Whether to show the close button. |
| `stay` | boolean | `false` | If `true`, the alert will not automatically dismiss. |

## Features

- Animated entrance and exit
- Four different types with corresponding icons
- Auto-dismissal after 6 seconds (configurable)
- Manual dismissal through close button
- Safe area aware positioning
- Accessibility support
- Responsive layout

## Styling

The Alert component uses the application's design tokens for colors, padding, and typography. It inherits from the following style configurations:

- Background: `colors.white`
- Border: `colors.grey200`
- Title: `textStyles.text_base_semibold`
- Description: `textStyles.text_base_regular`
- Icon size: 24x24 pixels
- Border radius: `rounded.rounded_lg`
- Padding: `paddings.p_16`

## Animation

The Alert includes smooth animations for:
- Sliding in from the top
- Fading in/out
- Icon scaling
- Collapsing on dismiss

## Accessibility

The component includes the following accessibility features:
- Role set to "alert"
- Close button with accessible label "Close notification"
- Hit slop areas for better touch targets
