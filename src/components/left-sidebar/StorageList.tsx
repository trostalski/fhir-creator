import BundleComponent from "./BundleComponent";
import { ResourcePathRepr, db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { handleAddFolder } from "./utils";
import ContextMenuComponent from "./contextMenu/ContextMenuComponent";
import { RenameModal } from "./contextMenu/RenameModal";
import { PreviewModal } from "./PreviewModal";
import { el } from "date-fns/locale";

const StorageList = () => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedFolders, setCheckedFolders] = useState<string[]>([]);
  const [resToBeCut, setResToBeCut] = useState<string[]>([]);
  const [resToCopy, setResToCopy] = useState<string[]>([]);
  const [showContext, setShowContext] = useState<boolean>(false);
  const [showRename, setShowRename] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const [previewPathRepr, setPreviewPathRepr] = useState<ResourcePathRepr>({
    id: "",
    data: [],
  });

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
                  setPreviewOpen={setShowPreviewModal}
                  setPreviewPathRepr={setPreviewPathRepr}
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
            setShowRename={setShowRename}
          />
        )}
        {showRename && (
          <RenameModal
            setShowRename={setShowRename}
            renameFolder={checkedFolders[0]}
            renameResource={checkedResources[0]}
          />
        )}
        {showPreviewModal && (
          <PreviewModal
            pathRepr={previewPathRepr}
            isOpen={showPreviewModal}
            setIsOpen={setShowPreviewModal}
          />
        )}
      </div>
    </>
  );
};

export default StorageList;
