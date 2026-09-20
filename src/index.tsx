import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import Stixviewer from "./Stixviewer/Stixviewer";

/**
 * Props accepted by the default export of `stix2vis`.
 */
export interface StixViewerViewProps {
  /** STIX 2.1 content: a bundle, a single STIX object, or an array of objects. */
  stixJson: any;
  /** CSS properties applied to the graph container (defaults to 600x600). */
  graphStyle?: CSSProperties;
  /** CSS properties applied to the wrapper element around the graph. */
  wrapStyle?: CSSProperties;
  /** Called with the clicked node's STIX id. */
  onNodeclick?: (nodeId: string) => void;
  /**
   * Called when a node is clicked, with the node's STIX id and its full STIX
   * object as plain JSON (null for nodes without a backing STIX object).
   */
  onNodeSelect?: (
    nodeId: string,
    stixObject: Record<string, any> | null
  ) => void;
  /**
   * Called when an edge is clicked, with the edge id and the backing STIX
   * relationship object (plain JSON), or null for embedded-reference edges.
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
   * `embeddedRelationships`. Plain JSON-able object (recommended).
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
 * Public entry point of the `stix2vis` package.
 *
 * This renders exactly the same DOM as previous releases (an outer `div.App`
 * wrapping the viewer), so existing applications keep working unchanged. The
 * optional detail panel and toolbar render additional elements only when
 * their props are enabled.
 *
 * Note: only a default export exists at runtime. That keeps the UMD/CDN global
 * (`window.stix2vis`) equal to the component itself, exactly as in 1.x.
 */
const StixViewerView: React.FC<StixViewerViewProps> = ({
  stixJson,
  graphStyle,
  wrapStyle,
  onNodeclick,
  onNodeSelect,
  onEdgeSelect,
  onSelectionChange,
  onError,
  config,
  showDanglingRefs,
  showDetailsPanel,
  showToolbar,
}) => (
  <div className="App">
    <Stixviewer
      stixJson={stixJson}
      graphStyle={graphStyle}
      wrapStyle={wrapStyle}
      onNodeclick={onNodeclick}
      onNodeSelect={onNodeSelect}
      onEdgeSelect={onEdgeSelect}
      onSelectionChange={onSelectionChange}
      onError={onError}
      config={config}
      showDanglingRefs={showDanglingRefs}
      showDetailsPanel={showDetailsPanel}
      showToolbar={showToolbar}
    />
  </div>
);

StixViewerView.propTypes = {
  stixJson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
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

export default StixViewerView;
