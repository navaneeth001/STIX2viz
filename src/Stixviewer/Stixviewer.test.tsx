import React from "react";
import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  destroy: vi.fn(),
  on: vi.fn(),
  makeGraphData: vi.fn(),
  makeGraphView: vi.fn(),
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

function graphContainer() {
  return document.querySelector<HTMLElement>("#graphContainer");
}

beforeEach(() => {
  mocks.makeGraphData.mockReturnValue(["nodes", "edges", "idToObject"]);
  mocks.makeGraphView.mockReturnValue({
    on: mocks.on,
    destroy: mocks.destroy,
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
