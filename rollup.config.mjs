import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: "dist", // Use "dir" for multiple output chunks
      format: "esm",
      sourcemap: false,
      entryFileNames: "[name].esm.js", // Optionally control the names of output files
    },
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
    postcss({
      extract: false,
      minimize: true,
      sourceMap: true,
    }),
    copy({
      targets: [
        { src: "src/css/**/*.css", dest: "dist/css" }, // Copy all CSS files to "dist/css"
      ],
    }),
    terser({ compress: true }),
  ],
  external: ["react", "react-dom", /^shiki(\/.*)?$/],
  onwarn(warning, warn) {
    // Log warnings for further analysis
    console.warn(warning);
  },
};
