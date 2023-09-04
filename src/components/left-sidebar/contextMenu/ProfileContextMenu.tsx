import { db } from "@/db/db";
import React from "react";

interface ProfileContextMenuProps {
  setShowContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
  checkedProfiles: string[];
}

const ProfileContextMenu = (props: ProfileContextMenuProps) => {
  const { checkedProfiles } = props;
  const deleteProfiles = (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;
    checkedProfiles.forEach((id) => {
      db.profiles.delete(id);
    });
  };

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
      {props.checkedProfiles.length > 0 && (
        <button
          className="hover:underline"
          onClick={() => {
            deleteProfiles;
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ProfileContextMenu;
