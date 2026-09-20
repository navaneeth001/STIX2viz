import * as vis from "vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data";

let embeddedRelationships: Map<string | null, [string, string, boolean][]> =
  new Map([
    [
      null,
      [
        ["created_by_ref", "created-by", true],
        ["object_marking_refs", "applies-to", false],
      ],
    ],
    ["directory", [["contains_refs", "contains", true]]],
    ["domain-name", [["resolves_to_refs", "resolves-to", true]]],
    ["email-addr", [["belongs_to_ref", "belongs-to", true]]],
    [
      "email-message",
      [
        ["from_ref", "from", true],
        ["sender_ref", "sent-by", true],
        ["to_refs", "to", true],
        ["cc_refs", "cc", true],
        ["bcc_refs", "bcc", true],
        ["raw_email_ref", "raw-binary-of", false],
      ],
    ],
    [
      "file",
      [
        ["contains_refs", "contains", true],
        ["content_ref", "contents-of", false],
        ["parent_directory_ref", "parent-of", false],
      ],
    ],
    ["grouping", [["object_refs", "refers-to", true]]],
    ["ipv4-addr", [["resolves_to_refs", "resolves-to", true]]],
    ["ipv6-addr", [["resolves_to_refs", "resolves-to", true]]],
    ["language-content", [["object_ref", "applies-to", true]]],
    ["malware", [["sample_refs", "sample-of", false]]],
    ["malware-analysis", [["analysis_sco_refs", "captured-by", false]]],
    [
      "network-traffic",
      [
        ["src_ref", "source-of", false],
        ["dst_ref", "destination-of", false],
        ["src_payload_ref", "source-payload-of", false],
        ["dst_payload_ref", "destination-payload-of", false],
        ["encapsulates_refs", "encapsulated-by", false],
        ["encapsulated_by_ref", "encapsulated-by", true],
      ],
    ],
    ["note", [["object_refs", "refers-to", true]]],
    ["observed-data", [["object_refs", "refers-to", true]]],
    ["opinion", [["object_refs", "refers-to", true]]],
    [
      "process",
      [
        ["opened_connection_refs", "opened-by", false],
        ["creator_user_ref", "created-by", true],
        ["image_ref", "image-of", false],
        ["parent_ref", "parent-of", false],
      ],
    ],
    ["report", [["object_refs", "refers-to", true]]],
    [
      "sighting",
      [
        ["sighting_of_ref", "sighting-of", true],
        ["observed_data_refs", "observed", true],
        ["where_sighted_refs", "saw", false],
      ],
    ],
    ["windows-registry-key", [["creator_user_ref", "created-by", true]]],
  ]);

type ValueOp = (value: any, operand: any) => boolean;

let valueOps = new Map<string, ValueOp>([
  ["$eq", (a, b) => a === b],
  ["$gt", (a, b) => a > b],
  ["$gte", (a, b) => a >= b],
  ["$in", (val, arr) => arr.includes(val)],
  ["$lt", (a, b) => a < b],
  ["$lte", (a, b) => a <= b],
  ["$ne", (a, b) => a !== b],
  ["$nin", (val, arr) => !arr.includes(val)],
]);

class STIXContentError extends Error {
  constructor(message: string | null = null, opts: any = null) {
    if (!message)
      message =
        "Invalid STIX content: expected a non-empty mapping" +
        " (object or Map) which is a single STIX object or bundle with" +
        " at least one object, or a non-empty array of objects.";

    super(message, opts);
  }
}

class InvalidSTIXObjectError extends STIXContentError {
  stixObject: any;
  constructor(stixObject: any, opts: any = null) {
    let message =
      "Invalid STIX object: requires at least type and id" + " properties";
    let stixId = stixObject.get("id");
    if (stixId) message += ": " + stixId;

    super(message, opts);

    this.stixObject = stixObject;
  }
}

class InvalidConfigError extends Error {
  constructor(message: string | null = null, opts: any = null) {
    if (!message)
      message =
        "Invalid configuration value: must be a JSON or" +
        " Javascript object.";

    super(message, opts);
  }
}

class InvalidMatchOperator extends Error {
  constructor(op: string | null = null, opts: any = null) {
    let message = "In match criteria, invalid operator: " + op;

    super(message, opts);
  }
}

