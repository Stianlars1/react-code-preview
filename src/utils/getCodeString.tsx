export const getCodeString = (codeString: string) =>
  codeString
    .replace(/^```[\w\s]*[\r\n]+/gm, "")
    .replace(/[\r\n]+\s*```$/gm, "")
    .trim();
