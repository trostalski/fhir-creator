import React from "react";
import UploadProfileButton from "../buttons/UploadProfileButton";
import { StructureDefinition } from "fhir/r4";
import ImportResourceButton from "../buttons/ImportResourceButton";
import { useStore } from "@/stores/useStore";

interface ImportMenuProps {}

const ImportMenu = (props: ImportMenuProps) => {
  const { setProfileTree } = useStore((state) => {
    return { setProfileTree: state.setProfileTree };
  });

  return (
    <div className="bg-white top-6 right-0 p-2 text-md absolute w-24 shadow-xl rounded-md">
      <button disabled className="opacity-50">
        Bundle
      </button>
      <ImportResourceButton text="Resource" />
      <UploadProfileButton style="sidebar" text="Profile" />
    </div>
  );
};

export default ImportMenu;
