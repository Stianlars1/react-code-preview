import { readFileSync, writeFileSync } from "fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  external: ["react", "react-dom", "react/jsx-runtime"],
  noExternal: ["@stianlarsen/copy-to-clipboard"],
  injectStyle: true,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  async onSuccess() {
    // Prepend "use client" directive to output files
    const files = ["dist/index.js", "dist/index.cjs"];
    for (const file of files) {
      const content = readFileSync(file, "utf-8");
      writeFileSync(file, `"use client";\n${content}`);
    }
  },
});
