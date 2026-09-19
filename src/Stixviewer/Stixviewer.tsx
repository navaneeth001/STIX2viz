import React, { useRef, useEffect, CSSProperties } from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

export interface StixviewerProps {
  stixJson: any;
  graphStyle?: CSSProperties;
  wrapStyle?: CSSProperties;
  onNodeclick?: (nodeId: string) => void;
}

const Stixviewer: React.FC<StixviewerProps> = ({
  stixJson = null,
  graphStyle,
  wrapStyle,
  onNodeclick = () => {},
}) => {
  const graphContainer = useRef<HTMLDivElement>(null);
  // Instance state is kept per component instance (it used to be module level)
  // so multiple viewers never clobber each other and each view can be torn down.
  const graphView = useRef<any>(null);
  // Keeps the latest callback available to the listener registered at mount,
  // without re-creating the whole graph network on every render.
  const onNodeclickRef = useRef(onNodeclick);

  useEffect(() => {
    onNodeclickRef.current = onNodeclick;
  }, [onNodeclick]);

  function graphViewClickHandler(event: any) {
    if (event.nodes.length > 0) {
      const clickedNodeId = event.nodes[0];
      const callback = onNodeclickRef.current;
      if (callback) callback(clickedNodeId);
    }
  }

  useEffect(() => {
    if (graphContainer.current && stixJson) {
      try {
        const graphWrapper =
          graphContainer.current.querySelector<HTMLElement>("#graphContainer");
        if (graphWrapper) {
          const customConfig: { iconDir?: string } = { iconDir: "." };
          const [nodeDataList, edgeDataSet, stixIdToObject] =
            stix2viz.makeGraphData(stixJson);
          graphView.current = stix2viz.makeGraphView(
            graphWrapper,
            nodeDataList,
            edgeDataSet,
            stixIdToObject,
            new Map(Object.entries(customConfig))
          );
          graphView.current.on("click", (e: any) => graphViewClickHandler(e));
        }
      } catch (error) {
        console.error("Failed to create graph view:", error);
      }
    }

    return () => {
      const view = graphView.current;
      graphView.current = null;
      if (view) {
        try {
          view.destroy();
        } catch (error) {
          console.error("Failed to destroy graph view:", error);
        }
      }
    };
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
  onNodeclick: PropTypes.func,
};

export default Stixviewer;
