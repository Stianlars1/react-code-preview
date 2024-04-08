import { CodePreviewProps } from "../types/types";
import { CodeAndExamplePreview } from "./components/codeAndExamplePreview/codeAndExamplePreview";
import { CodeOnlyPreview } from "./components/codeOnlyPreview/codeOnlyPreview";
import "./css/codePreview.css";

export const CodePreview = (props: CodePreviewProps) => {
  if ("component" in props) {
    return <CodeAndExamplePreview {...props} />;
  }
  return <CodeOnlyPreview {...props} />;
};
