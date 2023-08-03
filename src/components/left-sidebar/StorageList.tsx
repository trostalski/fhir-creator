import BundleComponent from "./BundleComponent";
import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { handleAddFolder } from "./utils";
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
                  resToBeCut={resToBeCut}
                  resToCopy={resToCopy}
                />
              </div>
            );
          })}
        {showContext && (
          <ContextMenuComponent
            x={points.x}
            y={points.y}
            checkedFolders={checkedFolders}
            checkedResources={checkedResources}
            resToBeCut={resToBeCut}
            resToCopy={resToCopy}
            setCheckedResources={setCheckedResources}
            setResToCopy={setResToCopy}
            setResToCut={setResToBeCut}
          />
        )}
      </div>
    </>
  );
};

export default StorageList;
