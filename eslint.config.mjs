import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

// `eslint-plugin-react-hooks` exposes its rules through different keys
// depending on the major version, so resolve them defensively.
const reactHooksRecommended =
  reactHooks.configs["recommended-latest"] ?? reactHooks.configs.recommended;

export default tseslint.config(
  { ignores: ["dist/**", "coverage/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...(reactHooksRecommended?.rules ?? {}),
      // `any` is used deliberately where STIX content is dynamic.
      "@typescript-eslint/no-explicit-any": "off",
      // The graph core is a close port of the OASIS STIX visualisation engine and
      // keeps its `let`-based style, so `prefer-const` is not enforced there.
      "prefer-const": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  }
);