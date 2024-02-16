import React, { useRef, useEffect } from "react";
import stix2viz from "../stix2viz/stix2viz/stix2viz";
import PropTypes from "prop-types";

let graphView = null;
let view = null;

const TestJson = {
  type: "bundle",
  id: "bundle--63fe3b22-0201-47cf-85d0-97c02164528d",
  objects: [
    {
      type: "identity",
      spec_version: "2.1",
      id: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2016-08-08T15:50:10.983Z",
      modified: "2016-08-08T15:50:10.983Z",
      name: "Sample Data",
      identity_class: "organization",
    },
    {
      type: "malware",
      spec_version: "2.1",
      id: "malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2017-01-27T13:49:53.997Z",
      modified: "2017-01-27T13:49:53.997Z",
      is_family: true,
      description: "variant",
      malware_types: ["remote-access-trojan"],
      name: "Sample Data",
    },
    {
      type: "indicator",
      spec_version: "2.1",
      pattern_type: "stix",
      id: "indicator--53fe3b22-0201-47cf-85d0-97c02164528d",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2014-05-08T09:00:00.000Z",
      modified: "2014-05-08T09:00:00.000Z",
      indicator_types: ["malicious-activity"],
      name: "Sample Data",
      description: "Test description.",
      pattern: "[ipv4-addr:value = '10.0.0.0']",
      valid_from: "2014-05-08T09:00:00.000000Z",
    },
    {
      type: "indicator",
      spec_version: "2.1",
      pattern_type: "stix",
      id: "indicator--a932fcc6-e032-476c-826f-cb970a5a1ade",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2017-01-27T13:49:53.997Z",
      indicator_types: ["malicious-activity"],
      modified: "2017-01-27T13:49:53.997Z",
      name: "Sample data",
      description: "Test description.",
      pattern:
        "[file:hashes.'SHA-256' = 'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c']",
      valid_from: "2014-05-08T09:00:00.000000Z",
    },
    {
      type: "course-of-action",
      spec_version: "2.1",
      id: "course-of-action--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2016-04-06T20:03:48.000Z",
      modified: "2016-04-06T20:03:48.000Z",
      name: "Sample data",
      description:
        "This is how to add a filter rule to block inbound access to TCP port 80 to the existing UDP 1434 filter ...",
    },
    {
      type: "relationship",
      spec_version: "2.1",
      id: "relationship--44298a74-ba52-4f0c-87a3-1824e67d7fad",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2016-04-06T20:06:37.000Z",
      modified: "2016-04-06T20:06:37.000Z",
      source_ref: "course-of-action--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
      target_ref: "malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111",
      relationship_type: "mitigates",
    },
    {
      type: "relationship",
      spec_version: "2.1",
      id: "relationship--2f9a9aa9-108a-4333-83e2-4fb25add0463",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2017-01-27T13:49:53.997Z",
      modified: "2017-01-27T13:49:53.997Z",
      relationship_type: "indicates",
      source_ref: "indicator--a932fcc6-e032-476c-826f-cb970a5a1ade",
      target_ref: "malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111",
    },
    {
      type: "relationship",
      spec_version: "2.1",
      id: "relationship--9606dac3-965a-47d3-b270-8b17431ba0e4",
      created_by_ref: "identity--f690c992-8e7d-4b9a-9303-3312616c0220",
      created: "2014-05-08T09:00:00.000Z",
      modified: "2014-05-08T09:00:00.000Z",
      relationship_type: "indicates",
      source_ref: "indicator--53fe3b22-0201-47cf-85d0-97c02164528d",
      target_ref: "malware--fdd60b30-b67c-41e3-b0b9-f01faf20d111",
    },
  ],
};

const Stixviewer = ({ stixJson = TestJson, graphStyle, wrapStyle }) => {
  console.log("incoming stixJson data", stixJson);
  console.log("props from stixviewer", wrapStyle,graphStyle);
  const stixData = stixJson;

  const graphContainer = useRef(null);
  const customConfig = {};

  function graphViewClickHandler(event, edgeDataSet, stixIdToObject) {
    if (event.nodes.length > 0) {
      // Handle node click event if needed
    }
  }

  useEffect(() => {
    if (graphContainer.current) {
      const graphWrapper = graphContainer.current.querySelector("#graphContainer");
      const [nodeDataList, edgeDataSet, stixIdToObject] = stix2viz.makeGraphData(stixData);
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
    }
  }, []);

  return React.createElement(
    "div",
    { ref: graphContainer },
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          ...wrapStyle
        }
      },
      React.createElement("div", {
        id: "graphContainer",
        style: {
          width: "1000px",
          height: "600px",
          border: "1px solid #ccc",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          padding: "10px",
          ...graphStyle
        }
      })
    )
  );
};

Stixviewer.propTypes = {
  stixJson: PropTypes.object,
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object
};
export default Stixviewer;
