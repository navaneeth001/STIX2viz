# Changelog

All notable changes to this project are documented in this file.
This project follows [Semantic Versioning](https://semver.org/).

## 1.1.5

A maintenance release that fixes packaging, build and lifecycle defects. **No
public props, no rendering output and no STIX parsing/relationship logic were
changed** — applications upgrading from 1.1.x keep working unchanged.

### Why 1.1.5 and not 2.0.0

Every documented entry point behaves as before: the default export is the same
component, the four props are unchanged, the rendered DOM is identical, and all
parsing/relationship logic is untouched. The changes are packaging, tooling and
non-breaking fixes, so the release stays inside the `1.x` range and existing
`^1.0.0` / `^1.1.0` ranges pick up the fix automatically. A major bump would
leave consumers on 1.1.4, which cannot be used outside a webpack build
(`main` pointed at `src/App.js`, and the sources call webpack's
`require.context`).

The single thing that is **not** carried forward is deep-importing into `src/`,
for example `stix2vis/src/stix2viz/stix2viz/stix2viz.js`. Those files are not part
of the public API, were never documented, and only ever worked inside webpack.
If you depended on them, stay on `1.1.4`; the supported equivalent is the
documented default export. (A first-class `stix2vis/core` entry point for the
framework-agnostic graph builder is on the roadmap.)

### Fixed

- **Package entry points no longer point at files that do not exist.**
  `module`/`exports.import` referenced `./dist/stix2vis.es.js`, which is never
  produced by the build (`vite build` emits `stix2vis.mjs`). Bundlers resolving
  `stix2vis` could fail with "failed to resolve entry".
- **Webpack is no longer required.** 1.1.4 shipped raw sources that called
  `require.context(...)`, which only exists in webpack builds (`require is not
defined` in Vite/Rollup/esbuild/Turbopack/SSR). The published package is now a
  pre-built, bundler-agnostic ESM/CJS/UMD bundle.
- **The React component no longer leaks graph instances.** The `vis-network`
  instance was created in `useEffect` with no cleanup and stored in module-level
  state. It now lives in a `useRef`, is destroyed on unmount and when the data
  changes, and multiple viewers on the same page no longer share state. This also
  makes the component safe under React 18 `StrictMode` (no double-initialised
  networks).
- **`onNodeclick` is now always the fresh callback.** The click listener is
  registered once and reads the latest prop instead of the closure captured at
  mount time, and it is no longer `undefined`-unsafe.
- **Undeclared runtime dependency on `prop-types`.** It was imported but never
  listed, so it only resolved through hoisting (and would fail under pnpm or Yarn
  PnP). It is now a declared dependency.
- **Type-checking is enforced.** `tsc --noEmit` reported 18 real errors previously
  hidden by the bundler (implicit `any`s in the matcher operator table, a possible
  `undefined` call, an `Id`/`string` mismatch and a mismatched `propTypes` key).
  All are resolved; the type checker now runs in CI and in `prepublishOnly`.
- **Debug logging removed** from the library (9 `console.log` calls that dumped
  whole STIX datasets into consumer DevTools). The two diagnostic `console.warn`
  messages for skipped relationships, and the `console.error` for graph
  creation failures, are intentionally kept.
- **License consistency.** `package.json` said `BSD-3-Clause` while the `LICENSE`
  file and README said MIT. Everything is now MIT.

### Changed

- **Dependencies.** The entire ejected Create React App toolchain (webpack, jest,
  babel, eslint, tailwind, workbox, postcss, sass… 50 packages) was listed in
  `dependencies`, so every consumer installed **1,323 packages** for a graph
  component. Build/test tooling now lives in `devDependencies`; runtime
  dependencies are `vis-network`, `vis-data` and `prop-types`.
- **`react`/`react-dom` are no longer installed as dependencies** (they were in
  both `dependencies` and `peerDependencies`, which could install a second React
  and break hooks). React is a peer dependency `^18.2.0 || ^19.0.0`;
  `react-dom` is no longer a peer because the library never imports it.
- **Toolchain modernised:** Vite 5-era config → Vite 8 (ESM + CJS + UMD), Jest 27
  - CRA transforms → Vitest 5 + Testing Library, ESLint 8 (CRA config, EOL) →
    ESLint 10 flat config + Prettier, TypeScript `.d.ts` emitted with `tsc`.
- **Types are shipped.** `dist/index.d.ts` is generated and wired to `types`,
  so TypeScript consumers get IntelliSense. `StixviewerProps` and
  `StixViewerViewProps` are exported for convenience.
- **Package contents are constrained** with `files: ["dist"]`. The tarball no
  longer ships the ejected CRA `config/`, `scripts/`, `public/` and raw `src/`.
  Deep imports into `src/` (for example
  `stix2vis/src/stix2viz/stix2viz/stix2viz.js`) are not part of the public API
  and are no longer published; use the documented default export instead.
- `dist/` is no longer committed to Git — it is built from source on
  `prepublishOnly` and in CI, so the published artifact can always be traced back
  to a commit.
- Added `exports`, `types`, `files`, `sideEffects: false`, `engines`,
  `publishConfig`, `bugs`, `homepage`, `unpkg`/`jsdelivr` fields, plus a
  `.nvmrc`, ESLint/Prettier configs, CI (Node 22/24) and a provenance-enabled
  publish workflow, and a `size-limit` bundle budget.

### Added

- Characterisation test suite (Vitest + Testing Library) covering the STIX
  transformation behaviour (input formats, labels/uniquification, explicit and
  embedded edges, `include`/`exclude` filters, `userLabels`, `displayProperty`
  and error handling) and the component lifecycle (`onNodeclick`, destroy on
  unmount, multiple instances, error handling). These tests lock the current
  behaviour so future refactors cannot change it silently.
- `npm run verify` — lint + format check + typecheck + tests + build + bundle
  size + `publint` + `@arethetypeswrong/cli` (run against the `dist/` tree rather
  than `npm pack`'s tarball, so it does not break under `npm publish --dry-run`),
  also wired to `prepublishOnly`.
- `npm run dev` playground, `npm run coverage`, `npm run test:watch`.

## 1.1.4 and earlier

Earlier releases are not documented in this file; see the repository history.
