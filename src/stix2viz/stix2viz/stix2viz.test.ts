import { afterEach, describe, expect, it, vi } from "vitest";

// The graph-data builder never touches vis-network (it only forwards the
// namespace), so mocking keeps this suite focused on STIX transformation.
vi.mock("vis-network", () => ({ Network: class {} }));

import stix2viz from "./stix2viz";

const IDENTITY_1 = "identity--11111111-1111-4111-8111-111111111111";
const IDENTITY_2 = "identity--22222222-2222-4222-8222-222222222222";
const MALWARE = "malware--33333333-3333-4333-8333-333333333333";
const INDICATOR = "indicator--44444444-4444-4444-8444-444444444444";
const RELATIONSHIP = "relationship--55555555-5555-4555-8555-555555555555";
const BUNDLE = "bundle--66666666-6666-4666-8666-666666666666";

/**
 * Fixture mirroring the shape of the published demo data, so the expectations
 * below double as documentation of the public behaviour.
 */
function makeBundle() {
  return {
    type: "bundle",
    id: BUNDLE,
    objects: [
      {
        type: "identity",
        spec_version: "2.1",
        id: IDENTITY_1,
        name: "Example Corp",
        identity_class: "organization",
      },
      {
        type: "malware",
        spec_version: "2.1",
        id: MALWARE,
        name: "Adversary-in-the-middle",
        is_family: false,
        created_by_ref: IDENTITY_1,
      },
      {
        type: "indicator",
        spec_version: "2.1",
        id: INDICATOR,
        pattern_type: "stix",
        pattern: "[file:hashes.'MD5' = 'd41d8cd98f00b204e9800998ecf8427e']",
      },
      {
        type: "relationship",
        spec_version: "2.1",
        id: RELATIONSHIP,
        relationship_type: "indicates",
        source_ref: INDICATOR,
        target_ref: MALWARE,
      },
      // Same display name as IDENTITY_1 on purpose: names must be uniquified.
      {
        type: "identity",
        spec_version: "2.1",
        id: IDENTITY_2,
        name: "Example Corp",
      },
    ],
  };
}

function edgeSummary(edgeDataSet: any) {
  return edgeDataSet
    .get()
    .map((edge: any) => ({ from: edge.from, to: edge.to, label: edge.label }));
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("makeGraphData", () => {
  it("makes one node per non-relationship object and uniquifies labels", () => {
    const [nodes, , stixIdToObject] = stix2viz.makeGraphData(makeBundle());

    expect(stixIdToObject.size).toBe(5);
    expect(nodes.length).toBe(4);
    expect(nodes.get(IDENTITY_1).label).toBe("Example Corp");
    expect(nodes.get(MALWARE).label).toBe("Adversary-in-the-middle");
    expect(nodes.get(INDICATOR).label).toBe("indicator");
    expect(nodes.get(IDENTITY_2).label).toBe("Example Corp(2)");
  });

  it("turns relationships into labelled edges keeping the relationship id", () => {
    const [, edges] = stix2viz.makeGraphData(makeBundle());

    expect(edges.get(RELATIONSHIP)).toMatchObject({
      from: INDICATOR,
      to: MALWARE,
      label: "indicates",
    });
  });

  it("derives edges from embedded references such as created_by_ref", () => {
    const [, edges] = stix2viz.makeGraphData(makeBundle());

    expect(edgeSummary(edges)).toEqual(
      expect.arrayContaining([
        { from: MALWARE, to: IDENTITY_1, label: "created-by" },
      ])
    );
    expect(edges.length).toBe(2);
  });
});

describe("makeGraphData input formats", () => {
  it("accepts a single STIX object", () => {
    const [nodes, edges] = stix2viz.makeGraphData({
      type: "malware",
      spec_version: "2.1",
      id: MALWARE,
      name: "Standalone",
    });

    expect(nodes.length).toBe(1);
    expect(nodes.get(MALWARE).label).toBe("Standalone");
    expect(edges.length).toBe(0);
  });

  it("accepts an array of STIX objects", () => {
    const [nodes] = stix2viz.makeGraphData(makeBundle().objects);

    expect(nodes.length).toBe(4);
  });

  it("accepts a JSON string", () => {
    const [nodes] = stix2viz.makeGraphData(JSON.stringify(makeBundle()));

    expect(nodes.length).toBe(4);
  });
});

describe("makeGraphData configuration", () => {
  it("applies include criteria", () => {
    const config = new Map<string, any>([
      ["include", new Map([["type", "malware"]])],
    ]);

    const [nodes, edges] = stix2viz.makeGraphData(makeBundle(), config);

    expect(nodes.length).toBe(1);
    expect(nodes.get(MALWARE)).toBeTruthy();
    expect(edges.length).toBe(0);
  });

  it("accepts a plain object config (runtime contract)", () => {
    // `normalizeConfig` accepts a plain object or a JSON string, not only a
    // Map; the declared parameter type is narrower, hence the cast.
    const config = { exclude: { type: "identity" } } as unknown as Map<
      string,
      any
    >;

    const [nodes] = stix2viz.makeGraphData(makeBundle(), config);

    expect(nodes.length).toBe(2);
  });

  it("applies exclude criteria", () => {
    const config = new Map<string, any>([
      ["exclude", new Map([["type", "identity"]])],
    ]);

    const [nodes, edges] = stix2viz.makeGraphData(makeBundle(), config);

    expect(nodes.length).toBe(2);
    expect(edgeSummary(edges)).toEqual([
      { from: INDICATOR, to: MALWARE, label: "indicates" },
    ]);
  });

  it("honours userLabels supplied through a Map config", () => {
    const config = new Map<string, any>([
      ["userLabels", new Map([[MALWARE, "Custom label"]])],
    ]);

    const [nodes] = stix2viz.makeGraphData(makeBundle(), config);

    expect(nodes.get(MALWARE).label).toBe("Custom label");
  });

  it("honours per-type displayProperty overrides", () => {
    const config = new Map<string, any>([
      ["indicator", new Map([["displayProperty", "pattern_type"]])],
    ]);

    const [nodes] = stix2viz.makeGraphData(makeBundle(), config);

    expect(nodes.get(INDICATOR).label).toBe("stix");
  });
});

describe("makeGraphData error handling", () => {
  it("rejects empty content", () => {
    expect(() => stix2viz.makeGraphData({})).toThrowError(
      /Invalid STIX content/
    );
  });

  it("rejects an empty array", () => {
    expect(() => stix2viz.makeGraphData([])).toThrowError(
      /Invalid STIX content/
    );
  });

  it("rejects objects without an id", () => {
    expect(() => stix2viz.makeGraphData({ type: "malware" })).toThrowError(
      /Invalid STIX object: requires at least type and id/
    );
  });

  it("warns and drops relationships whose endpoints are missing", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const [nodes, edges] = stix2viz.makeGraphData({
      type: "bundle",
      id: BUNDLE,
      objects: [
        { type: "malware", id: MALWARE, name: "Lonely" },
        {
          type: "relationship",
          id: RELATIONSHIP,
          relationship_type: "indicates",
          source_ref: INDICATOR,
          target_ref: MALWARE,
        },
      ],
    });

    expect(nodes.length).toBe(1);
    expect(edges.length).toBe(0);
    expect(warn).toHaveBeenCalled();
  });
});
