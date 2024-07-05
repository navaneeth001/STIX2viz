import React, { useRef, useEffect, useMemo } from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

let graphView = null;

const Stixviewer = ({ stixJson = [], graphStyle, wrapStyle, onNodeClick }) => {
  const graphContainer = useRef(null);
  const customConfig = useMemo(() => ({ iconDir: "." }), []);

  function graphViewClickHandler(event, edgeDataSet, stixIdToObject) {
    if (event.nodes.length > 0) {
      // Handle node click event if needed
    }
  }

  useEffect(() => {
    if (graphContainer.current) {
      const graphWrapper =
        graphContainer.current.querySelector("#graphContainer");
      const [nodeDataList, edgeDataSet, stixIdToObject] =
        stix2viz.makeGraphData(stixJson);

      graphView = stix2viz.makeGraphView(
        graphWrapper,
        nodeDataList,
        edgeDataSet,
        stixIdToObject,
        customConfig
      );
      graphView.on("click", (e) =>
        graphViewClickHandler(e, edgeDataSet, stixIdToObject)
      );
    }
  }, [stixJson, customConfig]);

  return (
    <div ref={graphContainer}>
      <div style={{ ...wrapStyle }}>
        <div
          id="graphContainer"
          style={{
            width: 600,
            height: 600,
            ...graphStyle,
          }}
        />
      </div>
    </div>
  );
};

Stixviewer.propTypes = {
  stixJson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object,
  onNodeClick: PropTypes.func,
};

Stixviewer.defaultProps = {
  stixJson: [],
  graphStyle: {},
  wrapStyle: {},
};

export default Stixviewer;