function isPlainObject(value: any): value is object {
  let result = false;

  if (value) result = Object.getPrototypeOf(value) === Object.prototype;

  return result;
}

function mapReviver(key: string, value: any): any {
  if (isPlainObject(value)) return new Map(Object.entries(value));
  else return value;
}

function recursiveObjectToMap(obj: any): any {
  let newValue;

  if (isPlainObject(obj)) {
    let map = new Map();
    for (let [key, value] of Object.entries(obj))
      map.set(key, recursiveObjectToMap(value));

    newValue = map;
  } else if (Array.isArray(obj)) newValue = obj.map(recursiveObjectToMap);
  else newValue = obj;

  return newValue;
}

function parseToMap(jsonContent: any): any {
  let newValue;

  if (typeof jsonContent === "string" || jsonContent instanceof String)
    newValue = JSON.parse(jsonContent as string, mapReviver);
  else newValue = recursiveObjectToMap(jsonContent);

  return newValue;
}

function mongoishMatchProperty(
  object: any,
  propPath: string,
  criteria: any
): boolean {
  let logicalCriteria: Map<string, any> = new Map();
  let valueCriteria: Map<string, any> = new Map();
  let presenceCriteria: Map<string, any> = new Map();

  if (criteria instanceof Map) {
    for (let [critPropName, critPropValue] of criteria) {
      if (["$and", "$or", "$not"].includes(critPropName))
        logicalCriteria.set(critPropName, critPropValue);
      else if (valueOps.has(critPropName))
        valueCriteria.set(critPropName, critPropValue);
      else if (critPropName === "$exists")
        presenceCriteria.set(critPropName, critPropValue);
      else if (critPropName.startsWith("$"))
        throw new InvalidMatchOperator(critPropName);
      else valueCriteria.set(critPropName, critPropValue);
    }
  } else valueCriteria.set("$eq", criteria);

  let result = true;

  for (let [logicalOp, subCriteria] of logicalCriteria) {
    if (logicalOp === "$or") {
      let orResult = false;
      for (let subCriterion of subCriteria)
        if (mongoishMatchProperty(object, propPath, subCriterion)) {
          orResult = true;
          break;
        }

      result &&= orResult;
    } else if (logicalOp === "$and") {
      let andResult = true;
      for (let subCriterion of subCriteria)
        if (!mongoishMatchProperty(object, propPath, subCriterion)) {
          andResult = false;
          break;
        }

      result &&= andResult;
    } // logicalOp === "$not"
    else result &&= !mongoishMatchProperty(object, propPath, subCriteria);

    if (!result) break;
  }

  let anyValuesFound = false;
  if (result) {
    if (valueCriteria.size > 0) result = false;

    for (let propValue of getValuesAtPath(object, propPath)) {
      anyValuesFound = true;
      if (result) break;

      result = mongoishMatchObject(propValue, valueCriteria);

      if (result) break;
    }
  }

  if (result) {
    if (presenceCriteria.has("$exists")) {
      let exists = presenceCriteria.get("$exists"); // true or false
      result &&= exists === anyValuesFound;
    }
  }

  return result;
}

function mongoishMatchObject(value: any, criteria: any): boolean {
  let result = true;

  // Separate various types of criteria.
  let logicalCriteria: Map<string, any> = new Map();
  let valueCriteria: Map<string, any> = new Map();
  let propValueCriteria: Map<string, any> = new Map();

  if (criteria instanceof Map) {
    for (let [critKey, critValue] of criteria) {
      if (["$and", "$or", "$not"].includes(critKey))
        logicalCriteria.set(critKey, critValue);
      else if (valueOps.has(critKey)) valueCriteria.set(critKey, critValue);
      else if (critKey.startsWith("$")) throw new InvalidMatchOperator(critKey);
      else propValueCriteria.set(critKey, critValue);
    }
  } else if (value instanceof Map) result = false;
  else valueCriteria.set("$eq", criteria);

  if (result) {
    for (let [logicalOp, subCriteria] of logicalCriteria) {
      if (logicalOp === "$or") {
        let orResult = false;
        for (let subCriterion of subCriteria)
          if (mongoishMatchObject(value, subCriterion)) {
            orResult = true;
            break;
          }

        result &&= orResult;
      } else if (logicalOp === "$and") {
        let andResult = true;
        for (let subCriterion of subCriteria)
          if (!mongoishMatchObject(value, subCriterion)) {
            andResult = false;
            break;
          }

        result &&= andResult;
      } // logicalOp === "$not"
      else result &&= !mongoishMatchObject(value, subCriteria);

      if (!result) break;
    }
  }

  if (result) {
    for (let [op, operand] of valueCriteria) {
      // `valueOps` is the only source of keys in `valueCriteria`, so this
      // lookup always resolves. The cast is compile-time only.
      let opFunc = valueOps.get(op) as ValueOp;
      result &&= opFunc(value, operand);

      if (!result) break;
    }
  }

  if (result) {
    for (let [propPath, criteria] of propValueCriteria) {
      if (value instanceof Map)
        result &&= mongoishMatchProperty(value, propPath, criteria);
      else result = false;

      if (!result) break;
    }
  }

  return result;
}

