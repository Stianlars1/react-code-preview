import { createHighlighter, type Highlighter } from "shiki";

let highlighterInstance: Highlighter | null = null;

export const getShikiHighlighter = async () => {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      langs: ["typescript"],
      themes: [],
    });
  }
  return highlighterInstance;
};
