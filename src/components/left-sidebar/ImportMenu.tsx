import React from "react";
import UploadProfileButton from "../buttons/UploadProfileButton";
import ImportResourceButton from "../buttons/ImportResourceButton";

interface ImportMenuProps {}

const ImportMenu = (props: ImportMenuProps) => {
  return (
    <div className="bg-white top-6 right-0 p-2 text-md absolute w-24 shadow-xl rounded-md">
      <ImportResourceButton text="Bundle" inputType="Bundle" />
      <ImportResourceButton text="Resource" inputType="Resource" />
      <UploadProfileButton style="sidebar" text="Profile" />
    </div>
  );
};

export default ImportMenu;