function isValidStixObject(stixObject: Map<string, any>): boolean {
  return stixObject.has("id") && stixObject.has("type");
}

function isStixTypeValidForNode(stixType: string): boolean {
  return stixType !== "relationship";
}

function isStixIdValidForNode(stixId: string): boolean {
  let typeLength = stixId.length - 38;
  let stixType = stixId.substring(0, typeLength);

  return isStixTypeValidForNode(stixType);
}

function uniquefyName(
  baseName: string,
  nameCounts: Map<string, number>
): string {
  let uniqueName;
  let nameCount = nameCounts.get(baseName) || 0;

  ++nameCount;
  nameCounts.set(baseName, nameCount);

  if (nameCount === 1) uniqueName = baseName;
  else uniqueName = baseName + "(" + nameCount.toString() + ")";

  return uniqueName;
}

function nameForStixObject(
  stixObject: Map<string, any>,
  stixIdToName: Map<string, string>,
  nameCounts: Map<string, number>,
  config: Map<string, any> | null = null
): string {
  let stixId = stixObject.get("id");
  let stixType = stixObject.get("type");

  let name = stixIdToName.get(stixId);
  if (!name) {
    let baseName;
    let userLabels;

    if (config) {
      userLabels = config.get("userLabels");
      if (userLabels) baseName = userLabels.get(stixId);

      if (!baseName) {
        let typeConfig = config.get(stixType);
        if (typeConfig) {
          let labelPropName = typeConfig.get("displayProperty");
          if (labelPropName) baseName = stixObject.get(labelPropName);
        }
      }
    }

    if (!baseName) baseName = stixObject.get("name");
    if (!baseName) baseName = stixObject.get("value");
    if (!baseName) baseName = stixObject.get("path");
    if (!baseName) baseName = stixType;

    if (baseName.length > 40) baseName = baseName.substr(0, 40) + "...";

    name = uniquefyName(baseName, nameCounts);
    stixIdToName.set(stixId, name);
  }

  return name;
}

function stixTypeToIconURL(
  stixType: string,
  iconPath: string | null,
  iconFileName: string | null
): string {
  let iconUrl;

  if (!iconFileName)
    iconFileName =
      "stix2_" + stixType.replaceAll("-", "_") + "_icon_tiny_round_v1.png";

  if (iconPath === null || iconPath === undefined) iconUrl = iconFileName;
  else iconUrl = iconPath + "/" + iconFileName;

  return iconUrl;
}

function makeEdgeObject(
  sourceRef: string,
  targetRef: string,
  label: string,
  stixId: string | null = null
): any {
  let edge: any = {
    from: sourceRef,
    to: targetRef,
    label: label,
  };

  if (stixId) edge.id = stixId;

  return edge;
}

function makeNodeObject(name: string, stixObject: Map<string, any>): any {
  let node = {
    id: stixObject.get("id"),
    label: name,
  };

  return node;
}

function getDefaultIconURL(iconPath: string | null = null): string {
  let defaultURL = stixTypeToIconURL("custom_object", iconPath, null);
  defaultURL = defaultURL.replace(".png", ".svg");

  return defaultURL;
}

