import React from "react";
import ReactDOM from "react-dom/client";
import Stixviewer from "./Stixviewer/Stixviewer";

const sampleData = {
  type: "bundle",
  id: "bundle--44af6c39-c09b-49c5-9de2-39fc22653b2d",
  objects: [
    {
      type: "malware",
      spec_version: "2.1",
      id: "malware--9c4638ec-f1de-4ddb-abf4-1b760417654e",
      name: "Adversary-in-the-middle",
      description: "This is a custom description for Adversary-in-the-middle.",
      is_family: false,
    },
    {
      type: "indicator",0
      spec_version: "2.1",
      id: "indicator--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
      pattern_type: "stix",
      pattern: "[file:hashes.'MD5' = 'd41d8cd98f00b204e9800998ecf8427e']",
    },
    {
      type: "relationship",
      spec_version: "2.1",
      id: "relationship--0d2d7b39-5b0b-4b1c-8a3c-4c4b41c88c8a",
      relationship_type: "indicates",
      source_ref: "indicator--8e2e2d2b-17d4-4cbf-938f-98ee46b3cd3f",
      target_ref: "malware--9c4638ec-f1de-4ddb-abf4-1b760417654e",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Stixviewer stixJson={sampleData} />
  </React.StrictMode>
);
