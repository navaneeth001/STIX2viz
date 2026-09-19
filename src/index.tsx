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
}

/**
 * Public entry point of the `stix2vis` package.
 *
 * This renders exactly the same DOM as previous releases (an outer `div.App`
 * wrapping the viewer), so existing applications keep working unchanged.
 *
 * Note: only a default export exists at runtime. That keeps the UMD/CDN global
 * (`window.stix2vis`) equal to the component itself, exactly as in 1.x.
 */
const StixViewerView: React.FC<StixViewerViewProps> = ({
  stixJson,
  graphStyle,
  wrapStyle,
  onNodeclick,
}) => (
  <div className="App">
    <Stixviewer
      stixJson={stixJson}
      graphStyle={graphStyle}
      wrapStyle={wrapStyle}
      onNodeclick={onNodeclick}
    />
  </div>
);

StixViewerView.propTypes = {
  stixJson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object,
  onNodeclick: PropTypes.func,
};

export default StixViewerView;
