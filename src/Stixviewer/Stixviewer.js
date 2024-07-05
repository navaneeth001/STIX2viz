import React, { useRef, useEffect } from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

let graphView = null;

const Stixviewer = ({
  stixJson = null,
  graphStyle,
  wrapStyle,
  onNodeclick = () => {},
}) => {
  const graphContainer = useRef(null);
  const customConfig = {};

  function graphViewClickHandler(event, edgeDataSet, stixIdToObject) {
    if (event.nodes.length > 0) {
      // Handle node click event if needed
      if (onNodeclick) onNodeclick();
    }
  }

  useEffect(() => {
    if (graphContainer.current && stixJson) {
      try {
        const graphWrapper =
          graphContainer.current.querySelector("#graphContainer");
        const [nodeDataList, edgeDataSet, stixIdToObject] =
          stix2viz.makeGraphData(stixJson);
        customConfig.iconDir = ".";
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
      } catch (error) {
        console.error("Failed to create graph view:", error);
        // Optionally, you can display a user-friendly message in the UI
      }
    }
  }, [stixJson]);

  return React.createElement(
    "div",
    { ref: graphContainer },
    React.createElement(
      "div",
      {
        style: {
          ...wrapStyle,
        },
      },
      React.createElement("div", {
        id: "graphContainer",
        style: {
          width: 600,
          height: 600,
          ...graphStyle,
        },
      })
    )
  );
};

Stixviewer.propTypes = {
  stixJson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object,
  onNodeClick: PropTypes.func,
};
export default Stixviewer;
