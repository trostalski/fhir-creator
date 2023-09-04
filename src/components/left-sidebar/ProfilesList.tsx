import { db } from "@/db/db";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import ProfileContextMenu from "./contextMenu/ProfileContextMenu";

interface ProfilesListProps {}

const ProfilesList = (props: ProfilesListProps) => {
  const [checkedProfileUrl, setCheckedProfileUrl] = useState<string | null>(
    null
  );
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
              if (checkedProfileUrl !== profile.url) {
                setCheckedProfileUrl(profile.url);
              }
              setContextPoint({ x: e.pageX, y: e.pageY });
              setShowContextMenu(true);
            }}
            onClick={() => {
              setProfileTree(profile);
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
          profileUrl={checkedProfileUrl}
          x={contextPoint.x}
          y={contextPoint.y}
        />
      )}
    </div>
  );
};

export default ProfilesList;