function makeLegendData(
  stixIdToObject: Map<string, any>,
  config: Map<string, any> | null = null
): [Map<string, string>, string] {
  let iconPath: string | null = null;
  if (config) iconPath = config.get("iconDir");

  let defaultIconURL = getDefaultIconURL(iconPath);

  let stixTypes: Set<string> = new Set();

  if (stixIdToObject)
    for (let object of stixIdToObject.values()) {
      let stixType = object.get("type");
      if (isStixTypeValidForNode(stixType)) stixTypes.add(stixType);
    }

  let iconURLs: Map<string, string> = new Map();
  for (let type of stixTypes) {
    let iconFileName;

    if (config) {
      let typeConfig = config.get(type);
      if (typeConfig) iconFileName = typeConfig.get("displayIcon");
    }

    let iconURL = stixTypeToIconURL(type, iconPath, iconFileName);
    iconURLs.set(type, iconURL);
  }

  return [iconURLs, defaultIconURL];
}

function normalizeConfig(config: any): Map<string, any> {
  try {
    config = parseToMap(config);
  } catch (err) {
    throw new InvalidConfigError(null, { cause: err });
  }

  if (!(config instanceof Map)) throw new InvalidConfigError();

  return config;
}

function normalizeContent(stixContent: any): any[] {
  let stixObjects;

  try {
    stixContent = parseToMap(stixContent);
  } catch (err) {
    throw new STIXContentError(null, { cause: err });
  }

  if (stixContent instanceof Map && stixContent.size > 0) {
    if (stixContent.get("type") === "bundle")
      stixObjects = stixContent.get("objects") || [];
    else stixObjects = [stixContent];
  } else if (Array.isArray(stixContent)) stixObjects = stixContent;
  else throw new STIXContentError();

  if (!Array.isArray(stixObjects) || stixObjects.length <= 0)
    throw new STIXContentError();

  for (let stixObject of stixObjects)
    if (!isValidStixObject(stixObject))
      throw new InvalidSTIXObjectError(stixObject);

  return stixObjects;
}

class STIXContentView {
  #legendData: [Map<string, string>, string];

  constructor(
    stixIdToObject: Map<string, any>,
    config: Map<string, any> | null = null
  ) {
    this.#legendData = makeLegendData(stixIdToObject, config);
  }

  get legendData(): [Map<string, string>, string] {
    return this.#legendData;
  }

  on(...args: any[]) {}

  destroy() {}

  toggleStixType(stixType: string) {}

  selectNode(stixId: string) {}

  focusNode(stixId: string) {}
}

class GraphView extends STIXContentView {
  #nodeDataSet: DataSet<any>;
  #edgeDataSet: DataSet<any>;
  #network: any;
  #groups: any;

