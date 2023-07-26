import { addProfile } from "@/db/utils";
import { useStore } from "@/stores/useStore";
import { toastPromise } from "@/toasts";
import React from "react";

export type UploadProfileButtonStyle = "topbar" | "sidebar";

interface UploadProfileButtonProps {
  text: string;
  style: UploadProfileButtonStyle;
}

const UploadProfileButton = (props: UploadProfileButtonProps) => {
  const { setProfileTree } = useStore((state) => {
    return { setProfileTree: state.setProfileTree };
  });
  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (e.target) {
            const profile = JSON.parse(e.target.result as string);
            if (numFiles === 1) {
              await toastPromise(
                setProfileTree(profile),
                "loading profile tree...",
                "success!",
                "failed to load profile tree."
              );
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
