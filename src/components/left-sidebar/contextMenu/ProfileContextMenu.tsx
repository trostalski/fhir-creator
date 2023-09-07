import { db } from "@/db/db";
import { toastError, toastSuccess } from "@/toasts";
import React from "react";

interface ProfileContextMenuProps {
  setShowContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
  profileUrl: string | null;
}

const ProfileContextMenu = (props: ProfileContextMenuProps) => {
  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.className.includes("context-menu")) return;
      props.setShowContextMenu(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed flex flex-col gap-1 rounded-md bg-white border-2 border-blue-400 px-2`}
      style={{ left: props.x, top: props.y }}
    >
      <button
        className="hover:underline"
        onClick={async () => {
          console.log("edit profile: ", props.profileUrl);
          if (!props.profileUrl) return;
          try {
            await db.profiles.delete(props.profileUrl);
            toastSuccess("Profile deleted");
          } catch (error) {
            toastError("Error deleting profile");
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProfileContextMenu;
