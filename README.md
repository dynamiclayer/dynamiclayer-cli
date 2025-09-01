# DynamicLayer CLI

A command-line tool for quickly adding pre-built React Native components to your project.

## Installation

```bash
npm install dynamiclayer
```

## Dependencies

Make sure to install the required dependencies in your project:

```bash
npm install react-native-safe-area-context react-native-svg react-native-reanimated
```

## Usage

Add components to your project using the CLI:

```bash
dynamiclayer add <component-name>
```

Available components:
- `badge` - A versatile badge component
- `avatar` - A flexible avatar component

## Components

### Badge Component

```jsx
import { Badge } from "@/components/ui/badge"

<Badge type="success" size="md">Success</Badge>
```

[View Badge Documentation](./docs/badge.md)

### Avatar Component

```jsx
import { Avatar } from "@/components/ui/avatar"

<Avatar type="icon" state="online" size="lg" />
```

[View Avatar Documentation](./docs/avatar.md)

## Component Organization

Components are installed following a consistent structure:
```
your-project/
├── assets/
│   └── icons/
│       ├── avatarIcon.js
│       ├── onlineIcon.js
│       └── offlineIcon.js
├── components/
│   └── ui/
│       ├── Avatar.js
│       └── Badge.js
└── styles/
    └── style.js
```

## Features

- 🚀 Quick component installation
- 📦 Pre-built, customizable components
- 🎨 Consistent styling system
- 🔧 Easy to extend and customize
- 📱 Fully responsive design

## License

This project is licensed under the ... License - see the [LICENSE](LICENSE) file for details.
This project is licensed under the ... License - see the [LICENSE](LICENSE) file for details.
This project is licensed under the ... License - see the [LICENSE](LICENSE) file for details.
This project is licensed under the ... License - see the [LICENSE](LICENSE) file for details.
