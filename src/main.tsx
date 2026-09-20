import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Stixviewer from "./Stixviewer/Stixviewer";

/**
 * Development playground. This file is NOT part of the published package — it
 * only exists so the component can be exercised locally with `npm run dev`.
 *
 * It lets you:
 *  - view the bundled sample,
 *  - load a real STIX 2.1 `.json` bundle from disk,
 *  - see the `onNodeclick` callback fire with the clicked STIX id.
 */

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
      // Referenced but not bundled: demonstrates the ghost nodes that
      // `showDanglingRefs` renders for missing objects.
      created_by_ref: "identity--11111111-1111-4111-8111-111111111111",
    },
    {
      type: "indicator",
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

function describeStix(value: any): string {
  if (!value) return "nothing to render";
  if (Array.isArray(value)) return `${value.length} objects (array input)`;
  if (value.type === "bundle")
    return `bundle containing ${(value.objects ?? []).length} objects`;
  return `single ${value.type} object`;
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    font: '14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    margin: 0,
    padding: 24,
    background: "#f6f7f9",
    color: "#1c1e21",
  },
  panel: {
    maxWidth: 1000,
    margin: "0 auto",
    background: "#fff",
    border: "1px solid #dcdfe4",
    borderRadius: 8,
    padding: 16,
  },
  row: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" },
  badge: {
    background: "#eef2ff",
    border: "1px solid #c7d2fe",
    borderRadius: 999,
    padding: "2px 10px",
    fontSize: 12,
  },
  error: {
    background: "#fdecea",
    border: "1px solid #f5c2c0",
    borderRadius: 6,
    padding: "8px 12px",
    color: "#a12b26",
    marginTop: 12,
  },
  pre: {
    background: "#0f172a",
    color: "#e2e8f0",
    borderRadius: 6,
    padding: 12,
    maxHeight: 140,
    overflow: "auto",
    fontSize: 12,
  },
};

function Playground() {
  const [stixJson, setStixJson] = useState<any>(sampleData);
  const [source, setSource] = useState("bundled sample");
  const [clicks, setClicks] = useState<string[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showToolbar, setShowToolbar] = useState(true);
  const [showDetailsPanel, setShowDetailsPanel] = useState(true);
  const [showDanglingRefs, setShowDanglingRefs] = useState(true);
  const fileInput = useRef<HTMLInputElement>(null);

  const featureToggles: [string, boolean, (v: boolean) => void][] = [
    ["Toolbar (search / legend / export)", showToolbar, setShowToolbar],
    ["Detail panel", showDetailsPanel, setShowDetailsPanel],
    ["Dangling-reference ghosts", showDanglingRefs, setShowDanglingRefs],
  ];

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setStixJson(parsed);
        setSource(`${file.name} — ${describeStix(parsed)}`);
        setClicks([]);
        setLoadError(null);
      } catch (error) {
        setLoadError(
          `Could not parse ${file.name}: ${(error as Error).message}. ` +
            "The previous graph is still shown."
        );
      }
    };
    reader.onerror = () => setLoadError(`Could not read ${file.name}.`);
    reader.readAsText(file);
  }

  function loadSample() {
    setStixJson(sampleData);
    setSource("bundled sample");
    setClicks([]);
    setLoadError(null);
    if (fileInput.current) fileInput.current.value = "";
  }

  return (
    <div style={styles.page}>
      <div style={styles.panel}>
        <h1 style={{ marginTop: 0 }}>STIX2viz playground</h1>
        <p style={{ marginTop: 0, color: "#4b5563" }}>
          Renders the component from source with hot reload. Drop in any STIX
          2.1 bundle to test it against your own data.
        </p>

        <div style={styles.row}>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            onChange={handleFileChange}
          />
          <button type="button" onClick={loadSample}>
            Reload sample
          </button>
          <span style={styles.badge}>{describeStix(stixJson)}</span>
        </div>

        <p style={{ color: "#4b5563" }}>
          Source: <strong>{source}</strong>
        </p>

        {loadError ? <div style={styles.error}>{loadError}</div> : null}

        <div style={{ ...styles.row, marginBottom: 8 }}>
          {featureToggles.map(([label, value, setter]) => (
            <label key={label} style={{ fontSize: 13 }}>
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setter(e.target.checked)}
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <Stixviewer
          stixJson={stixJson}
          graphStyle={{ width: "100%", height: 640 }}
          wrapStyle={{ border: "1px solid #dcdfe4", borderRadius: 6 }}
          showToolbar={showToolbar}
          showDetailsPanel={showDetailsPanel}
          showDanglingRefs={showDanglingRefs}
          onNodeclick={(nodeId) =>
            setClicks((previous) =>
              [`node: ${nodeId}`, ...previous].slice(0, 8)
            )
          }
          onEdgeSelect={(edgeId, relationship) =>
            setClicks((previous) =>
              [
                `edge: ${edgeId} (${
                  relationship?.relationship_type ?? "embedded ref"
                })`,
                ...previous,
              ].slice(0, 8)
            )
          }
          onError={(error) =>
            setLoadError(`Viewer error: ${(error as Error).message}`)
          }
        />

        <h2 style={{ fontSize: 16 }}>onNodeclick output (newest first)</h2>
        {clicks.length === 0 ? (
          <p style={{ color: "#6b7280" }}>Click a node in the graph…</p>
        ) : (
          <>
            <p style={{ color: "#6b7280", margin: 0 }}>
              Last clicked: <code>{clicks[0]}</code>
            </p>
            <pre style={styles.pre}>{clicks.join("\n")}</pre>
          </>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
);
