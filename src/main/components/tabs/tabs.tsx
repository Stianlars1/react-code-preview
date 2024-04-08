import { useEffect, useRef } from "react";

export const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (newTab: string) => void;
}) => {
  const tabsRef = useRef<HTMLButtonElement[] | []>([]);
  const underlineStyle = useRef({ left: "0px", width: "0px" });

  const updateActiveTab = (tabIndex: number, newTab: string) => {
    setActiveTab(newTab);
    const { offsetLeft, clientWidth } = tabsRef.current[tabIndex];
    underlineStyle.current = {
      left: `${offsetLeft}px`,
      width: `${clientWidth}px`,
    };
  };

  useEffect(() => {
    if (tabsRef.current[0]) {
      const { offsetLeft, clientWidth } = tabsRef.current[0];
      underlineStyle.current = {
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
      };
    }
  }, []);
  return (
    <div className="code-preview__tabs">
      <button
        className={`code-preview__tabs__trigger ${
          activeTab === "preview" ? "code-preview__tabs__trigger-active " : ""
        }`}
        ref={(el: any) => (tabsRef.current[0] = el)}
        onClick={() => updateActiveTab(0, "preview")}
      >
        Preview
      </button>
      <button
        className={`code-preview__tabs__trigger ${
          activeTab === "code" ? "code-preview__tabs__trigger-active " : ""
        }`}
        ref={(el: any) => (tabsRef.current[1] = el)}
        onClick={() => updateActiveTab(1, "code")}
      >
        Code
      </button>
      <div
        className="code-preview__tabs__underline"
        style={{
          left: underlineStyle.current.left,
          width: underlineStyle.current.width,
        }}
      />
    </div>
  );
};
