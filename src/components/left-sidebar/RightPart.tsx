import useResize from "@/hooks/useResize";
import { PathItem } from "@/types";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { StructureDefinition } from "fhir/r4";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilesList from "./ProfilesList";
import ResourceList from "./ResourceList";
import ImportMenu from "./ImportMenu";
import ExportModal from "../CheckoutModal";

interface AddResourceRightPartProps {
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  loadProfile: (profile: StructureDefinition, inputData?: PathItem[]) => void;
  handleSelectBaseProfile: (value: string) => void;
}

export const StorageRightPart = (props: AddResourceRightPartProps) => {
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showProfiles, setShowProfiles] = useState<boolean>(false);

  const [showImportMenu, setShowImportMenu] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  return (
    <div
      className="h-full flex flex-col gap-4 overflow-scroll p-2"
      onClick={(e) => {
        e.stopPropagation();
        setShowImportMenu(false);
      }}
    >
      <div className="flex flex-row">
        <span className="font-bold">Storage</span>
        <span className="grow"></span>
        <div
          className="relative overflow-visible flex flex-row gap-4"
          onClick={(e) => e.stopPropagation()}
        >
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
          {showImportMenu && <ImportMenu loadProfile={props.loadProfile} />}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-slate-200 rounded-md py-1 hover:bg-slate-300 overflow-hidden"
          onClick={() => setShowResources(!showResources)}
        >
          Resources
        </button>
        {showResources ? (
          <ResourceList
            loadProfile={props.loadProfile}
            setMode={props.setMode}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-slate-200 bg rounded-md py-1 hover:bg-slate-300 overflow-hidden"
          onClick={() => setShowProfiles(!showProfiles)}
        >
          Profiles
        </button>
        {showProfiles ? (
          <ProfilesList
            loadProfile={props.loadProfile}
            setMode={props.setMode}
          />
        ) : null}
      </div>
      {showExportModal && (
        <ExportModal isOpen={showExportModal} setIsOpen={setShowExportModal} />
      )}
    </div>
  );
};

interface RightPartProps {
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  loadProfile: (profile: StructureDefinition, inputData?: PathItem[]) => void;
  handleSelectBaseProfile: (value: string) => void;
  startResizing: () => void;
  closeRightPart: () => void;
}

const RightPart = (props: RightPartProps) => {
  return (
    <>
      <div className="min-w-0 flex-grow shadow-md overflow-hidden">
        <div className="flex flex-col h-full p-2">
          <button
            onClick={props.closeRightPart}
            className="flex flex-row items-center w-full bg-inherit h-8"
          >
            <span className="grow" />
            <RxHamburgerMenu />
          </button>
          <StorageRightPart
            setMode={props.setMode}
            handleSelectBaseProfile={props.handleSelectBaseProfile}
            loadProfile={props.loadProfile}
            setProfileTree={props.setProfileTree}
          />
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
