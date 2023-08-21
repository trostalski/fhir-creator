import { useProfileUpload } from "@/hooks/useProfileUpload";
import React from "react";

export type UploadProfileButtonStyle = "topbar" | "sidebar";

interface UploadProfileButtonProps {
  text: string;
  style: UploadProfileButtonStyle;
}

const UploadProfileButton = (props: UploadProfileButtonProps) => {
  const { handleProfileUpload } = useProfileUpload();
  if (props.style == "topbar") {
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
          {props.text}
        </label>
      </div>
    );
  } else if (props.style == "sidebar") {
    return (
      <div className="flex flex-row gap-2">
        <label
          htmlFor="profile-upload"
          className="hover:underline hover:cursor-pointer"
        >
          <input
            id="profile-upload"
            type="file"
            hidden
            multiple
            onChange={(e) => handleProfileUpload(e)}
          />
          {props.text}
        </label>
      </div>
    );
  } else {
    return null;
  }
};

export default UploadProfileButton;
