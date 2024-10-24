import { useEffect, useState } from "react";

export const useTheme = (): { theme: string } => {
  const [isDarkmodeActive, setIsDarkmodeActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.matches) {
        setIsDarkmodeActive(true);
      }
      mq.addEventListener("change", (evt) => setIsDarkmodeActive(evt.matches));

      return () => {
        mq.removeEventListener("change", (evt) =>
          setIsDarkmodeActive(evt.matches)
        );
      };
    }
  }, []);

  return { theme: isDarkmodeActive ? "dark" : "light" };
};
