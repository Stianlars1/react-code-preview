import { copy } from "@stianlarsen/copy-to-clipboard";
import { useState } from "react";
import { CopyIcon } from "../../assets/icons/copyIcon";
import { CopySuccessIcon } from "../../assets/icons/copySuccessIcon";
import "../../css/copyButton.css";

export const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = async () => {
    await copy(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopyClick}
      type={"button"}
      className={`copy-button ${copied ? "copy-button-released" : ""} `}
      aria-disabled={copied}
      disabled={copied}
    >
      {copied ? <CopySuccessIcon /> : <CopyIcon />}
    </button>
  );
};
