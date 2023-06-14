import { db } from "@/db/db";
import { useStore } from "@/stores/useStore";
import { PathItem } from "@/types";
import { Modes } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import { StructureDefinition } from "fhir/r4";
import React from "react";
import { MdOutlineClear } from "react-icons/md";

interface ProfilesListProps {}

const ProfilesList = (props: ProfilesListProps) => {
  const profiles = useLiveQuery(() => db.profiles.toArray());
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.loadProfileTree, setMode: state.setMode };
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
          <button
            className="hover:scale-105"
            onClick={() => deleteProfile(profile.url)}
          >
            <MdOutlineClear size={20} className="ml-2" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfilesList;
