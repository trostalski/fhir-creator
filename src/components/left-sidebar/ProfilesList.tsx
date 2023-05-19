import { db } from "@/db/db";
import { InputData } from "@/types";
import { Modes } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import { StructureDefinition } from "fhir/r4";
import React from "react";
import { MdOutlineClear } from "react-icons/md";

interface ProfilesListProps {
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
  loadProfile: (profile: StructureDefinition, inputData?: InputData[]) => void;
}

const ProfilesList = (props: ProfilesListProps) => {
  const profiles = useLiveQuery(() => db.profiles.toArray());

  const deleteProfile = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this profile?"
    );
    if (!confirm) return;
    db.profiles.delete(id);
  };

  return (
    <div>
      {profiles?.map((profile) => (
        <div
          key={profile.url}
          className="flex flex-row pl-2 w-full items-center justify-between text-xs"
        >
          <button
            className="overflow-hidden hover:underline"
            title={profile.url}
            onClick={() => {
              props.setMode(Modes.CREATE);
              props.loadProfile(profile);
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
