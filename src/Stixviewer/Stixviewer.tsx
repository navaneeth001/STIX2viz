import React, {
  CSSProperties,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

export interface StixviewerProps {
  stixJson: any;
  graphStyle?: CSSProperties;
  wrapStyle?: CSSProperties;
  onNodeclick?: (nodeId: string) => void;
  /**
   * Called when a node is clicked, with the node's STIX id and its full STIX
   * object converted to plain JSON. `stixObject` is null for nodes that are
   * not backed by a STIX object in the bundle (dangling-reference ghosts and
   * derived STIX 2.0 embedded observables).
   */
  onNodeSelect?: (
    nodeId: string,
    stixObject: Record<string, any> | null
  ) => void;
  /**
   * Called when an edge is clicked, with the edge id. The second argument is
   * the backing STIX `relationship` object (as plain JSON) when the edge
   * comes from an explicit relationship, or null for embedded-reference
   * edges.
   */
  onEdgeSelect?: (
    edgeId: string,
    relationship: Record<string, any> | null
  ) => void;
  /**
   * Called on every click with the currently selected node and edge ids
   * (empty arrays mean the click deselected everything).
   */
  onSelectionChange?: (selection: { nodes: string[]; edges: string[] }) => void;
  /** Called when graph creation or a toolbar action fails. */
  onError?: (error: unknown) => void;
  /**
   * Graph-builder configuration: `include`/`exclude` filter criteria,
   * `userLabels`, per-type `displayProperty`/`displayIcon`/
   * `embeddedRelationships`. Accepts a plain JSON-able object (recommended).
   * `iconDir` is managed internally.
   */
  config?: Record<string, any>;
  /** Render placeholder "ghost" nodes for references missing from the bundle. */
  showDanglingRefs?: boolean;
  /** Show a detail panel for the selected node. Off by default. */
  showDetailsPanel?: boolean;
  /** Show the toolbar (search, type legend toggles, exports). Off by default. */
  showToolbar?: boolean;
}

/**
 * Converts Maps (the internal representation of STIX objects) into plain
 * JSON-able objects, recursively.
 */
function mapToPlain(value: any): any {
  if (value instanceof Map) {
    let result: Record<string, any> = {};
    for (let [key, item] of value) result[key] = mapToPlain(item);
    return result;
  }

  if (Array.isArray(value)) return value.map(mapToPlain);

  return value;
}

function triggerDownload(url: string, filename: string) {
  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function buildLegendTypes(view: any): { type: string; icon: string | null }[] {
  try {
    let [iconURLs] = view?.legendData ?? [new Map()];
    let groups = view?.iconGroups ?? {};

    let types: { type: string; icon: string | null }[] = [];
    for (let type of iconURLs.keys())
      types.push({ type, icon: groups[type]?.image ?? null });

    return types;
  } catch {
    return [];
  }
}

interface SelectedNodeInfo {
  id: string;
  stixObject: Record<string, any> | null;
}

const toolbarStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  alignItems: "center",
  padding: 8,
  borderBottom: "1px solid #dcdfe4",
  fontSize: 13,
};

const legendButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  cursor: "pointer",
  fontSize: 12,
  padding: "2px 8px",
  border: "1px solid #dcdfe4",
  borderRadius: 999,
  background: "#fff",
};

const detailsStyle: CSSProperties = {
  padding: 12,
  borderTop: "1px solid #dcdfe4",
  fontSize: 13,
  maxHeight: 280,
  overflow: "auto",
};

const detailsHeadingStyle: CSSProperties = {
  fontWeight: 600,
  marginBottom: 8,
  wordBreak: "break-all",
};

const detailsButtonStyle: CSSProperties = {
  fontSize: 12,
  cursor: "pointer",
};

const detailsPreStyle: CSSProperties = {
  background: "#0f172a",
  color: "#e2e8f0",
  borderRadius: 6,
  padding: 12,
  overflow: "auto",
  fontSize: 12,
  maxHeight: 220,
};

