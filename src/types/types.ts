import { CSSProperties } from "react";
import { BundledTheme } from "shiki";

export type Themes = BundledTheme | "blackout";

export interface CodePreviewProps {
  component: () => JSX.Element;
  code: string;
  lightTheme?: Themes;
  darkTheme?: Themes;
  className?: string;
  style?: CSSProperties;
}

export interface UseHighlightCode {
  highlightedCode: string;
  codeString: string;
}
