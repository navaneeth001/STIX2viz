import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * CDN build: a single self-contained `dist/stix2vis.umd.js` that only expects
 * React/ReactDOM globals, so `<script>` users need nothing else. It is built in
 * a second pass because UMD cannot share an output with code-split ESM/CJS, and
 * because `prop-types` has to be bundled here (there is no module resolution at
 * runtime in a browser) while it stays external in the ESM/CJS build.
 */
export default defineConfig({
  // See vite.config.ts: the classic JSX runtime keeps the bundle free of
  // `react/jsx-runtime`, so the UMD build only needs the React global.
  plugins: [react({ jsxRuntime: "classic" })],
  // `prop-types` (and its bundled `react-is`) ship CommonJS development
  // branches guarded by `process.env.NODE_ENV`. In this build prop-types is
  // bundled rather than external, so those checks survive into the UMD file —
  // and a browser has no `process`, which made the whole bundle throw
  // `ReferenceError: process is not defined` on evaluation and left
  // `window.stix2vis` undefined (i.e. a blank CDN/Pages demo). Substituting the
  // literal here statically folds the dev-only branches away, exactly like
  // React's own CDN builds do. ESM/CJS keep prop-types external so they never
  // saw this problem.
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    copyPublicDir: false,
    // The ESM/CJS pass already cleaned dist/; do not wipe its output.
    emptyOutDir: false,
    sourcemap: false,
    target: "es2020",
    assetsInlineLimit: 1024 * 1024,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "stix2vis",
      formats: ["umd"],
      fileName: () => "stix2vis.umd.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