  constructor(
    visjs: any,
    domElement: HTMLElement,
    nodeDataSet: DataSet<any>,
    edgeDataSet: DataSet<any>,
    stixIdToObject: Map<string, any>,
    config: Map<string, any> | null = null
  ) {
    if (config !== null) config = normalizeConfig(config);

    super(stixIdToObject, config);

    this.#edgeDataSet = edgeDataSet;

    this.#nodeDataSet = new DataSet();
    nodeDataSet?.forEach((item, id) => {
      this.#nodeDataSet.add({
        ...item,
        // Nodes built by `makeNodesAndEdges` carry their own group (STIX
        // type); the fallback covers nodes constructed by other means.
        group: item.group ?? stixIdToObject.get(id as string)?.get("type"),
      });
    });

    this.#groups = this.#makeGroups();

    let graphData = {
      nodes: this.#nodeDataSet,
      edges: this.#edgeDataSet,
    };

    let graphOpts = {
      groups: this.#groups,
      nodes: {
        color: {
          border: "black",
        },
        font: {
          size: 20,
        },
        borderWidth: 2,
        chosen: {
          node: (values: any, id: any, selected: any, hovering: any) => {
            if (selected) {
              values.shadow = true;
              values.shadowX = values.shadowY = 8;
              values.borderWidth = 4;
            }
          },
        },
      },
      edges: {
        arrows: "to",
        width: 3,
        color: "gray",
        font: {
          size: 20,
        },
      },
      physics: {
        solver: "barnesHut",
        barnesHut: {
          theta: 0.9,
          gravitationalConstant: -3000,
          centralGravity: 0,
          springConstant: 0.01,
          springLength: 400,
        },
        minVelocity: 1,
        stabilization: true,
      },
    };
    this.#network = new visjs.Network(domElement, graphData, graphOpts);
  }

  get graph(): any {
    return this.#network;
  }

  get nodeDataSet(): DataSet<any> {
    return this.#nodeDataSet;
  }

  get edgeDataSet(): DataSet<any> {
    return this.#edgeDataSet;
  }

  /**
   * The resolved vis-network group styles (one per STIX type that has a
   * bundled icon), mapping type -> { shape, image, brokenImage }. Exposed so
   * consumers (e.g. the optional toolbar legend) can render the same icons
   * the graph uses.
   */
  get iconGroups(): any {
    return this.#groups;
  }

  on(...args: any[]) {
    this.graph.on(...args);
  }

  destroy() {
    this.graph.destroy();
  }

  #makeGroups() {
    let [iconURLs, defaultIconURL] = this.legendData;

    let groups: any = {};

    // Icons must be resolved to URL/data-URI strings up front: without
    // `eager: true` the glob yields lazy loader functions, which vis-network's
    // `image` option cannot use. This preserves the behaviour of the previous
    // webpack `require.context(...)` lookup used by 1.x releases.
    const images: Record<string, string> = import.meta.glob(
      "../stix2viz/icons/*.{png,svg}",
      { eager: true, import: "default" }
    );
    for (let [stixType, iconURL] of iconURLs) {
      const imageName = iconURL.substring(iconURL.lastIndexOf("/") + 1);
      const imagePath = `../stix2viz/icons/${imageName}`;
      if (images[imagePath]) {
        groups[stixType] = {
          shape: "circularImage",
          image: images[imagePath],
          brokenImage: defaultIconURL,
        };
      }
    }

    return groups;
  }

  toggleStixType(stixType: string) {
    let nodes = this.nodeDataSet.get({
      filter: (item) => item.group === stixType,
      fields: ["id", "hidden"],
    });

    if (nodes.length === 0) return;

    this.enablePhysics();

    let hiding = !nodes[0].hidden;

    let toggledNodes: any[] = [];
    let toggledEdges: any[] = [];

    let toggledEdgeIds: Set<string> = new Set();

    for (let node of nodes) {
      toggledNodes.push({
        id: node.id,
        hidden: hiding,
        physics: !hiding,
      });

      let edgesForNode = this.edgeDataSet.get({
        filter: (item) =>
          (item.from === node.id || item.to === node.id) &&
          !item.hidden === hiding &&
          !toggledEdgeIds.has(item.id),
        fields: ["id", "from", "to"],
      });

      if (hiding) {
        for (let edge of edgesForNode) {
          toggledEdges.push({
            id: edge.id,
            hidden: true,
            physics: false,
          });
          toggledEdgeIds.add(edge.id);
        }
      } else {
        for (let edge of edgesForNode) {
          let otherEndId;
          if (edge.from === node.id) otherEndId = edge.to;
          else otherEndId = edge.from;

          let otherEndNode = this.nodeDataSet.get(otherEndId, {
            fields: ["group", "hidden"],
          });

          if (!otherEndNode.hidden || otherEndNode.group === stixType) {
            toggledEdges.push({
              id: edge.id,
              hidden: false,
              physics: true,
            });
            toggledEdgeIds.add(edge.id);
          }
        }
      }
    }

    this.nodeDataSet.update(toggledNodes);
    this.edgeDataSet.update(toggledEdges);
  }

  selectNode(stixId: string) {
    this.graph.selectNodes([stixId]);
  }

  focusNode(stixId: string) {
    this.graph.focus(stixId, { scale: 1.2, animation: true });
  }

  enablePhysics() {
    this.#network.setOptions({ physics: true });
  }

  disablePhysics() {
    this.#network.setOptions({ physics: false });
  }
}

