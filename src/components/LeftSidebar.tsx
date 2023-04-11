import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { InputData, StructureDefinition } from "@/types";
import { MdOutlineClear } from "react-icons/md";

interface ResourceIdListProps {
  setMode: React.Dispatch<React.SetStateAction<"edit" | "create">>;
  setInputData: React.Dispatch<React.SetStateAction<InputData[]>>;
  loadProfile: (profile: StructureDefinition) => void;
}

export const ResourceIdList = (props: ResourceIdListProps) => {
  const resources = useLiveQuery(() => db.resourcesPathRepr.toArray());
  const profiles = useLiveQuery(() => db.profiles.toArray());

  const deleteResource = (id: string) => {
    db.resourcesPathRepr.delete(id);
    db.resources.delete(id);
  };

  const deleteProfile = (id: string) => {
    db.profiles.delete(id);
  };

  return (
    <div className="h-full flex flex-col gap-12 overflow-scroll p-2">
      <div className="flex flex-col gap-2">
        <span>Resources</span>
        {resources?.map((resource) => (
          <div
            key={resource.id}
            className="flex flex-row pl-2 w-full items-center justify-between text-xs"
          >
            <button
              className="overflow-hidden hover:underline"
              title={resource.id}
              onClick={() => {
                props.setMode("edit");
                props.setInputData(resource.data);
              }}
            >
              <span className="text-xs">{resource.id}</span>
            </button>
            <button
              className="hover:scale-105"
              onClick={() => deleteResource(resource.id)}
            >
              <MdOutlineClear size={20} className="ml-2" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span>Profiles</span>
        {profiles?.map((profile) => (
          <div
            key={profile.url}
            className="flex flex-row pl-2 w-full items-center justify-between text-xs"
          >
            <button
              className="overflow-hidden hover:underline"
              title={profile.url}
              onClick={() => {
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
    </div>
  );
};

const LeftSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col h-full bg-gray-50 shadow-md">
      {isOpen ? (
        <div className="h-full p-2 w-60">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex flex-row items-center w-full bg-inherit h-8"
          >
            <span className="grow" />
            <RxHamburgerMenu />
          </button>
          {props.children}
        </div>
      ) : (
        <div className="relative w-12">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="fixed top-12 left-4"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
      <div className="grow"></div>
      <button className="w-full bg-blue-800 p-2">
        <IoMdDoneAll
          size={40}
          className="mx-auto"
          style={{
            color: "white",
            borderRadius: "15%",
            padding: "5px",
          }}
        />
      </button>
    </div>
  );
};

export default LeftSidebar;
