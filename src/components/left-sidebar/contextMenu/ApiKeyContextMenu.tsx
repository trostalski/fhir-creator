import { db } from "@/db/db";
import { toastError, toastSuccess } from "@/toasts";
import React from "react";

interface ApiKeyContextMenuProps {
  setShowContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
  apiKey: string | null;
}

const ApiKeyContextMenu = (props: ApiKeyContextMenuProps) => {
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
      className="fixed flex flex-col gap-1 rounded-md bg-white border-2 border-blue-400 px-2"
      style={{ left: props.x, top: props.y }}
    >
      <button
        className="hover:underline"
        onClick={async () => {
          if (!props.apiKey) return;
          try {
            await db.apiKey.delete(props.apiKey);
            toastSuccess("API Key deleted");
          } catch (error) {
            toastError("Error deleting API Key");
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ApiKeyContextMenu;
