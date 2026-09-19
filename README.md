# Stix2Vis — visualise STIX 2.1 as an interactive graph

[![npm version](https://img.shields.io/npm/v/stix2vis.svg)](https://www.npmjs.com/package/stix2vis)
[![CI](https://github.com/navaneeth001/STIX2viz/actions/workflows/ci.yml/badge.svg)](https://github.com/navaneeth001/STIX2viz/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/stix2vis.svg)](./LICENSE)

A React component that renders STIX 2.1 content — bundles, arrays of objects or a
single object — as an interactive relationship graph. Everything runs entirely in
the browser: your threat intel never leaves the page.

Inspired by the
[OASIS CTI STIX Visualisation](https://oasis-open.github.io/cti-stix-visualization/)
project.

![Sample rendering of a STIX 2.1 JSON showing malware, indicators and identities](/public/stix2.png)

## Contents

- [Install](#install)
- [Quick start](#quick-start)
- [Props](#props)
- [Supported input](#supported-input)
- [What gets rendered](#what-gets-rendered)
- [Bundle formats](#bundle-formats)
- [Development](#development)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Install

```bash
npm install stix2vis
```

`react` is a peer dependency (`^18.2.0 || ^19.0.0`) — install it in your app (you
almost certainly already have it). `react-dom` is **not** required. The published
package has only three runtime dependencies (`vis-network`, `vis-data`,
`prop-types`) and pulls in no build tooling.

## Quick start

```jsx
import StixViewerView from "stix2vis";
import bundle from "./bundle.json"; // STIX 2.1 bundle

export default function App() {
  return (
    <div>
      <StixViewerView stixJson={bundle} />
    </div>
  );
}
```

With styles and a click handler:

```jsx
<StixViewerView
  stixJson={bundle}
  wrapStyle={{ backgroundColor: "white" }}
  graphStyle={{ width: "100%", height: 600, backgroundColor: "white" }}
  onNodeclick={(nodeId) => console.log("clicked", nodeId)}
/>
```

> **Note on the callback name:** the prop is `onNodeclick` (lower-case `c`). It
> has been spelled that way since 1.0 and is kept as-is so existing integrations
> keep working.

## Props

| Prop          | Type                        | Required | Description                                                                                |
| ------------- | --------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `stixJson`    | `object \| array \| string` | yes      | STIX 2.1 content to visualise (bundle, array of objects, single object, or a JSON string). |
| `graphStyle`  | `React.CSSProperties`       | no       | Styles for the graph container, merged on top of the default `600x600`.                    |
| `wrapStyle`   | `React.CSSProperties`       | no       | Styles for the wrapper element around the graph.                                           |
| `onNodeclick` | `(nodeId: string) => void`  | no       | Called with the STIX id of the clicked node.                                               |

Rendered DOM (stable contract — safe to target from CSS):

```html
<div class="App">
  <div>
    <!-- wrapper, receives wrapStyle -->
    <div id="graphContainer">
      <!-- receives graphStyle, vis-network mounts here -->
    </div>
  </div>
</div>
```

## Supported input

```js
stixJson={bundle}                  // { type: "bundle", objects: [...] }
stixJson={bundle.objects}          // array of STIX objects
stixJson={{ type: "malware", ...}} // a single STIX object
stixJson={jsonString}              // raw JSON text
```

Invalid content throws a descriptive error (`Invalid STIX content: …`,
`Invalid STIX object: requires at least type and id …`), and relationships whose
endpoints are missing from the bundle are skipped with a `console.warn`.

## What gets rendered

- **Nodes** — one per STIX domain/custom object. `relationship` objects become
  edges, never nodes.
- **Labels** — taken from the object's `name`, then `value`, then `path`, and
  finally the STIX type; duplicates are uniquified (`Example Corp(2)`) and long
  labels are truncated to 40 characters.
- **Edges** — built from two sources:
  1. explicit `relationship` objects (`indicates`, `uses`, `targets`, …), and
  2. embedded references inside objects, e.g. `created_by_ref` → `created-by`,
     `object_marking_refs` → `applies-to`, `resolves_to_refs` → `resolves-to`,
     `src_ref`/`dst_ref` on `network-traffic`, and so on.
- **Icons** — a per-type STIX icon rendered as `circularImage` nodes in a
  Barnes–Hut physics layout that stabilises and then freezes.

## Bundle formats

| Consumer                                                   | Entry point               |
| ---------------------------------------------------------- | ------------------------- |
| Bundlers (Vite, webpack, Next, Rollup, esbuild, Turbopack) | `dist/stix2vis.mjs` (ESM) |
| Node `require()` / TypeScript `node16`                     | `dist/stix2vis.cjs` (CJS) |
| `<script>` tag / CDN                                       | `dist/stix2vis.umd.js`    |
| Type definitions                                           | `dist/index.d.ts`         |

All formats are produced from the same source, so behaviour is identical
everywhere. React is always external (consumers use their own copy, which avoids
the "two Reacts / invalid hook call" class of bugs) and the published icons are
inlined as data URIs so nothing has to be served from a particular path.

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/stix2vis/dist/stix2vis.umd.js"></script>
<script>
  // the UMD global *is* the component
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(React.createElement(stix2vis, { stixJson: myBundle }));
</script>
```

## Development

Requires Node `^22.12.0 || ^24.0.0` (see `.nvmrc`) — the toolchain (Vitest 5,
Vite 8, jsdom 30) does not support odd-numbered Node releases such as 23 or 25.

```bash
npm install

npm run dev          # Vite playground at http://localhost:5173
npm run build        # dist/stix2vis.{mjs,cjs,umd.js} + dist/index.d.ts + .d.mts
npm test             # Vitest behaviour-locking suite
npm run coverage     # coverage report
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint 10 (flat config)
npm run format       # Prettier
npm run size         # bundle-size budget
npm run verify       # all of the above + publint + attw; also runs on prepublishOnly
```

`dist/` is intentionally not committed — it is generated by `npm run build`, by
`prepack`/`prepublishOnly` before publishing, and by CI.

### Releasing (maintainers)

```bash
npm login            # publishing requires an authenticated account with 2FA
git add -A
git commit -m "chore(release): v1.1.5"
npm publish          # prepublishOnly verifies, prepack guarantees dist/ exists
```

Nothing is uploaded unless `npm run verify` passes: lint, format check,
typecheck, the test suite, the build, the bundle-size budget, `publint` and
`@arethetypeswrong/cli`. To inspect the exact tarball and its contents before
publishing, without uploading anything:

```bash
npm publish --dry-run
```

To publish from CI instead, create a GitHub Release — the **Publish to npm**
workflow runs the same verification and publishes with provenance. It needs an
`NPM_TOKEN` repository secret with publish rights, plus `id-token: write`
(already configured in `.github/workflows/publish.yml`).

If a bad version ever reaches the registry, deprecate it rather than unpublishing:

```bash
npm deprecate "stix2vis@<1.1.5" "Broken packaging outside webpack; upgrade to 1.1.5"
```

## Contributing

Issues and pull requests are welcome. Please run `npm run verify` before opening
a PR: it runs linting, formatting, type checking, the test suite, the build, a
bundle budget check and package/type-resolution checks (`publint`,
`@arethetypeswrong/cli`). Behaviour is locked by tests, so if a change to
`makeGraphData` output is intentional, update the expectations in
`src/stix2viz/stix2viz/stix2viz.test.ts` deliberately.

## Roadmap

- Expose the framework-agnostic graph builder as a documented `stix2vis/core`
  entry point (today only the React component is public).
- Let consumers supply their own icon set (`iconDir` / `iconResolver`), so the
  inlined icon payload can be moved out of the JS bundle.
- Render the type legend that is already computed, plus type toggles and search.
- Selected-node detail panel and incoming/outgoing relationship views.
- STIX 2.0 `observed-data.objects` support and deterministic edge ids.
- Optional WebGL renderer for very large bundles (>5k objects).
- Accessibility: keyboard navigation and a table-view fallback.

## License

MIT — see [LICENSE](./LICENSE).

## Acknowledgements

Inspired by the STIX Visualisation project from the OASIS CTI Open Repository.
Thanks to all contributors of that project.

## Support

Questions or problems? Please
[open an issue](https://github.com/navaneeth001/STIX2viz/issues).

**Author:** Navaneeth001 — navaneethpqln@gmail.com
