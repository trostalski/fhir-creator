import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilesList from "./ProfilesList";
import ResourceList from "./ResourceList";
import ImportMenu from "./ImportMenu";
import ExportModal from "../ExportModal";
import BundleList from "./BundleList";
import ExpandAccordinoToggle from "../shared/ExpandAccordinoToggle";
import { useLiveQuery } from "dexie-react-hooks";
import { ResourcePathRepr, db } from "@/db/db";
import { PreviewModal } from "./PreviewModal";
import { deleteResources, deleteBundles, deleteProfiles } from "@/db/utils";

interface RightPartProps {
  startResizing: () => void;
  closeRightPart: () => void;
}

const RightPart = (props: RightPartProps) => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedBundles, setCheckedBundles] = useState<string[]>([]);
  const [checkedProfiles, setCheckedProfiles] = useState<string[]>([]);

  const [showResources, setShowResources] = useState<boolean>(false);
  const [showBundles, setShowBundles] = useState<boolean>(false);
  const [showProfiles, setShowProfiles] = useState<boolean>(false);

  const [showImportMenu, setShowImportMenu] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(true);
  const [previewPathRepr, setPreviewPathRepr] = useState<ResourcePathRepr>({
    id: "",
    data: [],
  });

  const profiles = useLiveQuery(() => db.profiles.toArray());
  const resources = useLiveQuery(() => db.resources.toArray());
  const bundles = useLiveQuery(() => db.bundles.toArray());

  const itemsChecked =
    checkedResources.length + checkedBundles.length + checkedProfiles.length >
    0;

  const deleteSelection = () => {
    const confirmation = confirm(
      "Are you sure you want to delete the selected items?"
    );
    if (!confirmation) return;
    if (checkedResources.length > 0) {
      deleteResources(checkedResources);
    }
    if (checkedBundles.length > 0) {
      deleteBundles(checkedBundles);
    }
    if (checkedProfiles.length > 0) {
      deleteProfiles(checkedProfiles);
    }
  };

  return (
    <>
      <div className="min-w-0 flex-grow shadow-md overflow-hidden">
        <div className="flex flex-col h-full p-2">
          <div
            className="h-full flex flex-col gap-4 overflow-y-scroll overflow-x-hidden p-2"
            onClick={(e) => {
              e.stopPropagation();
              setShowImportMenu(false);
            }}
          >
            <div className="flex flex-col">
              <div
                className="flex flex-row items-center relative overflow-visible gap-4 w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="grow font-bold">Storage</span>
                <button
                  className="text-blue-600 hover:underline"
                  data-dropdown-toggle="dropdown"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowExportModal(!showExportModal);
                  }}
                >
                  Export
                </button>
                <button
                  className="text-blue-600 hover:underline"
                  data-dropdown-toggle="dropdown"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowImportMenu(!showImportMenu);
                  }}
                >
                  Import
                </button>
                <button
                  onClick={props.closeRightPart}
                  // add transition to closing animation
                  className="h-8"
                  title="toggle sidebar"
                >
                  <RxHamburgerMenu />
                </button>
                {showImportMenu && <ImportMenu />}
              </div>
              <div>
                <button
                  disabled={!itemsChecked}
                  onClick={deleteSelection}
                  className={`text-xs text-red-600 ${
                    itemsChecked ? "hover:underline" : "opacity-50"
                  }`}
                >
                  Delete Selection
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full items-center">
                <div
                  className="overflow-hidden items-center flex flex-row w-full cursor-pointer"
                  onClick={() => setShowResources(!showResources)}
                >
                  <ExpandAccordinoToggle isOpen={showResources} />
                  <span className="mx-auto">
                    Resources{" "}
                    {"(" + !resources ? null : resources?.length + ")"}{" "}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={
                    checkedResources.length == resources?.length &&
                    resources?.length > 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckedResources(resources!.map((r) => r.id!));
                    } else {
                      setCheckedResources([]);
                    }
                  }}
                  className="cursor-pointer"
                />
              </div>
              {showResources ? (
                <ResourceList
                  checkedResources={checkedResources}
                  setCheckedResources={setCheckedResources}
                  setPreviewOpen={setShowPreviewModal}
                  setPreviewPathRepr={setPreviewPathRepr}
                />
              ) : null}
              <hr />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full items-center">
                <div
                  className="overflow-hidden items-center flex flex-row w-full cursor-pointer"
                  onClick={() => setShowBundles(!showBundles)}
                >
                  <ExpandAccordinoToggle isOpen={showBundles} />
                  <span className="mx-auto">
                    Bundles {"(" + !bundles ? null : bundles?.length + ")"}{" "}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={
                    checkedBundles.length == bundles?.length &&
                    bundles?.length > 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckedBundles(bundles!.map((b) => b.id!));
                    } else {
                      setCheckedBundles([]);
                    }
                  }}
                  className="cursor-pointer"
                />
              </div>
              {showBundles ? (
                <BundleList
                  checkedBundles={checkedBundles}
                  setCheckedBundles={setCheckedBundles}
                />
              ) : null}
              <hr />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full items-center">
                <div
                  className="overflow-hidden items-center flex flex-row w-full cursor-pointer"
                  onClick={() => setShowProfiles(!showProfiles)}
                >
                  <ExpandAccordinoToggle isOpen={showProfiles} />
                  <span className="mx-auto">
                    Profiles {"(" + !profiles ? null : profiles?.length + ")"}{" "}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={
                    checkedProfiles.length == profiles?.length &&
                    profiles?.length > 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckedProfiles(profiles!.map((p) => p.id!));
                    } else {
                      setCheckedProfiles([]);
                    }
                  }}
                  className="cursor-pointer"
                />
              </div>
              {showProfiles ? (
                <ProfilesList
                  checkedProfiles={checkedProfiles}
                  setCheckedProfiles={setCheckedProfiles}
                />
              ) : null}
            </div>
            {showExportModal && (
              <ExportModal
                isOpen={showExportModal}
                setIsOpen={setShowExportModal}
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
        </div>
      </div>
      <div
        onMouseDown={props.startResizing}
        className="w-2 hover:bg-gray-200 hover:cursor-col-resize shadow-xl flex-shrink-0"
      />
    </>
  );
};

export default RightPart;
