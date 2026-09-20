import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  destroy: vi.fn(),
  on: vi.fn(),
  makeGraphData: vi.fn(),
  makeGraphView: vi.fn(),
  toggleStixType: vi.fn(),
  selectNode: vi.fn(),
  focusNode: vi.fn(),
}));

vi.mock("../stix2viz/stix2viz/stix2viz", () => ({
  default: {
    makeGraphData: mocks.makeGraphData,
    makeGraphView: mocks.makeGraphView,
  },
}));

import Stixviewer from "./Stixviewer";

const STIX_JSON = {
  type: "malware",
  id: "malware--33333333-3333-4333-8333-333333333333",
};

const RELATIONSHIP_ID = "relationship--55555555-5555-4555-8555-555555555555";

function graphContainer() {
  return document.querySelector<HTMLElement>("#graphContainer");
}

function lastClickHandler() {
  return mocks.on.mock.calls[mocks.on.mock.calls.length - 1][1];
}

beforeEach(() => {
  mocks.makeGraphData.mockReturnValue(["nodes", "edges", "idToObject"]);
  mocks.makeGraphView.mockReturnValue({
    on: mocks.on,
    destroy: mocks.destroy,
    toggleStixType: mocks.toggleStixType,
    selectNode: mocks.selectNode,
    focusNode: mocks.focusNode,
    nodeDataSet: { get: vi.fn(() => []) },
    edgeDataSet: { get: vi.fn(() => []) },
    legendData: [new Map(), "default.svg"],
    iconGroups: {},
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("Stixviewer rendering", () => {
  it("renders the graph container with the documented default size", () => {
    render(<Stixviewer stixJson={STIX_JSON} />);

    const container = graphContainer();
    expect(container).toBeTruthy();
    expect(container?.style.width).toBe("600px");
    expect(container?.style.height).toBe("600px");
  });

  it("applies graphStyle on top of the default size", () => {
    render(
      <Stixviewer
        stixJson={STIX_JSON}
        graphStyle={{ width: 320, background: "red" }}
      />
    );

    const container = graphContainer();
    expect(container?.style.width).toBe("320px");
    expect(container?.style.background).toBe("red");
    expect(container?.style.height).toBe("600px");
  });

  it("renders the wrapper with wrapStyle", () => {
    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} wrapStyle={{ padding: "8px" }} />
    );

    const wrapper = container.firstElementChild?.firstElementChild;
    expect((wrapper as HTMLElement)?.style.padding).toBe("8px");
  });
});

describe("Stixviewer graph lifecycle", () => {
  it("builds graph data and a graph view for the supplied STIX content", () => {
    render(<Stixviewer stixJson={STIX_JSON} />);

    expect(mocks.makeGraphData).toHaveBeenCalledWith(STIX_JSON);

    const call = mocks.makeGraphView.mock.calls[0];
    expect(call[0]).toBe(graphContainer());
    expect(call[1]).toBe("nodes");
    expect(call[2]).toBe("edges");
    expect(call[3]).toBe("idToObject");
    expect(call[4]).toBeInstanceOf(Map);
    expect(call[4].get("iconDir")).toBe(".");
  });

  it("does nothing when no STIX content is supplied", () => {
    render(<Stixviewer stixJson={null} />);

    expect(mocks.makeGraphData).not.toHaveBeenCalled();
    expect(mocks.makeGraphView).not.toHaveBeenCalled();
    expect(graphContainer()).toBeTruthy();
  });

  it("destroys the graph view on unmount", () => {
    const { unmount } = render(<Stixviewer stixJson={STIX_JSON} />);

    expect(mocks.destroy).not.toHaveBeenCalled();
    unmount();
    expect(mocks.destroy).toHaveBeenCalledTimes(1);
  });

  it("tears down the old view and rebuilds when the data changes", () => {
    const { rerender } = render(<Stixviewer stixJson={STIX_JSON} />);

    rerender(<Stixviewer stixJson={{ ...STIX_JSON }} />);

    expect(mocks.destroy).toHaveBeenCalledTimes(1);
    expect(mocks.makeGraphView).toHaveBeenCalledTimes(2);
  });

  it("supports several viewers on the same page independently", () => {
    const first = render(<Stixviewer stixJson={STIX_JSON} />);
    const second = render(<Stixviewer stixJson={STIX_JSON} />);

    expect(mocks.makeGraphView).toHaveBeenCalledTimes(2);

    first.unmount();
    expect(mocks.destroy).toHaveBeenCalledTimes(1);

    second.unmount();
    expect(mocks.destroy).toHaveBeenCalledTimes(2);
  });

  it("logs an error instead of throwing when the graph cannot be created", () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.makeGraphData.mockImplementation(() => {
      throw new Error("boom");
    });

    expect(() => render(<Stixviewer stixJson={STIX_JSON} />)).not.toThrow();
    expect(error).toHaveBeenCalled();
  });
});

describe("Stixviewer onNodeclick", () => {
  it("passes the clicked node id to the callback", () => {
    const onNodeclick = vi.fn();
    render(<Stixviewer stixJson={STIX_JSON} onNodeclick={onNodeclick} />);

    const clickHandler = mocks.on.mock.calls[0][1];
    act(() => {
      clickHandler({ nodes: [STIX_JSON.id] });
    });

    expect(onNodeclick).toHaveBeenCalledWith(STIX_JSON.id);
  });

  it("ignores clicks that do not select a node", () => {
    const onNodeclick = vi.fn();
    render(<Stixviewer stixJson={STIX_JSON} onNodeclick={onNodeclick} />);

    const clickHandler = mocks.on.mock.calls[0][1];
    act(() => {
      clickHandler({ nodes: [] });
    });

    expect(onNodeclick).not.toHaveBeenCalled();
  });

  it("always calls the latest callback without rebuilding the graph", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = render(
      <Stixviewer stixJson={STIX_JSON} onNodeclick={first} />
    );

    const clickHandler = mocks.on.mock.calls[0][1];
    rerender(<Stixviewer stixJson={STIX_JSON} onNodeclick={second} />);

    expect(mocks.makeGraphView).toHaveBeenCalledTimes(1);

    act(() => {
      clickHandler({ nodes: [STIX_JSON.id] });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith(STIX_JSON.id);
  });
});

describe("Stixviewer config and dangling references", () => {
  it("does not pass a config when no config props are supplied", () => {
    render(<Stixviewer stixJson={STIX_JSON} />);

    expect(mocks.makeGraphData).toHaveBeenCalledWith(STIX_JSON);
  });

  it("forwards the config prop to makeGraphData and the graph view", () => {
    render(
      <Stixviewer
        stixJson={STIX_JSON}
        config={{ include: { type: "malware" } }}
      />
    );

    expect(mocks.makeGraphData).toHaveBeenCalledWith(STIX_JSON, {
      include: { type: "malware" },
    });

    const call = mocks.makeGraphView.mock.calls[0];
    expect(call[4]).toBeInstanceOf(Map);
    expect(call[4].get("include")).toEqual({ type: "malware" });
    // iconDir stays managed internally so bundled icons keep resolving.
    expect(call[4].get("iconDir")).toBe(".");
  });

  it("adds showDanglingRefs to the data config", () => {
    render(<Stixviewer stixJson={STIX_JSON} showDanglingRefs />);

    expect(mocks.makeGraphData).toHaveBeenCalledWith(STIX_JSON, {
      showDanglingRefs: true,
    });
  });

  it("lets showDanglingRefs=false override a config value", () => {
    render(
      <Stixviewer
        stixJson={STIX_JSON}
        config={{ showDanglingRefs: true }}
        showDanglingRefs={false}
      />
    );

    expect(mocks.makeGraphData).toHaveBeenCalledWith(STIX_JSON, {
      showDanglingRefs: false,
    });
  });

  it("rebuilds the graph when the config content changes, not on identity", () => {
    const { rerender } = render(
      <Stixviewer stixJson={STIX_JSON} config={{ include: { type: "a" } }} />
    );

    rerender(
      <Stixviewer stixJson={STIX_JSON} config={{ include: { type: "b" } }} />
    );
    expect(mocks.makeGraphView).toHaveBeenCalledTimes(2);

    // Same serialized content in a fresh object: no rebuild.
    rerender(
      <Stixviewer stixJson={STIX_JSON} config={{ include: { type: "b" } }} />
    );
    expect(mocks.makeGraphView).toHaveBeenCalledTimes(2);
  });
});

describe("Stixviewer error reporting", () => {
  it("reports graph creation errors through onError and console.error", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const onError = vi.fn();
    const failure = new Error("boom");
    mocks.makeGraphData.mockImplementation(() => {
      throw failure;
    });

    expect(() =>
      render(<Stixviewer stixJson={STIX_JSON} onError={onError} />)
    ).not.toThrow();

    expect(onError).toHaveBeenCalledWith(failure);
    expect(errorSpy).toHaveBeenCalled();
  });
});

describe("Stixviewer selection callbacks", () => {
  it("passes the clicked node id and full STIX object to onNodeSelect", () => {
    const onNodeSelect = vi.fn();
    const stixObject = new Map(Object.entries(STIX_JSON));
    mocks.makeGraphData.mockReturnValue([
      "nodes",
      "edges",
      new Map([[STIX_JSON.id, stixObject]]),
    ]);

    render(<Stixviewer stixJson={STIX_JSON} onNodeSelect={onNodeSelect} />);

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });

    expect(onNodeSelect).toHaveBeenCalledWith(STIX_JSON.id, STIX_JSON);
  });

  it("passes null to onNodeSelect for nodes without a backing STIX object", () => {
    const onNodeSelect = vi.fn();
    mocks.makeGraphData.mockReturnValue(["nodes", "edges", new Map()]);

    render(<Stixviewer stixJson={STIX_JSON} onNodeSelect={onNodeSelect} />);

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });

    expect(onNodeSelect).toHaveBeenCalledWith(STIX_JSON.id, null);
  });

  it("resolves explicit relationship edges to their STIX object", () => {
    const onEdgeSelect = vi.fn();
    const relationship = {
      type: "relationship",
      id: RELATIONSHIP_ID,
      relationship_type: "indicates",
    };
    mocks.makeGraphData.mockReturnValue([
      "nodes",
      "edges",
      new Map([[RELATIONSHIP_ID, new Map(Object.entries(relationship))]]),
    ]);

    render(<Stixviewer stixJson={STIX_JSON} onEdgeSelect={onEdgeSelect} />);

    act(() => {
      lastClickHandler()({ nodes: [], edges: [RELATIONSHIP_ID] });
    });

    expect(onEdgeSelect).toHaveBeenCalledWith(RELATIONSHIP_ID, relationship);
  });

  it("passes null for embedded edges that have no relationship object", () => {
    const onEdgeSelect = vi.fn();
    mocks.makeGraphData.mockReturnValue(["nodes", "edges", new Map()]);

    render(<Stixviewer stixJson={STIX_JSON} onEdgeSelect={onEdgeSelect} />);

    act(() => {
      lastClickHandler()({ nodes: [], edges: ["auto-generated-edge"] });
    });

    expect(onEdgeSelect).toHaveBeenCalledWith("auto-generated-edge", null);
  });

  it("reports every click through onSelectionChange, including deselection", () => {
    const onSelectionChange = vi.fn();
    render(
      <Stixviewer stixJson={STIX_JSON} onSelectionChange={onSelectionChange} />
    );

    const clickHandler = lastClickHandler();

    act(() => {
      clickHandler({ nodes: [STIX_JSON.id], edges: ["e1"] });
    });
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      nodes: [STIX_JSON.id],
      edges: ["e1"],
    });

    act(() => {
      clickHandler({ nodes: [], edges: [] });
    });
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      nodes: [],
      edges: [],
    });
  });

  it("keeps the legacy onNodeclick contract: not called on edge-only clicks", () => {
    const onNodeclick = vi.fn();
    render(<Stixviewer stixJson={STIX_JSON} onNodeclick={onNodeclick} />);

    act(() => {
      lastClickHandler()({ nodes: [], edges: ["e1"] });
    });

    expect(onNodeclick).not.toHaveBeenCalled();
  });
});

