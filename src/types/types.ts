import {CSSProperties} from "react";
import {BundledTheme} from "shiki";

export type Themes = BundledTheme | "blackout";
export type TabsType = "preview" | "code";

export interface PreviewOnlyCodeProps {
  code: string;
  lightTheme?: Themes;
  darkTheme?: Themes;
  className?: string;
  style?: CSSProperties;
  onCopied: () => void
}

export interface CodeAndPreviewProps {
  component: (() => JSX.Element) | JSX.Element | React.ComponentType<any>;
  code: string;
  lightTheme?: Themes;
  darkTheme?: Themes;
  className?: string;
  style?: CSSProperties;
  initialTab?: TabsType;
  onCopied: () => void
}

export type CodePreviewProps = PreviewOnlyCodeProps | CodeAndPreviewProps;

export interface UseHighlightCode {
  highlightedCode: string;
  codeString: string;
  loadingCode: boolean;
}