function edgeForRelationship(
  stixRel: Map<string, any>,
  stixIdToObject: Map<string, any>,
  showDanglingRefs: boolean = false,
  ghostNodes: any[] = [],
  ghostIds: Set<string> = new Set()
): any | null {
  let sourceRef = stixRel.get("source_ref");
  let targetRef = stixRel.get("target_ref");
  let relType = stixRel.get("relationship_type");

  let sourceMissing = !stixIdToObject.has(sourceRef);
  let targetMissing = !stixIdToObject.has(targetRef);

  if (sourceMissing || targetMissing) {
    if (!showDanglingRefs) {
      console.warn(
        "Skipped relationship %s %s %s: missing endpoint object(s)",
        sourceRef,
        relType,
        targetRef
      );

      return null;
    }

    // Render the relationship anyway, using ghost nodes for the endpoints
    // that are missing from the bundle.
    let endpointsRenderable = true;

    if (sourceMissing) {
      if (isStixIdValidForNode(sourceRef))
        addGhostNode(sourceRef, ghostNodes, ghostIds);
      else endpointsRenderable = false;
    }

    if (targetMissing) {
      if (isStixIdValidForNode(targetRef))
        addGhostNode(targetRef, ghostNodes, ghostIds);
      else endpointsRenderable = false;
    }

    if (!endpointsRenderable) {
      console.warn(
        "Skipped relationship %s %s %s: missing endpoint object(s)",
        sourceRef,
        relType,
        targetRef
      );

      return null;
    }

    return makeEdgeObject(sourceRef, targetRef, relType, stixRel.get("id"));
  }

  if (isStixIdValidForNode(sourceRef) && isStixIdValidForNode(targetRef))
    return makeEdgeObject(sourceRef, targetRef, relType, stixRel.get("id"));

  return null;
}

function* getValuesAtPath(
  stixValue: any,
  propPath: string,
  index: number = -1
): Generator<any> {
  if (Array.isArray(stixValue)) {
    for (let elt of stixValue) yield* getValuesAtPath(elt, propPath, index);
  } else if (stixValue instanceof Map) {
    let nextDotIdx = propPath.indexOf(".", index + 1);
    let pathStep;

    if (nextDotIdx === -1) pathStep = propPath.substring(index + 1);
    else pathStep = propPath.substring(index + 1, nextDotIdx);

    if (pathStep.length > 0) {
      if (stixValue.has(pathStep)) {
        let propValue = stixValue.get(pathStep);

        if (nextDotIdx === -1) {
          if (Array.isArray(propValue)) yield* propValue;
          else yield propValue;
        } else yield* getValuesAtPath(propValue, propPath, nextDotIdx);
      }
    } else if (nextDotIdx !== -1)
      yield* getValuesAtPath(stixValue, propPath, nextDotIdx);
  }
}

function edgesFromPropertyPaths(
  stixObject: Map<string, any>,
  stixIdToObject: Map<string, any>,
  relInfo: [string, string, boolean][],
  showDanglingRefs: boolean = false,
  ghostNodes: any[] = [],
  ghostIds: Set<string> = new Set()
): any[] {
  let sourceId = stixObject.get("id");
  let edges: any[] = [];

  for (let [propPath, edgeLabel, forward] of relInfo) {
    for (let ref of getValuesAtPath(stixObject, propPath)) {
      if (isStixIdValidForNode(ref)) {
        if (stixIdToObject.has(ref)) {
          let edgeSrc, edgeDst;

          if (forward) [edgeSrc, edgeDst] = [sourceId, ref];
          else [edgeSrc, edgeDst] = [ref, sourceId];

          let edge = makeEdgeObject(edgeSrc, edgeDst, edgeLabel);

          edges.push(edge);
        } else if (showDanglingRefs) {
          addGhostNode(ref, ghostNodes, ghostIds);

          let edgeSrc, edgeDst;

          if (forward) [edgeSrc, edgeDst] = [sourceId, ref];
          else [edgeSrc, edgeDst] = [ref, sourceId];

          let edge = makeEdgeObject(edgeSrc, edgeDst, edgeLabel);

          edges.push(edge);
        } else
          console.warn(
            "Skipped embedded relationship %s %s %s: target object" +
              " missing",
            sourceId,
            propPath,
            ref
          );
      }
    }
  }

  return edges;
}

