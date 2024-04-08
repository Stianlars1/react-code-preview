import { CSSProperties } from "react";
import { BundledTheme } from "shiki";

export type Themes = BundledTheme | "blackout";
export type TabsType = "preview" | "code";

export interface PreviewOnlyCodeProps {
  code: string;
  lightTheme?: Themes;
  darkTheme?: Themes;
  className?: string;
  style?: CSSProperties;
}

export interface CodeAndPreviewProps {
  component: () => JSX.Element;
  code: string;
  lightTheme?: Themes;
  darkTheme?: Themes;
  className?: string;
  style?: CSSProperties;
  initialTab?: TabsType;
}

export type CodePreviewProps = PreviewOnlyCodeProps | CodeAndPreviewProps;

export interface UseHighlightCode {
  highlightedCode: string;
  codeString: string;
}
