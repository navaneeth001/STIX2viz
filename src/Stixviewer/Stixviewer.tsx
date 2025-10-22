import React, { useRef, useEffect, CSSProperties } from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

interface StixviewerProps {
  stixJson: any;
  graphStyle?: CSSProperties;
  wrapStyle?: CSSProperties;
  onNodeclick?: (nodeId: string) => void;
}

let graphView: any = null;

const Stixviewer: React.FC<StixviewerProps> = ({
  stixJson = null,
  graphStyle,
  wrapStyle,
  onNodeclick = () => {},
}) => {
  const graphContainer = useRef<HTMLDivElement>(null);
  const customConfig: { iconDir?: string } = {};

  function graphViewClickHandler(event: any) {
    if (event.nodes.length > 0) {
      const clickedNodeId = event.nodes[0];
      if (onNodeclick) onNodeclick(clickedNodeId);
    }
  }

  useEffect(() => {
    if (graphContainer.current && stixJson) {
      try {
        const graphWrapper =
          graphContainer.current.querySelector<HTMLElement>("#graphContainer");
        if (graphWrapper) {
          const [nodeDataList, edgeDataSet, stixIdToObject] =
            stix2viz.makeGraphData(stixJson);
          customConfig.iconDir = ".";
          graphView = stix2viz.makeGraphView(
            graphWrapper,
            nodeDataList,
            edgeDataSet,
            stixIdToObject,
            new Map(Object.entries(customConfig))
          );
          graphView.on("click", (e: any) => graphViewClickHandler(e));
        }
      } catch (error) {
        console.error("Failed to create graph view:", error);
      }
    }
  }, [stixJson]);

  return (
    <div ref={graphContainer}>
      <div style={wrapStyle}>
        <div
          id="graphContainer"
          style={{ width: 600, height: 600, ...graphStyle }}
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

export default Stixviewer;
