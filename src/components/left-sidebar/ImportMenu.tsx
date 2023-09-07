import React from "react";
import UploadProfileButton from "../buttons/UploadProfileButton";
import ImportResourceButton from "../buttons/ImportResourceButton";

interface ImportMenuProps {}

const ImportMenu = (props: ImportMenuProps) => {
  return (
    <div className="bg-white top-6 right-0 text-md absolute w-24 shadow-xl rounded-md border-2 border-blue-400 px-2">
      <ImportResourceButton text="Bundle" inputType="Bundle" />
      <ImportResourceButton text="Resource" inputType="Resource" />
      <UploadProfileButton style="sidebar" text="Profile" />
    </div>
  );
};

export default ImportMenu;
