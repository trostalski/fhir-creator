import { addProfile } from "@/db/utils";
import { StructureDefinition } from "fhir/r4";
import React from "react";

interface UploadProfileButtonProps {
  loadProfile: (profile: StructureDefinition) => void;
}

const UploadProfileButton = (props: UploadProfileButtonProps) => {
  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            const profile = JSON.parse(e.target.result as string);
            if (numFiles == 1) {
              props.loadProfile(profile);
            }
            addProfile(profile);
          }
        };
        if (file) {
          reader.readAsText(file);
        }
      }
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <label
        htmlFor="profile-upload"
        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded hover:cursor-pointer"
      >
        <input
          id="profile-upload"
          type="file"
          hidden
          multiple
          onChange={(e) => handleProfileUpload(e)}
        />
        Upload Profile
      </label>
    </div>
  );
};

export default UploadProfileButton;
