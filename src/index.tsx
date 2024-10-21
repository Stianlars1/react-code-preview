import React from "react";
import { CodeAndExamplePreview } from "./components/codeAndExamplePreview/codeAndExamplePreview";
import { CodeOnlyPreview } from "./components/codeOnlyPreview/codeOnlyPreview";
import "./css/codePreview.css";
import { CodePreviewProps } from "./types/types";

const CodePreview: React.FC<CodePreviewProps> = (props) => {
  if ("component" in props) {
    return <CodeAndExamplePreview {...props} />;
  }
  return <CodeOnlyPreview {...props} />;
};
export { CodePreview };
