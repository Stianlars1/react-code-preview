import { useEffect, useState } from "react";
import { getHighlighter } from "shiki";
import blackout from "../libs/theme/themes/blackout.json";
import { Themes, UseHighlightCode } from "../types/types";
import { getCodeString } from "../utils/getCodeString";
import { useTheme } from "./useTheme";

export function useHighlightCode(
  codeString: string,
  lightTheme: Themes,
  darkTheme: Themes
): UseHighlightCode {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [formattedCodeString] = useState<string>(getCodeString(codeString));

  const { theme } = useTheme(); // Use your custom useTheme hook

  useEffect(() => {
    const highlightCodeAsync = async () => {
      const highlighter = await getHighlighter({
        langs: ["typescript"],
        themes: [blackout as any],
      });

      let themeToLoad =
        lightTheme === darkTheme
          ? (blackout as any)
          : theme === "dark" && darkTheme
          ? darkTheme
          : lightTheme
          ? lightTheme
          : "blackout";

      // Assuming the theme names are directly usable, otherwise adjust the mapping logic accordingly
      if (themeToLoad === "blackout") {
        await highlighter.loadTheme(blackout as any);
      } else {
        await highlighter.loadTheme(themeToLoad);
      }

      const html = highlighter.codeToHtml(formattedCodeString, {
        lang: "typescript",
        theme:
          themeToLoad === "blackout" ? "lambda-studio-blackout" : themeToLoad,
      });
      setHighlightedCode(html);
    };

    highlightCodeAsync();
  }, [theme]);

  return { highlightedCode, codeString: formattedCodeString };
}
