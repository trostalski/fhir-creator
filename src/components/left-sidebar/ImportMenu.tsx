import React from "react";
import UploadProfileButton from "../buttons/UploadProfileButton";
import { StructureDefinition } from "fhir/r4";
import ImportResourceButton from "../buttons/ImportResourceButton";

interface ImportMenuProps {
  loadProfile: (profile: StructureDefinition) => void;
}

const ImportMenu = (props: ImportMenuProps) => {
  return (
    <div className="bg-white top-6 right-0 p-2 text-md absolute w-24 shadow-xl rounded-md">
      <button disabled className="opacity-50">Bundle</button>
      <ImportResourceButton text="Resource" />
      <UploadProfileButton
        loadProfile={props.loadProfile}
        style="sidebar"
        text="Profile"
      />
    </div>
  );
};

export default ImportMenu;
