# MagicUI Integration Guide

## Overview
We've successfully integrated MagicUI components into our CloneMe stack! MagicUI components work seamlessly alongside shadcn/ui components.

## Installation Location
- **MagicUI components**: `src/components/ui/` (same as shadcn/ui)
- This keeps all reusable UI components in one place
- The CLI automatically installs to the correct location

## Currently Installed
- ✅ **Aurora Text** (`src/components/ui/aurora-text.tsx`)
  - Applied to the main "CloneMe" title
  - Custom colors: indigo, blue, amber, pink
  - Animated gradient text effect

## Usage Example
```tsx
import { AuroraText } from "@/components/ui/aurora-text";

// Uses default aurora colors from tokens.css
<h1>
  <AuroraText speed={1.2}>
    CloneMe
  </AuroraText>
  Stack Demo
</h1>

// Or with custom colors
<AuroraText colors={["#custom1", "#custom2", "#custom3", "#custom4"]}>
  Custom Text
</AuroraText>
```

## Aurora Color Tokens
Added to `styles/tokens.css`:
```css
:root {
  --aurora-1: rgba(255, 0, 128, 0.9);
  --aurora-2: rgba(121, 40, 202, 1);
  --aurora-3: rgba(0, 112, 243, 0.8);
  --aurora-4: rgba(56, 189, 248, 1);
}

.dark {
  /* Vibrant colors for dark theme */
  --aurora-1: rgba(255, 0, 128, 0.9);
  --aurora-2: rgba(121, 40, 202, 1);
  --aurora-3: rgba(0, 112, 243, 0.8);
  --aurora-4: rgba(56, 189, 248, 1);
}

.light {
  /* Adjusted colors for light theme */
  --aurora-1: rgba(219, 39, 119, 0.8);
  --aurora-2: rgba(79, 70, 229, 0.9);
  --aurora-3: rgba(59, 130, 246, 0.7);
  --aurora-4: rgba(14, 165, 233, 0.8);
}
```

## Adding More Components
```bash
# Examples of other popular MagicUI components
npx shadcn@latest add @magicui/animated-beam
npx shadcn@latest add @magicui/sparkles-text  
npx shadcn@latest add @magicui/typing-animation
npx shadcn@latest add @magicui/border-beam
```

## Integration Notes
- ✅ **No conflicts** with existing shadcn/ui components
- ✅ **Uses same Tailwind classes** and our design tokens
- ✅ **App Router compatible** - all components are client-side ready
- ✅ **TypeScript support** built-in
- ✅ **Framer Motion compatible** - many components use Motion under the hood

## Design System Integration
- Colors can reference our CSS variables in custom implementations
- Animation speeds can use our `--dur-*` tokens
- Spacing and typography follow our token system
- Components respect light/dark theme switching
