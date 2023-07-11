import { db } from "@/db/db";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

interface ProfilesListProps {
  setCheckedProfiles: (checkedProfiles: string[]) => void;
  checkedProfiles: string[];
}

const ProfilesList = (props: ProfilesListProps) => {
  const profiles = useLiveQuery(() => db.profiles.toArray());
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.setProfileTree, setMode: state.setMode };
  });

  const deleteProfile = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this profile?"
    );
    if (!confirm) return;
    db.profiles.delete(id);
  };

  return (
    <div>
      {profiles?.length === 0 && (
        <div className="text-xs text-gray-500">No profiles</div>
      )}
      {profiles?.map((profile) => (
        <div
          key={profile.url}
          className="flex flex-row pl-2 w-full items-center justify-between text-xs"
        >
          <button
            className="overflow-hidden hover:underline"
            title={profile.url}
            onClick={() => {
              setProfileTree(profile);
              setMode(Modes.EDIT);
            }}
          >
            <span className="text-xs">{profile.name}</span>
          </button>
          <input
            type="checkbox"
            className="ml-2 cursor-pointer"
            onChange={(e) => {
              props.setCheckedProfiles(
                props.checkedProfiles.includes(profile.id!)
                  ? props.checkedProfiles.filter((id) => id !== profile.id)
                  : [...props.checkedProfiles, profile.id!]
              );
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfilesList;
