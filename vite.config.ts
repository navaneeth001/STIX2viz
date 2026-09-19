import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Bundler build: ESM (`dist/stix2vis.mjs`) + CJS (`dist/stix2vis.cjs`).
 *
 * `prop-types` is kept external on purpose. It is a CommonJS package whose
 * development build transitively `require`s React; bundling it into an ESM
 * output makes Node/SSR `import` fail at runtime. Keeping it external lets the
 * consumer's bundler resolve it — and keeps the dev-time propTypes warnings
 * working exactly as before. The self-contained UMD/CDN build lives in
 * `vite.umd.config.ts`, where prop-types is bundled instead.
 */
export default defineConfig({
  // `jsxRuntime: "classic"` is deliberate: the automatic runtime pulls
  // `react/jsx-runtime` (a CommonJS module that `require`s React) into the
  // bundle, which breaks Node/SSR `import` of the ESM build and would make the
  // UMD build depend on a module-resolution shim in the browser. Classic
  // (`React.createElement`) is what 1.x shipped and works everywhere.
  plugins: [react({ jsxRuntime: "classic" })],
  build: {
    // Keep `public/` (docs assets) out of the published bundle.
    copyPublicDir: false,
    emptyOutDir: true,
    // Source maps would add ~7 MB of maps for bundled vis-network code, which is
    // disproportionate for a published package. Source is on GitHub instead.
    sourcemap: false,
    target: "es2020",
    // The STIX icons are inlined as data URIs on purpose: prebuilt assets
    // referenced by root-relative URLs cannot be rebased by consumer bundlers,
    // and data URIs keep the UMD/CDN build self-contained.
    assetsInlineLimit: 1024 * 1024,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "stix2vis",
      formats: ["es", "cjs"],
      // Explicit names so the published paths never drift between releases.
      fileName: (format) => (format === "es" ? "stix2vis.mjs" : "stix2vis.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "prop-types"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
