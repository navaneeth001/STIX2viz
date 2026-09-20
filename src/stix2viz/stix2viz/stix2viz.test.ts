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

describe("makeGraphData STIX 2.0 observed-data", () => {
  const OBSERVED = "observed-data--77777777-7777-4777-8777-777777777777";

  it("renders embedded 2.0 objects as nodes referred to by the observed-data", () => {
    const [nodes, edges] = stix2viz.makeGraphData({
      type: "bundle",
      id: BUNDLE,
      objects: [
        {
          type: "observed-data",
          id: OBSERVED,
          first_observed: "2020-01-01T00:00:00.000Z",
          last_observed: "2020-01-01T00:00:00.000Z",
          number_observed: 1,
          objects: {
            0: { type: "file", name: "evil.exe" },
            1: { type: "ipv4-addr", value: "1.2.3.4" },
          },
        },
      ],
    });

    expect(nodes.length).toBe(3);
    expect(nodes.get(OBSERVED)).toBeTruthy();
    expect(nodes.get(OBSERVED + ".objects.0").label).toBe("evil.exe");
    expect(nodes.get(OBSERVED + ".objects.0").group).toBe("file");
    expect(nodes.get(OBSERVED + ".objects.1").label).toBe("1.2.3.4");
    expect(nodes.get(OBSERVED + ".objects.1").group).toBe("ipv4-addr");

    expect(edgeSummary(edges)).toEqual([
      { from: OBSERVED, to: OBSERVED + ".objects.0", label: "refers-to" },
      { from: OBSERVED, to: OBSERVED + ".objects.1", label: "refers-to" },
    ]);
  });

  it("still resolves 2.1 object_refs on observed-data (locked behaviour)", () => {
    const scoId = "file:88888888-8888-4888-8888-888888888888";
    const [nodes, edges] = stix2viz.makeGraphData({
      type: "bundle",
      id: BUNDLE,
      objects: [
        {
          type: "observed-data",
          id: OBSERVED,
          first_observed: "2020-01-01T00:00:00.000Z",
          number_observed: 1,
          object_refs: [scoId],
        },
        { type: "file", id: scoId, name: "ref.exe" },
      ],
    });

    expect(nodes.length).toBe(2);
    expect(edgeSummary(edges)).toEqual([
      { from: OBSERVED, to: scoId, label: "refers-to" },
    ]);
  });

  it("ignores 2.0 objects entries that are not a mapping", () => {
    const [nodes, edges] = stix2viz.makeGraphData({
      type: "bundle",
      id: BUNDLE,
      objects: [
        {
          type: "observed-data",
          id: OBSERVED,
          first_observed: "2020-01-01T00:00:00.000Z",
          number_observed: 1,
          objects: { 0: "not-an-object" },
        },
      ],
    });

    expect(nodes.length).toBe(1);
    expect(edges.length).toBe(0);
  });
});

describe("makeGraphData dangling references", () => {
  const MISSING_IDENTITY = IDENTITY_1; // referenced but never defined
  const MISSING_INDICATOR = INDICATOR; // referenced but never defined

  function danglingBundle() {
    return {
      type: "bundle",
      id: BUNDLE,
      objects: [
        {
          type: "malware",
          id: MALWARE,
          name: "Lonely",
          created_by_ref: MISSING_IDENTITY,
        },
        {
          type: "relationship",
          id: RELATIONSHIP,
          relationship_type: "indicates",
          source_ref: MISSING_INDICATOR,
          target_ref: MALWARE,
        },
      ],
    };
  }

  it("warns and drops by default (locked legacy behaviour)", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const [nodes, edges] = stix2viz.makeGraphData(danglingBundle());

    expect(nodes.length).toBe(1);
    expect(edges.length).toBe(0);
    expect(warn).toHaveBeenCalled();
  });

  it("creates ghost nodes for missing endpoints when showDanglingRefs is set", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const [nodes, edges] = stix2viz.makeGraphData(danglingBundle(), {
      showDanglingRefs: true,
    });

    // Malware + two ghost nodes (identity, indicator).
    expect(nodes.length).toBe(3);

    const ghost = nodes.get(MISSING_IDENTITY);
    expect(ghost).toMatchObject({ dangling: true, group: "identity" });
    expect(ghost.label).toBe("identity");

    expect(edgeSummary(edges)).toEqual(
      expect.arrayContaining([
        { from: MALWARE, to: MISSING_IDENTITY, label: "created-by" },
        { from: MISSING_INDICATOR, to: MALWARE, label: "indicates" },
      ])
    );
    expect(edges.length).toBe(2);
    expect(warn).not.toHaveBeenCalled();
  });

  it("deduplicates repeated references to the same missing object", () => {
    const [nodes, edges] = stix2viz.makeGraphData(
      {
        type: "bundle",
        id: BUNDLE,
        objects: [
          {
            type: "malware",
            id: MALWARE,
            name: "First",
            created_by_ref: MISSING_IDENTITY,
          },
          {
            type: "malware",
            id: IDENTITY_2,
            name: "Second",
            created_by_ref: MISSING_IDENTITY,
          },
        ],
      },
      { showDanglingRefs: true }
    );

    // Two malware nodes + exactly one ghost for the missing identity.
    expect(nodes.length).toBe(3);
    expect(edges.length).toBe(2);
  });

  it("still skips relationships whose endpoint ids are unusable", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const relationshipRefId =
      "relationship--00000000-0000-4000-8000-000000000000";

    const [nodes, edges] = stix2viz.makeGraphData(
      {
        type: "bundle",
        id: BUNDLE,
        objects: [
          { type: "malware", id: MALWARE, name: "Lonely" },
          {
            type: "relationship",
            id: RELATIONSHIP,
            relationship_type: "weird",
            source_ref: relationshipRefId,
            target_ref: MALWARE,
          },
        ],
      },
      { showDanglingRefs: true }
    );

    expect(nodes.length).toBe(1);
    expect(edges.length).toBe(0);
    expect(warn).toHaveBeenCalled();
  });

  it("renders ghost nodes for missing embedded references such as markings", () => {
    const markingRefId =
      "marking-definition--aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";

    const [, edges] = stix2viz.makeGraphData(
      {
        type: "bundle",
        id: BUNDLE,
        objects: [
          {
            type: "malware",
            id: MALWARE,
            name: "Marked",
            object_marking_refs: [markingRefId],
          },
        ],
      },
      { showDanglingRefs: true }
    );

    expect(edgeSummary(edges)).toEqual([
      { from: markingRefId, to: MALWARE, label: "applies-to" },
    ]);
  });
});
