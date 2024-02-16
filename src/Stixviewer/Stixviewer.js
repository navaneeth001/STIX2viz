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
  // Assume you have the STIX data
  console.log("incoming stixJson data", stixJson);
  const stixData = stixJson;

  const graphContainer = useRef(null);
  const customConfig = {};
  function stixOtherContentToDOMNodes(otherContent) {
    let nodes = [];

    let asText;
    if (otherContent === null) asText = "null";
    else if (otherContent === undefined)
      asText = "undefined"; // also just in case??
    else asText = otherContent.toString();

    let spanWrapper = document.createElement("span");
    spanWrapper.append(asText);
    spanWrapper.className = "selected-object-nontext-value";
    nodes.push(spanWrapper);

    return nodes;
  }
  function populateLegend(iconURLMap, defaultIconURL) {
    let tbody, tr, td;
    let colIdx = 0;
    let table = document.getElementById("legend-content");

    // Reset table content if necessary.
    if (table.tBodies.length === 0) tbody = table.createTBody();
    else tbody = table.tBodies[0];

    tbody.replaceChildren();

    tr = tbody.insertRow();

    for (let [stixType, iconURL] of iconURLMap) {
      let img = document.createElement("img");

      img.onerror = function () {
        // set the node's icon to the default if this image could not
        // load
        this.src = defaultIconURL;
        // our default svg is enormous... shrink it down!
        this.width = "37";
        this.height = "37";
      };
      img.src = iconURL;

      if (colIdx > 1) {
        colIdx = 0;
        tr = tbody.insertRow();
      }

      td = tr.insertCell();
      ++colIdx;

      td.append(img);
      td.append(
        stixType.charAt(0).toUpperCase() + stixType.substr(1).toLowerCase()
      );
    }
  }
  function stixStringContentToDOMNodes(
    stringContent,
    edgeDataSet,
    stixIdToObject,
    isRef = false
  ) {
    let nodes = [];

    let spanWrapper = document.createElement("span");
    spanWrapper.append(stringContent);

    if (isRef) {
      let referentObj = stixIdToObject.get(stringContent);
      if (referentObj) {
        spanWrapper.className = "selected-object-text-value-ref";
        spanWrapper.addEventListener("click", (e) => {
          e.stopPropagation();
          view.selectNode(referentObj.get("id"));
          populateSelected(referentObj, edgeDataSet, stixIdToObject);
        });
      } else spanWrapper.className = "selected-object-text-value-ref-dangling";
    } else spanWrapper.className = "selected-object-text-value";

    nodes.push(spanWrapper);

    return nodes;
  }
  function stixArrayContentToDOMNodes(
    arrayContent,
    edgeDataSet,
    stixIdToObject,
    isRefs = false
  ) {
    let nodes = [];

    let ol = document.createElement("ol");
    ol.className = "selected-object-list";

    for (let elt of arrayContent) {
      let contentNodes;
      if (isRefs)
        contentNodes = stixStringContentToDOMNodes(
          elt,
          edgeDataSet,
          stixIdToObject,
          /*isRef=*/ true
        );
      else
        contentNodes = stixContentToDOMNodes(elt, edgeDataSet, stixIdToObject);

      let li = document.createElement("li");
      li.append(...contentNodes);
      ol.append(li);
    }

    nodes.push(document.createTextNode("["));
    nodes.push(ol);
    nodes.push(document.createTextNode("]"));

    return nodes;
  }
  function stixContentToDOMNodes(stixContent, edgeDataSet, stixIdToObject) {
    let nodes;

    if (stixContent instanceof Map)
      nodes = stixObjectContentToDOMNodes(
        stixContent,
        edgeDataSet,
        stixIdToObject
      );
    else if (Array.isArray(stixContent))
      nodes = stixArrayContentToDOMNodes(
        stixContent,
        edgeDataSet,
        stixIdToObject
      );
    else if (typeof stixContent === "string" || stixContent instanceof String)
      nodes = stixStringContentToDOMNodes(
        stixContent,
        edgeDataSet,
        stixIdToObject
      );
    else nodes = stixOtherContentToDOMNodes(stixContent);

    return nodes;
  }

  function stixObjectContentToDOMNodes(
    objectContent,
    edgeDataSet,
    stixIdToObject,
    topLevel = false
  ) {
    let nodes = [];

    if (!topLevel) nodes.push(document.createTextNode("{"));

    for (let [propName, propValue] of objectContent) {
      let propNameSpan = document.createElement("span");
      propNameSpan.className = "selected-object-prop-name";
      propNameSpan.append(propName + ":");

      let contentNodes;
      if (propName.endsWith("_ref"))
        contentNodes = stixStringContentToDOMNodes(
          propValue,
          edgeDataSet,
          stixIdToObject,
          /*isRef=*/ true
        );
      else if (propName.endsWith("_refs"))
        contentNodes = stixArrayContentToDOMNodes(
          propValue,
          edgeDataSet,
          stixIdToObject,
          /*isRefs=*/ true
        );
      else
        contentNodes = stixContentToDOMNodes(
          propValue,
          edgeDataSet,
          stixIdToObject
        );

      let propDiv = document.createElement("div");
      propDiv.append(propNameSpan);
      propDiv.append(...contentNodes);

      if (!topLevel) propDiv.className = "selected-object-object-content";

      nodes.push(propDiv);
    }

    if (!topLevel) nodes.push(document.createTextNode("}"));

    return nodes;
  }
  function populateConnections(stixObject, edgeDataSet, stixIdToObject) {
    let objId = stixObject.get("id");

    let edges = edgeDataSet.get({
      filter: (item) => item.from === objId || item.to === objId,
    });

    let eltConnIncoming = graphContainer.current.querySelector(
      "#connections-incoming"
    );
    let eltConnOutgoing = graphContainer.current.querySelector(
      "#connections-outcoming"
    );

    eltConnIncoming?.replaceChildren();
    eltConnOutgoing?.replaceChildren();

    let listIn = document.createElement("ol");
    let listOut = document.createElement("ol");

    eltConnIncoming?.append(listIn);
    eltConnOutgoing?.append(listOut);

    for (let edge of edges) {
      let targetList;
      let summaryNode = document.createElement("summary");
      let otherEndSpan = document.createElement("span");
      let otherEndObj;

      if (objId === edge.from) {
        otherEndObj = stixIdToObject.get(edge.to);
        otherEndSpan.append(otherEndObj.get("type"));

        summaryNode.append(edge.label + " ");
        summaryNode.append(otherEndSpan);

        targetList = listOut;
      } else {
        otherEndObj = stixIdToObject.get(edge.from);
        otherEndSpan.append(otherEndObj.get("type"));

        summaryNode.append(otherEndSpan);
        summaryNode.append(" " + edge.label);

        targetList = listIn;
      }

      otherEndSpan.className = "selected-object-text-value-ref";
      otherEndSpan.addEventListener("click", (e) => {
        view.selectNode(otherEndObj.get("id"));
        populateSelected(otherEndObj, edgeDataSet, stixIdToObject);
      });

      let li = document.createElement("li");
      let detailsNode = document.createElement("details");

      targetList.append(li);
      li.append(detailsNode);
      detailsNode.append(summaryNode);

      let objRenderNodes = stixObjectContentToDOMNodes(
        otherEndObj,
        edgeDataSet,
        stixIdToObject,
        /*topLevel=*/ true
      );
      detailsNode.append(...objRenderNodes);
    }
  }
  function populateSelected(stixObject, edgeDataSet, stixIdToObject) {
    // Remove old values from HTML
    let selectedContainer = graphContainer.current.querySelector("#selection");
    selectedContainer.replaceChildren();

    let contentNodes = stixObjectContentToDOMNodes(
      stixObject,
      edgeDataSet,
      stixIdToObject,
      /*topLevel=*/ true
    );
    selectedContainer.append(...contentNodes);
  }
  function graphViewClickHandler(event, edgeDataSet, stixIdToObject) {
    if (event.nodes.length > 0) {
    }
  }
  useEffect(() => {
    if (graphContainer.current) {
      const graphWrapper =
        graphContainer.current.querySelector("#graphContainer");
      const [nodeDataList, edgeDataSet, stixIdToObject] =
        stix2viz.makeGraphData(stixData);
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
  return (
    <div ref={graphContainer}>
      <div style={{ display: "flex", flexDirection: "row", ...wrapStyle }}>
        <div
          id="graphContainer"
          style={{
            width: "1000px",
            height: "600px",
            border: "1px solid #ccc",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "10px",
            ...graphStyle,
          }}
        />
      </div>
    </div>
  );
};
Stixviewer.propTypes = {
  stixJson: PropTypes.object,
  graphStyle: PropTypes.object,
  wrapStyle: PropTypes.object,
};
export default Stixviewer;