function edgesForEmbeddedRelationships(
  stixObject: Map<string, any>,
  stixIdToObject: Map<string, any>,
  config: Map<string, any> | null = null,
  showDanglingRefs: boolean = false,
  ghostNodes: any[] = [],
  ghostIds: Set<string> = new Set()
): any[] {
  let stixType = stixObject.get("type");

  let typeAgnosticRels = embeddedRelationships.get(null);
  let typeSpecificRels = embeddedRelationships.get(stixType);

  let userTypeAgnosticRels = null;
  let userTypeSpecificRels = null;

  if (config) {
    if (config.has("")) {
      let typeConfig = config.get("");
      if (typeConfig.has("embeddedRelationships"))
        userTypeAgnosticRels = typeConfig.get("embeddedRelationships");
    }

    if (config.has(stixType)) {
      let typeConfig = config.get(stixType);
      if (typeConfig.has("embeddedRelationships"))
        userTypeSpecificRels = typeConfig.get("embeddedRelationships");
    }
  }

  let allRels: [string, string, boolean][] = [];

  if (typeAgnosticRels) allRels.push(...typeAgnosticRels);

  if (typeSpecificRels) allRels.push(...typeSpecificRels);

  if (userTypeAgnosticRels) allRels.push(...userTypeAgnosticRels);

  if (userTypeSpecificRels) allRels.push(...userTypeSpecificRels);

  let edges = edgesFromPropertyPaths(
    stixObject,
    stixIdToObject,
    allRels,
    showDanglingRefs,
    ghostNodes,
    ghostIds
  );

  return edges;
}

/**
 * STIX 2.0 `observed-data` objects embed their captured cyber observables
 * directly in an `objects` dictionary, rather than referencing separate SCO
 * objects via `object_refs` as STIX 2.1 does. This renders each embedded
 * observable as its own node, connected to the observed-data node with a
 * "refers-to" edge (mirroring the 2.1 object_refs behaviour).
 */
function nodesAndEdgesForObservedDataObjects(
  stixObject: Map<string, any>
): [any[], any[]] {
  let nodes: any[] = [];
  let edges: any[] = [];

  let observedId = stixObject.get("id");
  let observedObjects = stixObject.get("objects");

  if (!(observedObjects instanceof Map)) return [nodes, edges];

  for (let [key, sco] of observedObjects) {
    if (!(sco instanceof Map)) continue;

    let scoType = sco.get("type") || "unknown";
    // 2.0 SCOs carry no id of their own, so derive a deterministic one from
    // the observed-data id and the dictionary key.
    let scoId = observedId + ".objects." + key;

    let scoName =
      sco.get("name") || sco.get("value") || sco.get("path") || scoType;
    if (scoName.length > 40) scoName = scoName.substring(0, 40) + "...";

    nodes.push({ id: scoId, label: scoName, group: scoType });
    edges.push(makeEdgeObject(observedId, scoId, "refers-to"));
  }

  return [nodes, edges];
}

/**
 * Builds a placeholder ("ghost") node for a STIX id referenced by the bundle
 * but not present in it, so dangling relationships stay visible instead of
 * being silently dropped. Only used when `showDanglingRefs` is enabled.
 */
function makeGhostNode(refId: string): any {
  // A STIX id is "<type>--<uuid>", so the type is everything except the
  // trailing "--" plus 36-character UUID (38 characters).
  let type = refId.substring(0, refId.length - 38);
  if (type.length === 0) type = "unknown";

  return {
    id: refId,
    label: type,
    group: type,
    dangling: true,
    opacity: 0.35,
    font: { color: "#9ca3af" },
  };
}

/**
 * Adds a ghost node for a dangling reference, unless one already exists for
 * that id. Returns true when the reference can be rendered (ghost created or
 * already present), false when the id is not usable as a node id at all.
 */
function addGhostNode(
  refId: string,
  ghostNodes: any[],
  ghostIds: Set<string>
): boolean {
  if (ghostIds.has(refId)) return true;

  ghostNodes.push(makeGhostNode(refId));
  ghostIds.add(refId);
  return true;
}

