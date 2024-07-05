import React from "react";
import PropTypes from "prop-types";
import Stixviewer from "./Stixviewer/Stixviewer";

/**
 * @typedef {Object} StixviewerProps
 * @property {Object} stixJson - The STIX 2.1 JSON object to visualize.
 * @property {React.CSSProperties} [graphStyle] - CSS properties for the graph.
 * @property {React.CSSProperties} [wrapStyle] - CSS properties for the wrapper.
 * @property {function} [onNodeClick] - Callback function when a node is clicked.
 */

/**
 * A component to visualize STIX 2.1 JSON objects.
 * @param {StixviewerProps} props
 */

function StixViewerView(props) {
  const { stixJson, graphStyle, wrapStyle, onNodeclick } = props;
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(Stixviewer, {
      stixJson: stixJson,
      graphStyle: graphStyle,
      wrapStyle: wrapStyle,
      onNodeclick: onNodeclick,
    })
  );
}

StixViewerView.propTypes = {
  stixJson: PropTypes.object.isRequired,
  graphStyle: React.CSSProperties,
  wrapStyle: React.CSSProperties,
  onNodeclick: PropTypes.func,
};

export default StixViewerView;
