import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilesList from "./ProfilesList";
import ImportMenu from "./ImportMenu";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { deleteResources, deleteBundles, deleteProfiles } from "@/db/utils";
import StorageList from "./StorageList";
import { MdAdd } from "react-icons/md";
import { useProfileUpload } from "@/hooks/useProfileUpload";
import ExportModal from "../ExportModal";
import { ApiKeyModal } from "../annotator/ApiKeyModal";
import ApiKeyList from "./ApiKeyList";

interface RightPartProps {
  startResizing: () => void;
  closeRightPart: () => void;
}

const Storage = (props: RightPartProps) => {
  const [showProfiles, setShowProfiles] = useState<boolean>(false);
  const [showApiKeys, setShowApiKeys] = useState<boolean>(false);
  const [showImportMenu, setShowImportMenu] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState<boolean>(false);

  const profiles = useLiveQuery(() => db.profiles.toArray());
  const apiKeys = useLiveQuery(() => db.apiKey.toArray());
  const { handleProfileUpload } = useProfileUpload();

  return (
    <>
      <div className="min-w-0 flex-grow shadow-md overflow-hidden">
        <div className="flex flex-col h-full p-2">
          <div
            className="h-full flex flex-col gap-4 overflow-y-scroll overflow-x-hidden px-2"
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
                  className="text-blue-600 transition hover:underline"
                  data-dropdown-toggle="dropdown"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowExportModal(!showExportModal);
                  }}
                >
                  Export
                </button>
                <button
                  className="text-blue-600 transition hover:underline"
                  data-dropdown-toggle="dropdown"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowImportMenu(!showImportMenu);
                  }}
                >
                  Import
                </button>
                <button onClick={props.closeRightPart} title="toggle sidebar">
                  <RxHamburgerMenu
                    size={24}
                    className="transition hover:text-gray-400"
                  />
                </button>
                {showImportMenu && <ImportMenu />}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <StorageList />
              <hr />
              <div className="flex flex-col gap-1">
                <div className="flex flex-row w-full items-center">
                  <div
                    className="flex flex-row items-center cursor-pointer w-full transition group"
                    onClick={() => setShowProfiles(!showProfiles)}
                  >
                    <button
                      className={`text-gray-500 transition group-hover:bg-gray-200 rounded-md ${
                        showProfiles && "bg-gray-300"
                      }`}
                    >
                      <ExpandAccordionToggle isOpen={showProfiles} size={24} />
                    </button>
                    <div className="w-full text-center">
                      <span className="mx-auto">Profiles</span>
                      <span className="text-gray-400">
                        {" (" + profiles?.length + ")"}
                      </span>
                    </div>
                  </div>
                  <label
                    className="bg-blue-500 text-white rounded-md cursor-pointer transition hover:bg-blue-400"
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
                {showProfiles ? <ProfilesList /> : null}
              </div>{" "}
              <div className="flex flex-col gap-1">
                <div className="flex flex-row w-full items-center">
                  <div
                    className="flex flex-row items-center cursor-pointer w-full transition group"
                    onClick={() => setShowApiKeys(!showApiKeys)}
                  >
                    <button
                      className={`text-gray-500 transition group-hover:bg-gray-200 rounded-md ${
                        showApiKeys && "bg-gray-300"
                      }`}
                    >
                      <ExpandAccordionToggle isOpen={showApiKeys} size={24} />
                    </button>
                    <div className="w-full text-center">
                      <span className="mx-auto">Api Keys</span>
                      <span className="text-gray-400">
                        {" (" + apiKeys?.length + ")"}
                      </span>
                    </div>
                  </div>
                  <label
                    className="bg-blue-500 text-white rounded-md cursor-pointer transition hover:bg-blue-400"
                    onClick={() => {
                      setShowApiKeyModal(true);
                    }}
                  >
                    <MdAdd size={24} />
                  </label>
                </div>
                {showApiKeys ? <ApiKeyList /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showExportModal && (
        <ExportModal isOpen={showExportModal} setIsOpen={setShowExportModal} />
      )}
      {showApiKeyModal && (
        <ApiKeyModal setShowApiKeyModal={setShowApiKeyModal} />
      )}
      <div
        onMouseDown={props.startResizing}
        className="w-2 hover:bg-gray-200 hover:cursor-col-resize shadow-xl flex-shrink-0"
      />
    </>
  );
};

export default Storage;
