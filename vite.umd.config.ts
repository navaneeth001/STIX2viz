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
