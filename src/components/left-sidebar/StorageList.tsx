import BundleComponent from "./BundleComponent";
import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
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
import ContextMenuComponent from "./contextMenu/ContextMenuComponent";

const StorageList = () => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedFolders, setCheckedFolders] = useState<string[]>([]);
  const [resToBeCut, setResToBeCut] = useState<string[]>([]);
  const [resToCopy, setResToCopy] = useState<string[]>([]);
  const [showContext, setShowContext] = useState<boolean>(false);

  const [points, setPoints] = useState({
    x: 99,
    y: 152,
  });
  const bundleFolderz = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });

  useEffect(() => {
    const handleClick = () => {
      setShowContext(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setShowContext(true);
          setPoints({ x: e.pageX, y: e.pageY });
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
        {showContext && <ContextMenuComponent x={points.x} y={points.y} />}
      </div>
    </>
  );
};

export default StorageList;
