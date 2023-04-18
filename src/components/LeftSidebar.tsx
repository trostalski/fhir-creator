import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { MdOutlineClear } from "react-icons/md";
import { getResourceTypeFromUrl, isFhirBaseDefinition } from "../utils/utils";
import { getResources } from "@/db/utils";
import { StructureDefinition } from "fhir/r4";
import { ProfileTree } from "@/utils/buildTree";

interface ResourceIdListProps {
  setMode: React.Dispatch<React.SetStateAction<"edit" | "create">>;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  loadProfile: (profile: StructureDefinition) => void;
  handleSelectBaseProfile: (value: string) => void;
}

export const ResourceIdList = (props: ResourceIdListProps) => {
  const resourcesPathRepr = useLiveQuery(() => db.resourcesPathRepr.toArray());
  const profiles = useLiveQuery(() => db.profiles.toArray());

  const deleteResource = (id: string) => {
    db.resourcesPathRepr.delete(id);
    db.resources.delete(id);
  };

  const deleteProfile = (id: string) => {
    db.profiles.delete(id);
  };

  return (
    <div className="h-full flex flex-col gap-4 overflow-scroll p-2">
      <div className="flex flex-col gap-2">
        <span>Resources</span>
        {resourcesPathRepr?.map((resourcePathRepr) => (
          <div
            key={resourcePathRepr.id}
            className="flex flex-row pl-2 w-full items-center justify-between text-xs"
          >
            <button
              className="overflow-hidden hover:underline"
              title={resourcePathRepr.id}
              onClick={() => {
                const profileUrl = resourcePathRepr.data.find(
                  (data) => data.path === "meta.profile[0]"
                )?.value;
                if (profileUrl && isFhirBaseDefinition(profileUrl)) {
                  const resourceType = getResourceTypeFromUrl(profileUrl);
                  props.handleSelectBaseProfile(resourceType);
                } else if (profileUrl) {
                  const profile = profiles?.find(
                    (profile) => profile.url === profileUrl
                  );
                  props.loadProfile(profile!);
                }
                props.setMode("edit");
                // props.setProfileTree(resourcePathRepr.data);
              }}
            >
              <span className="text-xs">{resourcePathRepr.id}</span>
            </button>
            <button
              className="hover:scale-105"
              onClick={() => deleteResource(resourcePathRepr.id)}
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
      <button className="w-full bg-blue-800 p-2" onClick={getResources}>
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
