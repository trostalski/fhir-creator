import { db } from "@/db/db";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import ProfileContextMenu from "./contextMenu/ProfileContextMenu";

interface ProfilesListProps {
  setCheckedProfiles: (checkedProfiles: string[]) => void;
  checkedProfiles: string[];
}

const ProfilesList = (props: ProfilesListProps) => {
  const profiles = useLiveQuery(() => db.profiles.toArray());
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [contextPoint, setContextPoint] = useState({
    x: 0,
    y: 0,
  });
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.setProfileTree, setMode: state.setMode };
  });

  return (
    <div>
      {profiles?.length === 0 && (
        <div className="text-xs text-gray-500">No profiles</div>
      )}
      {profiles?.map((profile) => (
        <div
          key={profile.url}
          className="bg-blue-400 p-1 text-white rounded-md"
        >
          <button
            className="w-full text-left font-light text-sm truncate transition-colors duration-300 ease-in-out px-2 py-1 rounded-md overflow-hidden hover:bg-blue-200"
            title={profile.url}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowContextMenu(true);
              if (!props.checkedProfiles.includes(profile.id!)) {
                props.setCheckedProfiles([
                  ...props.checkedProfiles,
                  profile.id!,
                ]);
              }
              setContextPoint({ x: e.pageX, y: e.pageY });
            }}
            onClick={() => {
              setProfileTree(profile);
              props.setCheckedProfiles(
                props.checkedProfiles.includes(profile.id!)
                  ? props.checkedProfiles.filter((id) => id !== profile.id)
                  : [...props.checkedProfiles, profile.id!]
              );
              setMode(Modes.EDIT);
            }}
          >
            <span className="text-xs">{profile.name}</span>
          </button>
        </div>
      ))}
      {showContextMenu && (
        <ProfileContextMenu
          setShowContextMenu={setShowContextMenu}
          checkedProfiles={props.checkedProfiles}
          x={contextPoint.x}
          y={contextPoint.y}
        />
      )}
    </div>
  );
};

export default ProfilesList;