describe("Stixviewer detail panel", () => {
  const stixObject = new Map(
    Object.entries({
      ...STIX_JSON,
      name: "Evil Malware",
      description: "Does evil things",
      created: "2024-01-01T00:00:00.000Z",
    })
  );

  function renderWithPanel() {
    mocks.makeGraphData.mockReturnValue([
      "nodes",
      "edges",
      new Map([[STIX_JSON.id, stixObject]]),
    ]);

    return render(<Stixviewer stixJson={STIX_JSON} showDetailsPanel />)
      .container;
  }

  it("renders no detail panel when the prop is off", () => {
    mocks.makeGraphData.mockReturnValue([
      "nodes",
      "edges",
      new Map([[STIX_JSON.id, stixObject]]),
    ]);
    const container = render(<Stixviewer stixJson={STIX_JSON} />).container;

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });

    expect(container.querySelector(".stix2vis-details")).toBeNull();
  });

  it("shows the selected node's fields after a node click", () => {
    const container = renderWithPanel();
    expect(container.querySelector(".stix2vis-details")).toBeNull();

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });

    const panel = container.querySelector(".stix2vis-details");
    expect(panel).toBeTruthy();
    expect(panel?.textContent).toContain("Evil Malware");
    expect(panel?.textContent).toContain("Does evil things");
    expect(panel?.textContent).toContain("2024-01-01T00:00:00.000Z");
    expect(panel?.textContent).toContain("Full JSON");
  });

  it("clears the panel when the empty canvas is clicked", () => {
    const container = renderWithPanel();

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });
    expect(container.querySelector(".stix2vis-details")).toBeTruthy();

    act(() => {
      lastClickHandler()({ nodes: [], edges: [] });
    });
    expect(container.querySelector(".stix2vis-details")).toBeNull();
  });

  it("explains nodes that have no backing STIX object", () => {
    mocks.makeGraphData.mockReturnValue(["nodes", "edges", new Map()]);
    const container = render(
      <Stixviewer stixJson={STIX_JSON} showDetailsPanel />
    ).container;

    act(() => {
      lastClickHandler()({ nodes: [STIX_JSON.id], edges: [] });
    });

    const panel = container.querySelector(".stix2vis-details");
    expect(panel?.textContent).toContain("dangling reference");
  });
});