function makeNodesAndEdges(
  stixIdToObject: Map<string, any>,
  config: Map<string, any> | null = null
): [any[], any[]] {
  let nodes: any[] = [];
  let edges: any[] = [];
  let nameCounts: Map<string, number> = new Map();

  let stixIdToName: Map<string, string> = new Map();

  let ghostNodes: any[] = [];
  let ghostIds: Set<string> = new Set();

  let showDanglingRefs = false;
  if (config && config.has("showDanglingRefs"))
    showDanglingRefs = config.get("showDanglingRefs") === true;

  for (let object of stixIdToObject.values()) {
    let stixType = object.get("type");

    if (stixType === "relationship") {
      let edge = edgeForRelationship(
        object,
        stixIdToObject,
        showDanglingRefs,
        ghostNodes,
        ghostIds
      );

      if (edge) edges.push(edge);
    } else if (isStixTypeValidForNode(stixType)) {
      let name = nameForStixObject(object, stixIdToName, nameCounts, config);
      let node = makeNodeObject(name, object);
      node.group = stixType;
      nodes.push(node);

      let embeddedRelEdges = edgesForEmbeddedRelationships(
        object,
        stixIdToObject,
        config,
        showDanglingRefs,
        ghostNodes,
        ghostIds
      );

      edges.push(...embeddedRelEdges);

      let [scoNodes, scoEdges] = nodesAndEdgesForObservedDataObjects(object);
      nodes.push(...scoNodes);
      edges.push(...scoEdges);
    }
  }

  nodes.push(...ghostNodes);

  return [nodes, edges];
}

function stabilizedHandler(event: any, view: GraphView) {
  view.disablePhysics();
}

function filterStixObjects(
  stixObjects: any[],
  config: Map<string, any> | null
): any[] {
  if (config && config.has("include")) {
    let filterCriteria = config.get("include");
    stixObjects = stixObjects.filter((obj) =>
      mongoishMatchObject(obj, filterCriteria)
    );
  }

  if (config && config.has("exclude")) {
    let filterCriteria = config.get("exclude");
    stixObjects = stixObjects.filter(
      (obj) => !mongoishMatchObject(obj, filterCriteria)
    );
  }

  return stixObjects;
}

/**
 * Accepted shapes for the graph-builder configuration. `normalizeConfig`
 * converts Maps, plain objects and JSON strings into the internal Map form.
 */
type ConfigInput = Map<string, any> | Record<string, any> | string | null;

function makeGraphData(
  visjs: any,
  stixContent: any,
  config: ConfigInput = null
): [DataSet<any>, DataSet<any>, Map<string, any>] {
  let normalizedConfig: Map<string, any> | null = null;
  if (config !== null) normalizedConfig = normalizeConfig(config);

  let stixObjects = normalizeContent(stixContent);
  stixObjects = filterStixObjects(stixObjects, normalizedConfig);

  let stixIdToObject: Map<string, any> = new Map();

  for (let object of stixObjects) stixIdToObject.set(object.get("id"), object);

  let [nodes, edges] = makeNodesAndEdges(stixIdToObject, normalizedConfig);

  let nodeDataSet = new DataSet(nodes);
  let edgeDataSet = new DataSet(edges);
  return [nodeDataSet, edgeDataSet, stixIdToObject];
}

function makeGraphView(
  visjs: any,
  domElement: HTMLElement,
  nodeDataSet: DataSet<any>,
  edgeDataSet: DataSet<any>,
  stixIdToObject: Map<string, any>,
  config: ConfigInput = null
): GraphView {
  let view = new GraphView(
    visjs,
    domElement,
    nodeDataSet,
    edgeDataSet,
    stixIdToObject,
    config !== null ? (normalizeConfig(config) as Map<string, any>) : null
  );

  view.on("stabilized", (e: any) => stabilizedHandler(e, view));

  return view;
}

function makeModule(visjs: any) {
  let module = {
    makeGraphData: (stixContent: any, config: ConfigInput = null) =>
      makeGraphData(visjs, stixContent, config),
    makeGraphView: (
      domElement: HTMLElement,
      nodeDataSet: DataSet<any>,
      edgeDataSet: DataSet<any>,
      stixIdToObject: Map<string, any>,
      config: ConfigInput = null
    ) =>
      makeGraphView(
        visjs,
        domElement,
        nodeDataSet,
        edgeDataSet,
        stixIdToObject,
        config
      ),
  };

  return module;
}

export default makeModule(vis);
