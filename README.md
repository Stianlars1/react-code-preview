# @stianlarsen/react-code-preview

## New in Version 1.1.0: Scoped CSS Variables for Improved Customization

In this version, CSS variables have been updated and scoped to individual components to prevent interference with your global styles. If you are using previous versions, some existing CSS variable names may no longer be recognized. We recommend checking your custom overrides.

- **Breaking Change Notice**: Scoped CSS variables now use a `--cp-` prefix.
- **Customizing Colors**: Refer to the new list of available CSS variables that can be customized within the `CodePreview` scope.

###### From version 1.0.19 package size has been minified by 50%

A versatile React component that allows for toggling between a live preview and the source code of React components. This is especially useful for developers who wish to present both how a component looks and how it is implemented within the same UI space.

![Code Interface](https://github.com/Stianlars1/react-code-preview/raw/d7781034899bb99a32b7f528d4417453dc3bfab4/src/assets/code.png)
![Preview Interface](https://github.com/Stianlars1/react-code-preview/raw/d7781034899bb99a32b7f528d4417453dc3bfab4/src/assets/preview.png)
_The intuitive tabbed interface of @stianlarsen/react-code-preview_

## Features

- **Live Preview**: Dynamically render a live version of your React components.
- **Source Code Display**: Show the source code with syntax highlighting, powered by `shiki`.
- **Customizable Themes**: Comes with a variety of bundled themes from `shiki` for syntax highlighting in both light and dark modes.
- **Flexible Integration**: Designed to work within any React application with minimal configuration.
- **Styling Freedom**: Style overrides allow for custom styling to match your documentation or application theme.

## Installation

Using npm:

```bash
npm install @stianlarsen/react-code-preview
```

Or using yarn:

```bash
yarn add @stianlarsen/react-code-preview
```

## Usage

I'd recommend structuring your files as a registry to keep tabs on everything. But for the sake of this README:

For the code and component you want to preview, i'd structure my files easy-to-use like this:

```jsx
// src/buttonDemo.tsx
export const ButtonDemo = () => {
  return <Button>Demo</Button>;
};
```

````md
// src/buttonDemoCode.[md | txt | string (as long as you get a plain string)] (example under showcasing the use of .md file for your codeString)

```jsx
export const ButtonDemo = () => {
  return <Button>Demo</Button>;
};
```
````

Import the `CodePreview` component and provide the necessary props:

```jsx
import { ButtonDemo } from "src/buttonDemo";
import { ButtonDemoCode } from "src/buttonDemoCode";
import { CodePreview } from "@stianlarsen/react-code-preview";

function App() {
  const buttonDemo = <ButtonDemo />;
  return (
    <CodePreview
      component={buttonDemo}
      code={ButtonDemoCode}
      lightTheme="github-light"
      darkTheme="nord"
    />
  );
}
```

### Themes

You can specify themes for both light and dark mode. Default (If no lightTheme or darkTheme is passed in) is "blackout" which is black and white for both dark and light mode.

The theme follows the user's system preferences through the media queries (`prefers-color-scheme`).

Here's an example using the 'nord' theme for dark mode and 'github-light' for light mode:

```jsx
<CodePreview
  component={YourComponent}
  code={codeString}
  lightTheme="github-light"
  darkTheme="nord"
/>
```

The `lightTheme` and `darkTheme` props accept any of the bundled themes from [shiki]().

## Customization

To further customize the look and feel of the `CodePreview` component, you can provide your own HSL values for color variables defined specifically for the `.code-preview` scope. This allows you to tailor the component to match your application's design language with ease, without affecting other components.

Here are the CSS custom properties you can override:

```css
.code-preview {
  --cp-radius: 0.5rem;
  --cp-background: 0 0% 100%;
  --cp-foreground: 240 10% 3.9%;
  --cp-muted-foreground: 240 3.8% 46.1%;
  --cp-border: 240 5.9% 90%;
}
```

Adjusting these variables in your CSS will affect the `CodePreview` component styling without impacting the rest of your application.

A recent update has made the `CodePreview` component even more flexible and user-friendly. Now, you no longer need to pass in the "component" prop for simpler use cases. This is particularly useful if you don't require tabs to switch between preview and code, allowing for a code-only display.

Additionally, a copy button has been added to the code window, making it easier to copy the code to your clipboard.

## `CodePreview` Component Props

The `CodePreview` component accepts several props to customize its behavior and appearance:

| Prop         | Type                | Description                                                                                                  |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `component`  | `() => JSX.Element` | _Optional._ The React component to render in the live preview. If not provided, only code will be displayed. |
| `code`       | `string`            | The source code of the component as a string for display.                                                    |
| `lightTheme` | `Themes`            | The theme to use for light mode, defaults to "blackout".                                                     |
| `darkTheme`  | `Themes`            | The theme to use for dark mode, follows system preference if not set. Defaults to "blackout".                |
| `className`  | `string`            | An optional CSS class to apply custom styling.                                                               |
| `style`      | `CSSProperties`     | Optional inline styles.                                                                                      |
| `initialTab` | `TabsType`          | The initial tab to be active ("preview" or "code").                                                          |

## Using with Next.js

The `CodePreview` component works out of the box with Next.js. Ensure to use the component within a Next.js page or component that supports client-side rendering. Add the `use client` directive at the top of your file.

```jsx
// Next.js component file
"use client";
import { CodePreview } from "@stianlarsen/react-code-preview";
// ... your component code
```

## Converting Components to Code Strings

To use a React component with the `CodePreview` component, you'll need to convert it to a string. Here are some methods:

- Manually create a string variable containing your component's code.
- Use a `.md` or `.txt` file with your component's code, which can be imported as a raw string.
- For Next.js, set up your webpack config to handle `.md` or `.txt` files as raw text. (`.txt` requires [raw-loader](https://www.npmjs.com/package/raw-loader?activeTab=readme))

Example webpack config for Next.js:

```js
// next.config.js
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });
    return config;
  },
};
```

## Contributing

Feel free to contribute to @stianlarsen/react-code-preview by submitting issues and pull requests. Let's make this tool even better, together!

## License

@stianlarsen/react-code-preview is [MIT licensed](./LICENSE).

## Contact

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
- NPM: [@Stianlarsen](https://www.npmjs.com/~stianlarsen)
