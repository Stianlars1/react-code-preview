# @stianlarsen/react-code-preview

A versatile React component that allows for toggling between a live preview and the source code of React components. This is especially useful for developers who wish to present both how a component looks and how it is implemented within the same UI space.

![Code Interface](./dist/assets/code.png)
![Preview Interface](./dist/assets/preview.png)
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
// src/buttonDemoCode.[md | txt | string (as long as you get a plain string)] (example under showcasing hte use of .md file for your codeString)

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

The theme follow the users system preferences through the media queries (prefers-color-scheme).

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

To further customize the look and feel of the `CodePreview` component, you can provide your own HSL values for color variables defined at the root in your global CSS file. This allows you to tailor the component to match your application's design language with ease.

Here are the CSS custom properties you can override:

```css
:root {
  --radius: 0.5rem;

  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --muted: 240 6% 10%;
  --muted-foreground: 240 3.8% 46.1%;
  --border: 240 5.9% 90%;
  --ring: 240 5% 64.9%;

  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
}

.test-class {
  background-color: hsl(var(--muted) / 0.5);
}
```

Adjusting these variables in your project's global CSS will affect the `CodePreview` component styling throughout your application.

## Contributing

Feel free to contribute to @stianlarsen/react-code-preview by submitting issues and pull requests. Let's make this tool even better, together!

## License

@stianlarsen/react-code-preview is [MIT licensed](./LICENSE).

## Contact

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
- NPM: [@Stianlarsen](https://www.npmjs.com/~stianlarsen)
