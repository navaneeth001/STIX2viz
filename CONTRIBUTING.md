# Contributing to STIX2viz

Thanks for your interest in contributing! This project visualises STIX 2.1
threat intelligence entirely in the browser, and every kind of contribution is
welcome — code, documentation, sample data, bug reports and feature ideas.

## Getting started

Requires Node `^22.12.0 || ^24.0.0` (see `.nvmrc`).

```bash
git clone https://github.com/navaneeth001/STIX2viz.git
cd STIX2viz
npm install
npm run dev        # Vite playground at http://localhost:5173
npm test           # Vitest behaviour-locking suite
```

## Before opening a PR

Run the full verification gate — CI runs exactly this:

```bash
npm run verify
```

It executes lint, format check, type check, the test suite, the build, the
bundle-size budget, and package/type-resolution checks (`publint`,
`@arethetypeswrong/cli`).

## Project rules that keep this package trustworthy

- **Backward compatibility is sacred.** The rendered DOM, the documented props
  and the existing callback contracts must not change. New features go behind
  new, default-off props.
- **The bundle budget is a feature.** New runtime dependencies are almost
  certainly rejected. Everything so far is achievable with `vis-network`,
  `vis-data` and native DOM.
- **Behaviour is locked by tests.** If a change to `makeGraphData` output is
  intentional, update the expectations in
  `src/stix2viz/stix2viz/stix2viz.test.ts` deliberately and say so in your PR.
- **No telemetry, no network calls.** STIX content must never leave the page.

## Reporting bugs

Open a [bug report](https://github.com/navaneeth001/STIX2viz/issues/new?template=bug_report.yml)
and include a minimal STIX bundle that reproduces the issue (scrub any real
indicators first!).

## Feature requests

[Open a feature request](https://github.com/navaneeth001/STIX2viz/issues/new?template=feature_request.yml)
describing the analyst workflow you're trying to support — concrete CTI use
cases carry the most weight.
