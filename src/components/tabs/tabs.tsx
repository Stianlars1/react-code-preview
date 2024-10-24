import { useLayoutEffect, useRef, useState } from "react";
import { TabsType } from "../../types/types";

export const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (newTab: TabsType) => void;
}) => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: activeTab === "preview" ? "0" : "86px",
    width: activeTab === "preview" ? "82px" : "65px",
  });

  const updateActiveTab = (tabIndex: number, newTab: TabsType) => {
    setActiveTab(newTab);
    const tabElement = tabsRef.current[tabIndex];
    if (tabElement) {
      const { offsetLeft, clientWidth } = tabElement;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
      });
    }
  };

  useLayoutEffect(() => {
    const activeIndex = tabsRef.current.findIndex(
      (tab) => tab?.textContent?.toLowerCase() === activeTab
    );

    if (activeIndex !== -1 && tabsRef.current[activeIndex]) {
      const { offsetLeft, clientWidth } = tabsRef.current[activeIndex]!;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="code-preview__tabs">
      {(["preview", "code"] as TabsType[]).map((tabName, index) => (
        <button
          key={tabName}
          className={`code-preview__tabs__trigger ${
            activeTab === tabName ? "code-preview__tabs__trigger-active" : ""
          }`}
          ref={(el) => {
            tabsRef.current[index] = el;
          }}
          onClick={() => updateActiveTab(index, tabName)}
        >
          {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
        </button>
      ))}
      <div className={"code-preview__tabs__underline"} style={underlineStyle} />
    </div>
  );
};
