import BundleComponent from "./BundleComponent";
import testBundle from "@/../data/temp/export(30).json";
import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { Bundle } from "fhir/r4";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  handleAddFolder,
  handleCopy,
  handleCut,
  handleDelete,
  handleEdit,
  handleExport,
  handlePaste,
} from "./utils";
const DynamicContextMenu = dynamic(
  () => import("./contextMenu/ContextMenuComponent"),
  {
    ssr: false,
  }
);
const StorageList = () => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedFolders, setCheckedFolders] = useState<string[]>([]);
  const [resToBeCut, setResToBeCut] = useState<string[]>([]);

  const [points, setPoints] = useState({
    x: 99,
    y: 152,
  });
  const bundleFolderz = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });
  const testBundled = JSON.parse(JSON.stringify(testBundle)) as Bundle;

  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          console.log("context menu clicked");
          setPoints({ x: e.pageX, y: e.pageY });
          console.log(points);
        }}
      >
        <button
          className="border-2 rounded"
          onClick={() => {
            handleAddFolder();
          }}
        >
          Add Folder
        </button>
        <button
          className="border-2 rounded"
          onClick={async () => {
            await handleCopy(checkedResources, checkedFolders);
          }}
        >
          Copy
        </button>
        <button
          className="border-2 rounded"
          onClick={() => {
            handleDelete(checkedResources, checkedFolders);
          }}
        >
          Delete
        </button>
        <button
          className="border-2 rounded"
          onClick={() => {
            handleCut(checkedResources, setResToBeCut);
          }}
        >
          Cut
        </button>
        <button
          className="border-2 rounded"
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </button>
        <button
          className="border-2 rounded"
          onClick={() => {
            handleExport();
          }}
        >
          Export
        </button>
        <button
          className="border-2 rounded"
          onClick={() => {
            handlePaste(resToBeCut, checkedFolders, setResToBeCut);
          }}
        >
          Paste
        </button>
        {bundleFolderz &&
          bundleFolderz.map((bundle) => {
            return (
              <div key={bundle.id}>
                <BundleComponent
                  bundleFolder={bundle}
                  checkedFolders={checkedFolders}
                  checkedResources={checkedResources}
                  setCheckedFolders={setCheckedFolders}
                  setCheckedResources={setCheckedResources}
                />
              </div>
            );
          })}
        <DynamicContextMenu x={points.x} y={points.y} />
      </div>
    </>
  );
};

export default StorageList;
