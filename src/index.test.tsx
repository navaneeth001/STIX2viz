import React from "react";
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ receivedProps: [] as any[] }));

vi.mock("./Stixviewer/Stixviewer", () => ({
  default: (props: any) => {
    mocks.receivedProps.push(props);
    return null;
  },
}));

import StixViewerView from "./index";

afterEach(() => {
  mocks.receivedProps.length = 0;
});

describe("stix2vis public entry point", () => {
  it("keeps the App wrapper shipped by previous releases", () => {
    const { container } = render(<StixViewerView stixJson={{}} />);

    expect(container.querySelector("div.App")).toBeTruthy();
  });

  it("forwards every documented prop to the viewer", () => {
    const stixJson = { type: "bundle", id: "bundle--x", objects: [] };
    const graphStyle = { background: "white" };
    const wrapStyle = { backgroundColor: "white" };
    const onNodeclick = vi.fn();

    render(
      <StixViewerView
        stixJson={stixJson}
        graphStyle={graphStyle}
        wrapStyle={wrapStyle}
        onNodeclick={onNodeclick}
      />
    );

    expect(mocks.receivedProps).toEqual([
      { stixJson, graphStyle, wrapStyle, onNodeclick },
    ]);
  });

  it("keeps the documented 1.x props first, with the new optional props after", () => {
    expect(Object.keys(StixViewerView.propTypes ?? {})).toEqual([
      "stixJson",
      "graphStyle",
      "wrapStyle",
      "onNodeclick",
      // 1.2 additions (all optional, default-off).
      "onNodeSelect",
      "onEdgeSelect",
      "onSelectionChange",
      "onError",
      "config",
      "showDanglingRefs",
      "showDetailsPanel",
      "showToolbar",
    ]);
  });

  it("forwards the new optional props to the viewer", () => {
    const onNodeSelect = vi.fn();
    const onEdgeSelect = vi.fn();
    const onSelectionChange = vi.fn();
    const onError = vi.fn();
    const config = { include: { type: "malware" } };

    render(
      <StixViewerView
        stixJson={{}}
        onNodeSelect={onNodeSelect}
        onEdgeSelect={onEdgeSelect}
        onSelectionChange={onSelectionChange}
        onError={onError}
        config={config}
        showDanglingRefs
        showDetailsPanel
        showToolbar
      />
    );

    expect(mocks.receivedProps).toEqual([
      {
        stixJson: {},
        graphStyle: undefined,
        wrapStyle: undefined,
        onNodeclick: undefined,
        onNodeSelect,
        onEdgeSelect,
        onSelectionChange,
        onError,
        config,
        showDanglingRefs: true,
        showDetailsPanel: true,
        showToolbar: true,
      },
    ]);
  });
});
