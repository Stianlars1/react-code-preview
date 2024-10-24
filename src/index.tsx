import { CodeAndExamplePreview } from "./components/codeAndExamplePreview/codeAndExamplePreview";
import { CodeOnlyPreview } from "./components/codeOnlyPreview/codeOnlyPreview";
import "./css/codePreview.css";
import { CodePreviewProps } from "./types/types";

const CodePreview = (props: CodePreviewProps) => {
  if ("component" in props) {
    return <CodeAndExamplePreview {...props} />;
  }
  return <CodeOnlyPreview {...props} />;
};

export * from "./types/types";
export { CodePreview };
