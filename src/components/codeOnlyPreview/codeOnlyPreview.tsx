import {Suspense} from "react";
import "../../css/codePreview.css";
import {useHighlightCode} from "../../hooks/useHighlightCode";
import {PreviewOnlyCodeProps} from "../../types/types";
import {cn} from "../../utils/cn";
import {CopyButton} from "../copyButton/copyButton";

export const CodeOnlyPreview = (props: PreviewOnlyCodeProps) => {
  const { code, darkTheme, lightTheme, className, style, onCopied } = props;
  const { highlightedCode, codeString } = useHighlightCode(
    code,
    lightTheme,
    darkTheme
  );
  const classname = cn("code-preview", className);
  return (
    <Suspense fallback={<></>}>
      <div className={classname} style={{ ...style }}>
        <div className="code-preview__content">
          {highlightedCode && (
            <>
              <CopyButton value={codeString} onCopied={onCopied} />

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
