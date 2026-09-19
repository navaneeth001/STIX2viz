// jest-dom adds custom matchers for asserting on DOM nodes.
// https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// React Testing Library only registers automatic cleanup when Vitest globals are
// enabled. They are not (tests import `describe`/`it` explicitly), so without
// this every render would stay mounted and pollute document-level queries.
afterEach(() => {
  cleanup();
});
