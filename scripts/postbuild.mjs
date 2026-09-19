// Post-build steps for the published bundle.
//
// 1. The package ships a CJS build (`main`) and an ESM build (`module`), so it
//    needs both a `.d.ts` (CommonJS-flavoured) and a `.d.mts` (ESM-flavoured)
//    entry for TypeScript's `node16`/`nodenext` resolution modes. The
//    declaration contents are identical, so a copy keeps them exactly in sync.
//
// 2. The CJS bundle exports the component directly
//    (`module.exports = StixViewerView`), because that is what 1.x behaved like
//    and what `require("stix2vis")` users expect. TypeScript, however, reads the
//    `export default` signature and expects a `.default` property under
//    `moduleResolution: node16`. Exposing both shapes removes that mismatch
//    without changing the primary export.
import { appendFileSync, copyFileSync } from "node:fs";

copyFileSync("dist/index.d.ts", "dist/index.d.mts");

appendFileSync(
  "dist/stix2vis.cjs",
  "\n// CJS interop: keep `require(\"stix2vis\")` returning the component while also\n" +
    "// exposing `.default` for TypeScript node16 CommonJS resolution.\n" +
    "module.exports.default = module.exports;\n"
);