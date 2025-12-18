# @stianlarsen/react-code-preview

[![npm version](https://img.shields.io/npm/v/@stianlarsen/react-code-preview.svg)](https://www.npmjs.com/package/@stianlarsen/react-code-preview)
[![npm downloads](https://img.shields.io/npm/dm/@stianlarsen/react-code-preview.svg)](https://www.npmjs.com/package/@stianlarsen/react-code-preview)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@stianlarsen/react-code-preview)](https://bundlephobia.com/package/@stianlarsen/react-code-preview)
[![license](https://img.shields.io/npm/l/@stianlarsen/react-code-preview.svg)](https://github.com/Stianlars1/react-code-preview/blob/main/LICENSE)

A React component for toggling between a live preview and syntax-highlighted source code. Perfect for documentation sites, component libraries, and tutorials.

![Code Interface](https://github.com/Stianlars1/react-code-preview/raw/d7781034899bb99a32b7f528d4417453dc3bfab4/src/assets/code.png)
![Preview Interface](https://github.com/Stianlars1/react-code-preview/raw/d7781034899bb99a32b7f528d4417453dc3bfab4/src/assets/preview.png)

## Features

- **Live Preview** - Render React components with tabbed code/preview toggle
- **Syntax Highlighting** - Powered by [Shiki](https://shiki.style/) with 100+ themes
- **Zero Config** - Works out of the box, no CSS imports needed
- **RSC Compatible** - Full support for Next.js App Router and React Server Components
- **TypeScript** - Complete type definitions included
- **Lightweight** - CSS injected automatically, minimal footprint

## Installation

```bash
npm install @stianlarsen/react-code-preview
```

```bash
yarn add @stianlarsen/react-code-preview
```

```bash
pnpm add @stianlarsen/react-code-preview
```

## Requirements

- React 18.0.0 or higher (supports React 19)

## Quick Start

```tsx
import { CodePreview } from "@stianlarsen/react-code-preview";

function App() {
  const code = `export const Button = () => {
  return <button>Click me</button>;
};`;

  return (
    <CodePreview
      component={<button>Click me</button>}
      code={code}
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  );
}
```

### Code-Only Mode

Display code without a preview:

```tsx
<CodePreview code={codeString} darkTheme="nord" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | **required** | Source code to display |
| `component` | `ReactElement \| ComponentType` | - | Component for live preview (enables tabs) |
| `lightTheme` | `BundledTheme \| "blackout"` | `"blackout"` | Theme for light mode |
| `darkTheme` | `BundledTheme \| "blackout"` | `"blackout"` | Theme for dark mode |
| `initialTab` | `"preview" \| "code"` | `"preview"` | Default active tab |
| `className` | `string` | - | Additional CSS class |
| `style` | `CSSProperties` | - | Inline styles |
| `onCopied` | `() => void` | - | Callback when code is copied |

## Themes

Supports all [Shiki themes](https://shiki.style/themes). Theme follows system preference via `prefers-color-scheme`.

```tsx
<CodePreview
  code={code}
  lightTheme="github-light"
  darkTheme="one-dark-pro"
/>
```

The default `"blackout"` theme provides a minimal black/white appearance for both modes.

## Customization

Override CSS variables within the `.code-preview` scope:

```css
.code-preview {
  --cp-radius: 0.5rem;
  --cp-background: hsl(0 0% 100%);
  --cp-foreground: hsl(240 10% 3.9%);
  --cp-muted-foreground: hsl(240 3.8% 46.1%);
  --cp-border: hsl(240 5.9% 90%);
  --cp-background-editor: hsl(240 6% 10%);
  --cp-black: hsl(0 0 0%);
}
```

## Usage with Next.js

Works out of the box with Next.js App Router. The component includes the `"use client"` directive automatically.

```tsx
// app/docs/page.tsx
import { CodePreview } from "@stianlarsen/react-code-preview";

export default function DocsPage() {
  return <CodePreview code={code} component={<MyComponent />} />;
}
```

## Changelog

### v1.2.0
- Migrated to tsup for modern ESM/CJS dual builds
- CSS now auto-injected (no manual imports needed)
- Added `"use client"` directive for RSC compatibility
- Improved TypeScript declarations
- Reduced bundle size

### v1.1.0
- Scoped CSS variables with `--cp-` prefix
- Added copy button to code view
- Code-only mode (omit `component` prop)

## License

[MIT](./LICENSE)

## Links

- [GitHub](https://github.com/stianlars1/react-code-preview)
- [npm](https://www.npmjs.com/package/@stianlarsen/react-code-preview)
- [Website](https://react-code-preview.dev)
