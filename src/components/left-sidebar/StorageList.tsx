import BundleComponent from "./BundleComponent";
import { ResourcePathRepr, db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { handleAddFolder } from "./utils";
import ContextMenuComponent from "./contextMenu/ContextMenuComponent";
import { RenameModal } from "./contextMenu/RenameModal";
import { PreviewModal } from "./PreviewModal";
import { MdAdd } from "react-icons/md";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";

const StorageList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
  const resources = useLiveQuery(() => {
    return db.resources.toArray();
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
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setShowContext(true);
        setPoints({ x: e.pageX, y: e.pageY });
      }}
    >
      <div className="overflow-hidden py-1 items-center flex flex-row w-full">
        <div
          className="flex flex-row items-center cursor-pointer w-full"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ExpandAccordionToggle isOpen={isOpen} />
          <span className="mx-auto">
            {"Bundles " + "(" + bundleFolderz?.length + ")"}
          </span>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => {
            handleAddFolder();
          }}
        >
          <MdAdd size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {bundleFolderz &&
          isOpen &&
          bundleFolderz // ensure that Pool is always rendered on top of the bundle list
            .filter((folder) => folder.id === "Pool")
            .map((bundle) => {
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
                    resources={resources}
                  />
                </div>
              );
            })}
        {bundleFolderz &&
          isOpen &&
          bundleFolderz
            .filter((folder) => folder.id !== "Pool")
            .map((bundle) => {
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
                    resources={resources}
                  />
                </div>
              );
            })}
      </div>
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
  );
};

export default StorageList;