function StixDetailsPanel({ selected }: { selected: SelectedNodeInfo }) {
  const object = selected.stixObject;
  const jsonString = React.useMemo(
    () => (object ? JSON.stringify(object, null, 2) : ""),
    [object]
  );

  function copyJson() {
    try {
      navigator.clipboard?.writeText(jsonString)?.catch(() => {});
    } catch {
      // Clipboard access is unavailable (e.g. insecure context); ignore.
    }
  }

  if (!object)
    return (
      <div className="stix2vis-details" style={detailsStyle}>
        <div style={detailsHeadingStyle}>{selected.id}</div>
        <p style={{ margin: 0, color: "#6b7280" }}>
          This node is referenced by the bundle but has no STIX object behind it
          (a dangling reference or an embedded observable).
        </p>
      </div>
    );

  const fields: [string, any][] = [];
  for (const prop of [
    "type",
    "name",
    "value",
    "path",
    "description",
    "pattern",
    "pattern_type",
    "created",
    "modified",
    "labels",
    "confidence",
    "revoked",
  ]) {
    if (object[prop] !== undefined && object[prop] !== null)
      fields.push([prop, object[prop]]);
  }

  return (
    <div className="stix2vis-details" style={detailsStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <div style={detailsHeadingStyle}>
          {String(object.name ?? object.value ?? object.type ?? selected.id)}
        </div>
        <button type="button" onClick={copyJson} style={detailsButtonStyle}>
          Copy JSON
        </button>
      </div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {fields.map(([prop, value]) => (
            <tr key={prop}>
              <td
                style={{
                  padding: "2px 8px 2px 0",
                  color: "#6b7280",
                  verticalAlign: "top",
                  whiteSpace: "nowrap",
                }}
              >
                {prop}
              </td>
              <td style={{ padding: "2px 0", wordBreak: "break-word" }}>
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <details style={{ marginTop: 8 }}>
        <summary style={{ cursor: "pointer", color: "#6b7280" }}>
          Full JSON
        </summary>
        <pre style={detailsPreStyle}>{jsonString}</pre>
      </details>
    </div>
  );
}

const Stixviewer: React.FC<StixviewerProps> = ({
  stixJson = null,
  graphStyle,
  wrapStyle,
  onNodeclick = () => {},
  onNodeSelect,
  onEdgeSelect,
  onSelectionChange,
  onError,
  config,
  showDanglingRefs,
  showDetailsPanel = false,
  showToolbar = false,
}) => {
  const graphContainer = useRef<HTMLDivElement>(null);
  // Instance state is kept per component instance (it used to be module level)
  // so multiple viewers never clobber each other and each view can be torn down.
  const graphView = useRef<any>(null);
  const stixIdToObject = useRef<Map<string, any> | null>(null);
  // Keeps the latest callbacks available to the listener registered at mount,
  // without re-creating the whole graph network on every render.
  const onNodeclickRef = useRef(onNodeclick);
  const onNodeSelectRef = useRef(onNodeSelect);
  const onEdgeSelectRef = useRef(onEdgeSelect);
  const onSelectionChangeRef = useRef(onSelectionChange);
  const onErrorRef = useRef(onError);
  const showDetailsPanelRef = useRef(showDetailsPanel);
  const showToolbarRef = useRef(showToolbar);

  const [viewerUi, setViewerUi] = useState<{
    selectedNode: SelectedNodeInfo | null;
    legendTypes: { type: string; icon: string | null }[];
    hiddenTypes: Set<string>;
    searchMessage: string | null;
  }>({
    selectedNode: null,
    legendTypes: [],
    hiddenTypes: new Set(),
    searchMessage: null,
  });

  const { selectedNode, legendTypes, hiddenTypes, searchMessage } = viewerUi;
  const [searchQuery, setSearchQuery] = useState("");
  const setSearchMessage = (value: string | null) =>
    setViewerUi((previous) => ({ ...previous, searchMessage: value }));

  // Serialised config: object identity changes should not rebuild the graph,
  // only actual content changes should. Maps serialise as "{}", which is
  // stable across renders.
  const configKey = JSON.stringify(config ?? null);

  useEffect(() => {
    // Sync the latest props into refs; this effect is declared before the
    // graph effect below, so the graph effect always sees fresh values
    // (effects run in declaration order).
    onNodeclickRef.current = onNodeclick;
    onNodeSelectRef.current = onNodeSelect;
    onEdgeSelectRef.current = onEdgeSelect;
    onSelectionChangeRef.current = onSelectionChange;
    onErrorRef.current = onError;
    showDetailsPanelRef.current = showDetailsPanel;
    showToolbarRef.current = showToolbar;
  });

  function buildDataConfig(): Record<string, any> | null {
    if (config == null && showDanglingRefs == null) return null;

    const merged: Record<string, any> = { ...(config ?? {}) };
    if (showDanglingRefs !== undefined)
      merged.showDanglingRefs = showDanglingRefs;

    return merged;
  }

  function graphViewClickHandler(event: any) {
    const nodes: string[] = Array.isArray(event?.nodes) ? event.nodes : [];
    const edges: string[] = Array.isArray(event?.edges) ? event.edges : [];
    const idToObject = stixIdToObject.current;

    // Legacy contract: onNodeclick only fires when a node was clicked.
    if (nodes.length > 0) {
      const clickedNodeId = nodes[0];
      const callback = onNodeclickRef.current;
      if (callback) callback(clickedNodeId);

      const rawObject = idToObject?.get?.(clickedNodeId) ?? null;
      const plainObject = rawObject ? mapToPlain(rawObject) : null;

      onNodeSelectRef.current?.(clickedNodeId, plainObject);

      if (showDetailsPanelRef.current)
        setViewerUi((previous) => ({
          ...previous,
          selectedNode: { id: clickedNodeId, stixObject: plainObject },
        }));
    } else if (showDetailsPanelRef.current) {
      // Clicking empty space clears the detail panel.
      setViewerUi((previous) => ({ ...previous, selectedNode: null }));
    }

    for (let edgeId of edges) {
      const relationship = idToObject?.has?.(edgeId)
        ? mapToPlain(idToObject.get(edgeId))
        : null;
      onEdgeSelectRef.current?.(edgeId, relationship);
    }

    onSelectionChangeRef.current?.({ nodes, edges });
  }

  useEffect(() => {
    if (graphContainer.current && stixJson) {
      try {
        const graphWrapper =
          graphContainer.current.querySelector<HTMLElement>("#graphContainer");
        if (graphWrapper) {
          const dataConfig = buildDataConfig();
          const [nodeDataList, edgeDataSet, stixIdToObj] =
            dataConfig === null
              ? stix2viz.makeGraphData(stixJson)
              : stix2viz.makeGraphData(stixJson, dataConfig);

          stixIdToObject.current = stixIdToObj;

          // `iconDir` is managed internally so the bundled icons resolve;
          // user config values are merged underneath it.
          const viewConfig = new Map(
            Object.entries({ ...(config ?? {}), iconDir: "." })
          );

          graphView.current = stix2viz.makeGraphView(
            graphWrapper,
            nodeDataList,
            edgeDataSet,
            stixIdToObj,
            viewConfig
          );
          graphView.current.on("click", (e: any) => graphViewClickHandler(e));

          // The graph was rebuilt, so the selection/toolbar state that
          // belonged to the previous graph is stale. Resetting it in one
          // batch here is intentional (once per rebuild, not per render).
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setViewerUi({
            selectedNode: null,
            legendTypes:
              showToolbarRef.current && graphView.current
                ? buildLegendTypes(graphView.current)
                : [],
            hiddenTypes: new Set(),
            searchMessage: null,
          });
        }
      } catch (error) {
        console.error("Failed to create graph view:", error);
        onErrorRef.current?.(error);
      }
    }

    return () => {
      const view = graphView.current;
      graphView.current = null;
      stixIdToObject.current = null;
      if (view) {
        try {
          view.destroy();
        } catch (error) {
          console.error("Failed to destroy graph view:", error);
        }
      }
    };
    // configKey covers `config`; the click handler reads props through refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stixJson, configKey, showDanglingRefs]);

  // Keep the toolbar legend in sync when the toolbar is toggled after mount.
  useEffect(() => {
    if (showToolbar && graphView.current)
      setViewerUi((previous) => ({
        ...previous,
        legendTypes: buildLegendTypes(graphView.current),
      }));
  }, [showToolbar]);

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    setSearchMessage(null);

    const view = graphView.current;
    const query = searchQuery.trim();
    if (!view || !query) return;

    let nodes: any[];
    try {
      nodes = view.nodeDataSet?.get?.({ fields: ["id", "label"] }) ?? [];
    } catch (error) {
      console.error("Search failed:", error);
      onErrorRef.current?.(error);
      return;
    }

    const needle = query.toLowerCase();
    const target =
      nodes.find((node: any) => node.id === query) ||
      nodes.find((node: any) =>
        String(node.label).toLowerCase().includes(needle)
      );

    if (!target) {
      setSearchMessage(`No node matching "${query}"`);
      return;
    }

    try {
      view.selectNode?.(target.id);
      view.focusNode?.(target.id);
    } catch (error) {
      console.error("Search failed:", error);
      onErrorRef.current?.(error);
    }
  }

  function toggleType(type: string) {
    try {
      graphView.current?.toggleStixType?.(type);
    } catch (error) {
      console.error("Failed to toggle type:", error);
      onErrorRef.current?.(error);
      return;
    }

    setViewerUi((previous) => {
      const next = new Set(previous.hiddenTypes);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return { ...previous, hiddenTypes: next };
    });
  }

  function exportPng() {
    const view = graphView.current;
    try {
      const canvas = view?.graph?.canvas?.frame?.canvas;
      if (!canvas || typeof canvas.toDataURL !== "function")
        throw new Error(
          "PNG export is not available in this environment (no canvas)."
        );

      triggerDownload(canvas.toDataURL("image/png"), "stix2vis-graph.png");
    } catch (error) {
      console.error("Failed to export PNG:", error);
      onErrorRef.current?.(error);
    }
  }

  function exportJson() {
    const view = graphView.current;
    try {
      const nodes =
        view?.nodeDataSet?.get?.({ filter: (item: any) => !item.hidden }) ?? [];
      const edges =
        view?.edgeDataSet?.get?.({ filter: (item: any) => !item.hidden }) ?? [];

      const data = JSON.stringify({ nodes, edges }, null, 2);

      if (typeof URL.createObjectURL !== "function")
        throw new Error("JSON export is not supported in this environment.");

      const url = URL.createObjectURL(
        new Blob([data], { type: "application/json" })
      );
      triggerDownload(url, "stix2vis-graph.json");
      URL.revokeObjectURL?.(url);
    } catch (error) {
      console.error("Failed to export JSON:", error);
      onErrorRef.current?.(error);
    }
  }

  return (
    <div ref={graphContainer}>
      <div style={wrapStyle}>
        {showToolbar ? (
          <div className="stix2vis-toolbar" style={toolbarStyle}>
            <form
              onSubmit={handleSearchSubmit}
              style={{ display: "flex", gap: 4 }}
            >
              <input
                type="search"
                placeholder="Search id or label…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: 12, padding: "2px 6px" }}
              />
              <button type="submit" style={{ fontSize: 12, cursor: "pointer" }}>
                Go
              </button>
            </form>
            {searchMessage ? (
              <span style={{ color: "#a12b26" }}>{searchMessage}</span>
            ) : null}
            {legendTypes.map(({ type, icon }) => (
              <button
                key={type}
                type="button"
                title={hiddenTypes.has(type) ? `Show ${type}` : `Hide ${type}`}
                onClick={() => toggleType(type)}
                style={{
                  ...legendButtonStyle,
                  opacity: hiddenTypes.has(type) ? 0.4 : 1,
                }}
              >
                {icon ? (
                  <img src={icon} width={14} height={14} alt="" aria-hidden />
                ) : null}
                {type}
              </button>
            ))}
            <span style={{ flex: 1 }} />
            <button
              type="button"
              onClick={exportPng}
              style={{ fontSize: 12, cursor: "pointer" }}
            >
              Export PNG
            </button>
            <button
              type="button"
              onClick={exportJson}
              style={{ fontSize: 12, cursor: "pointer" }}
            >
              Export JSON
            </button>
          </div>
        ) : null}
        <div
          id="graphContainer"
          style={{ width: 600, height: 600, ...graphStyle }}
        />
        {showDetailsPanel && selectedNode ? (
          <StixDetailsPanel selected={selectedNode} />
        ) : null}
      </div>
    </div>
  );
};

Stixviewer.propTypes = {
  stixJson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object,
  onNodeclick: PropTypes.func,
  onNodeSelect: PropTypes.func,
  onEdgeSelect: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onError: PropTypes.func,
  config: PropTypes.object,
  showDanglingRefs: PropTypes.bool,
  showDetailsPanel: PropTypes.bool,
  showToolbar: PropTypes.bool,
};

export default Stixviewer;
