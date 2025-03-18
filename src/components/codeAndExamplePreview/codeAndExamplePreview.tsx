import {ComponentType, isValidElement, ReactElement, ReactNode, Suspense, useState,} from "react";
import "../../css/codePreview.css";
import {useHighlightCode} from "../../hooks/useHighlightCode";
import {defaultDarkTheme} from "../../libs/theme/theme";
import {CodeAndPreviewProps, TabsType} from "../../types/types";
import {cn} from "../../utils/cn";
import {CopyButton} from "../copyButton/copyButton";
import {Tabs} from "../tabs/tabs";

export const CodeAndExamplePreview = ({
  component: PreviewComponent,
  code,
  lightTheme = defaultDarkTheme,
  darkTheme = defaultDarkTheme,
  className,
  style,
  initialTab = "preview",
    onCopied
}: CodeAndPreviewProps) => {
  const [activeTab, setActiveTab] = useState<TabsType>(initialTab);
  const { highlightedCode, codeString, loadingCode } = useHighlightCode(
    code,
    lightTheme,
    darkTheme
  );
  const classname = cn("code-preview", className);
  return (
    <Suspense fallback={<></>}>
      <div className={classname} style={{ ...style }}>
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

        <div className="code-preview__content">
          {activeTab === "preview" && PreviewComponent && (
            <div className="code-preview__content__component-wrapper">
              {renderComponent(PreviewComponent)}
            </div>
          )}

          {activeTab === "code" && highlightedCode && !loadingCode && (
            <>
              <CopyButton value={codeString} onCopied={onCopied} />

              {!loadingCode && (
                <div
                  className="code-preview__content__code-wrapper"
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </Suspense>
  );
};

const renderComponent = (
  component: ComponentType<any> | ReactElement
): ReactNode => {
  try {
    if (isValidElement(component)) {
      return component;
    } else {
      const Component = component as ComponentType<any>;
      return <Component />;
    }
  } catch (e) {
    console.error("== renderComponent ==\nError rendering component", e);
  }
};
