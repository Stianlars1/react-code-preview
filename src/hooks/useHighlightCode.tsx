import { useEffect, useState } from "react";
import { getHighlighter } from "shiki";
import blackout from "../libs/theme/themes/blackout.json";
import { Themes, UseHighlightCode } from "../types/types";
import { getCodeString } from "../utils/getCodeString";
import { useTheme } from "./useTheme";

export function useHighlightCode(
  codeString: string,
  lightTheme?: Themes,
  darkTheme?: Themes
): UseHighlightCode {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [formattedCodeString] = useState<string>(getCodeString(codeString));
  const [loadingCode, setLoadingCode] = useState<boolean>(false);

  const { theme } = useTheme(); // Use your custom useTheme hook

  useEffect(() => {
    const highlightCodeAsync = async () => {
      setLoadingCode(true);
      try {
        const highlighter = await getHighlighter({
          langs: ["typescript"],
          themes: [blackout as any],
        });

        let themeToLoad =
          theme === "dark"
            ? darkTheme
              ? darkTheme
              : "blackout"
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
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingCode(false);
      }
    };

    highlightCodeAsync();
  }, [darkTheme, lightTheme, theme]);

  return { highlightedCode, codeString: formattedCodeString, loadingCode };
}