describe("Stixviewer toolbar", () => {
  function toolbarView(overrides: Record<string, any> = {}) {
    return {
      on: mocks.on,
      destroy: mocks.destroy,
      toggleStixType: mocks.toggleStixType,
      selectNode: mocks.selectNode,
      focusNode: mocks.focusNode,
      nodeDataSet: { get: vi.fn(() => []) },
      edgeDataSet: { get: vi.fn(() => []) },
      legendData: [new Map([["malware", "stix2_malware.png"]]), "default.svg"],
      iconGroups: {},
      ...overrides,
    };
  }

  it("renders no toolbar by default", () => {
    const { container } = render(<Stixviewer stixJson={STIX_JSON} />);

    expect(container.querySelector(".stix2vis-toolbar")).toBeNull();
  });

  it("renders search, legend toggles and exports when enabled", () => {
    mocks.makeGraphView.mockReturnValue(toolbarView());

    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar />
    );

    const toolbar = container.querySelector(".stix2vis-toolbar");
    expect(toolbar).toBeTruthy();
    expect(toolbar?.querySelector("input")).toBeTruthy();
    expect(toolbar?.textContent).toContain("malware");
    expect(toolbar?.textContent).toContain("Export PNG");
    expect(toolbar?.textContent).toContain("Export JSON");
  });

  it("toggles a STIX type through the legend", () => {
    mocks.makeGraphView.mockReturnValue(toolbarView());

    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar />
    );

    const legendButton = Array.from(
      container.querySelectorAll(".stix2vis-toolbar button")
    ).find((button) => button.textContent === "malware") as HTMLElement;
    expect(legendButton).toBeTruthy();

    act(() => {
      legendButton!.click();
    });

    expect(mocks.toggleStixType).toHaveBeenCalledWith("malware");
  });

  it("searches by label and focuses the match", () => {
    mocks.makeGraphView.mockReturnValue(
      toolbarView({
        nodeDataSet: {
          get: vi.fn(() => [{ id: "malware--x", label: "Evil Malware" }]),
        },
      })
    );

    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar />
    );

    const input = container.querySelector(
      ".stix2vis-toolbar input"
    ) as HTMLInputElement;
    const submit = Array.from(
      container.querySelectorAll(".stix2vis-toolbar button")
    ).find((button) => button.textContent === "Go") as HTMLButtonElement;

    act(() => {
      fireEvent.change(input, { target: { value: "evil" } });
    });
    act(() => {
      submit.click();
    });

    expect(mocks.selectNode).toHaveBeenCalledWith("malware--x");
    expect(mocks.focusNode).toHaveBeenCalledWith("malware--x");
  });

  it("reports a failed search without throwing", () => {
    mocks.makeGraphView.mockReturnValue(toolbarView());

    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar />
    );

    const input = container.querySelector(
      ".stix2vis-toolbar input"
    ) as HTMLInputElement;
    const submit = Array.from(
      container.querySelectorAll(".stix2vis-toolbar button")
    ).find((button) => button.textContent === "Go") as HTMLButtonElement;

    act(() => {
      fireEvent.change(input, { target: { value: "missing" } });
    });
    act(() => {
      submit.click();
    });

    expect(mocks.selectNode).not.toHaveBeenCalled();
    expect(container.textContent).toContain('No node matching "missing"');
  });

  it("exports the visible graph as JSON", () => {
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
    const createObjectURL = vi.fn(() => "blob:stix2vis");
    const revokeObjectURL = vi.fn();
    (URL as any).createObjectURL = createObjectURL;
    (URL as any).revokeObjectURL = revokeObjectURL;

    mocks.makeGraphView.mockReturnValue(
      toolbarView({
        nodeDataSet: {
          get: vi.fn(() => [
            { id: STIX_JSON.id, label: "Evil", group: "malware" },
          ]),
        },
      })
    );

    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar />
    );

    const exportButton = Array.from(
      container.querySelectorAll(".stix2vis-toolbar button")
    ).find(
      (button) => button.textContent === "Export JSON"
    ) as HTMLButtonElement;

    act(() => {
      exportButton.click();
    });

    expect(createObjectURL).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:stix2vis");
  });

  it("reports PNG export failures through onError instead of throwing", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const onError = vi.fn();
    // Default mock view has no graph, so canvas access fails.
    const { container } = render(
      <Stixviewer stixJson={STIX_JSON} showToolbar onError={onError} />
    );

    const exportButton = Array.from(
      container.querySelectorAll(".stix2vis-toolbar button")
    ).find(
      (button) => button.textContent === "Export PNG"
    ) as HTMLButtonElement;

    expect(() => exportButton.click()).not.toThrow();
    expect(onError).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalled();
  });
});
