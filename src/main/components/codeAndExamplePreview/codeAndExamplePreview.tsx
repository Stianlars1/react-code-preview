import { Loader } from "@stianlarsen/react-ui-kit";
import { Suspense, useState } from "react";
import { useHighlightCode } from "../../../hooks/useHighlightCode";
import { defaultDarkTheme } from "../../../libs/theme/theme";
import { CodeAndPreviewProps, TabsType } from "../../../types/types";
import { cn } from "../../../utils/cn";
import "../../css/codePreview.css";
import { CopyButton } from "../copyButton/copyButton";
import { Tabs } from "../tabs/tabs";

export const CodeAndExamplePreview = ({
  component: PreviewComponent,
  code,
  lightTheme = defaultDarkTheme,
  darkTheme = defaultDarkTheme,
  className,
  style,
  initialTab = "preview",
}: CodeAndPreviewProps) => {
  const [activeTab, setActiveTab] = useState<TabsType>(initialTab);
  const { highlightedCode, codeString } = useHighlightCode(
    code,
    lightTheme,
    darkTheme
  );
  const classname = cn("code-preview", className);
  return (
    <Suspense fallback={<Loader />}>
      <div className={classname} style={{ ...style }}>
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

        <div className="code-preview__content">
          {activeTab === "preview" && PreviewComponent && (
            <div className="code-preview__content__component-wrapper">
              <PreviewComponent />
            </div>
          )}

          {activeTab === "code" && highlightedCode && (
            <>
              <CopyButton value={codeString} />

              <div
                className="code-preview__content__code-wrapper"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </>
          )}
        </div>
      </div>
    </Suspense>
  );
};
