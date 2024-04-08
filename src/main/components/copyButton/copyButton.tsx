import { copy } from "@stianlarsen/copy-to-clipboard";
import { Button } from "@stianlarsen/react-ui-kit";
import { useState } from "react";
import { CopyIcon } from "../../../assets/icons/copyIcon";
import { CopySuccessIcon } from "../../../assets/icons/copySuccessIcon";
import "./css/copyButton.css";
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
    <Button
      variant="icon"
      className="copy-button"
      onClick={handleCopyClick}
      aria-disabled={copied}
      border={true}
    >
      {copied ? <CopySuccessIcon /> : <CopyIcon />}
    </Button>
  );
};
