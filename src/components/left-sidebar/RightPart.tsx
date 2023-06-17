import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilesList from "./ProfilesList";
import ResourceList from "./ResourceList";
import ImportMenu from "./ImportMenu";
import ExportModal from "../ExportModal";
import BundleList from "./BundleList";
import ExpandAccordinoToggle from "../shared/ExpandAccordinoToggle";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";

interface RightPartProps {
  startResizing: () => void;
  closeRightPart: () => void;
}

const RightPart = (props: RightPartProps) => {
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showBundles, setShowBundles] = useState<boolean>(false);
  const [showProfiles, setShowProfiles] = useState<boolean>(false);

  const [showImportMenu, setShowImportMenu] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const profiles = useLiveQuery(() => db.profiles.toArray());
  const resources = useLiveQuery(() => db.resources.toArray());
  const bundles = useLiveQuery(() => db.bundles.toArray());

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
                className="h-8 "
                title="toggle sidebar"
              >
                <RxHamburgerMenu />
              </button>
              {showImportMenu && <ImportMenu />}
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="overflow-hidden items-center flex flex-row cursor-pointer"
                onClick={() => setShowResources(!showResources)}
              >
                <ExpandAccordinoToggle isOpen={showResources} />
                <span className="mx-auto">
                  Resources {"(" + !resources ? null : resources?.length + ")"}{" "}
                </span>
              </div>
              {showResources ? <ResourceList /> : null}
              <hr />
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="overflow-hidden items-center flex flex-row cursor-pointer"
                onClick={() => setShowBundles(!showBundles)}
              >
                <ExpandAccordinoToggle isOpen={showBundles} />
                <span className="mx-auto">
                  Bundles {"(" + !bundles ? null : bundles?.length + ")"}{" "}
                </span>
              </div>
              {showBundles ? <BundleList /> : null}
              <hr />
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="overflow-hidden items-center flex flex-row cursor-pointer"
                onClick={() => setShowProfiles(!showProfiles)}
              >
                <ExpandAccordinoToggle isOpen={showProfiles} />
                <span className="mx-auto">
                  Profiles {"(" + !profiles ? null : profiles?.length + ")"}{" "}
                </span>
              </div>
              {showProfiles ? <ProfilesList /> : null}
            </div>
            {showExportModal && (
              <ExportModal
                isOpen={showExportModal}
                setIsOpen={setShowExportModal}
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
