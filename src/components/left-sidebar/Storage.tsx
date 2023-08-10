import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilesList from "./ProfilesList";
import ResourceList from "./ResourceList";
import ImportMenu from "./ImportMenu";
import ExportModal from "../ExportModal";
import BundleList from "./BundleList";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";
import { useLiveQuery } from "dexie-react-hooks";
import { ResourcePathRepr, db } from "@/db/db";
import { PreviewModal } from "./PreviewModal";
import { deleteResources, deleteBundles, deleteProfiles } from "@/db/utils";
import StorageList from "./StorageList";
import { MdAdd } from "react-icons/md";
import { useProfileUpload } from "@/hooks/useProfileUpload";

interface RightPartProps {
  startResizing: () => void;
  closeRightPart: () => void;
}

const Storage = (props: RightPartProps) => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedBundles, setCheckedBundles] = useState<string[]>([]);
  const [checkedProfiles, setCheckedProfiles] = useState<string[]>([]);
  const [showProfiles, setShowProfiles] = useState<boolean>(false);
  const [showImportMenu, setShowImportMenu] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const profiles = useLiveQuery(() => db.profiles.toArray());
  const { handleProfileUpload } = useProfileUpload();

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
              // e.stopPropagation(); not sure if this is neccessary? It breaks contextMenu disappearance
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
            <StorageList />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full items-center">
                <div
                  className="overflow-hidden items-center flex flex-row w-full cursor-pointer"
                  onClick={() => setShowProfiles(!showProfiles)}
                >
                  <ExpandAccordionToggle isOpen={showProfiles} />
                  <span className="mx-auto">
                    {"Profiles " + "(" + profiles?.length + ")"}
                  </span>
                </div>
                <label
                  className="bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                  onClick={() => {}}
                >
                  <MdAdd size={24} />
                  <input
                    hidden
                    multiple
                    type="file"
                    onChange={handleProfileUpload}
                  />
                </label>
              </div>
              {showProfiles ? (
                <ProfilesList
                  checkedProfiles={checkedProfiles}
                  setCheckedProfiles={setCheckedProfiles}
                />
              ) : null}
            </div>
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

export default Storage;
