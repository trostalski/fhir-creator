import { ResourcePathRepr, db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { toastError } from "@/toasts";
import { PathItem } from "@/types";
import { Modes } from "@/utils/constants";
import { getResourceTypeFromUrl, isBaseUrl } from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { StructureDefinition } from "fhir/r4";
import React from "react";
import { MdOutlineClear } from "react-icons/md";

interface ResourceListProps {
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
  loadProfile: (profile: StructureDefinition, inputData?: PathItem[]) => void;
}

const ResourceList = (props: ResourceListProps) => {
  const resourcesPathRepr = useLiveQuery(() => db.resourcesPathRepr.toArray());
  const profiles = useLiveQuery(() => db.profiles.toArray());
  const deleteResource = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (!confirm) return;
    db.resourcesPathRepr.delete(id);
    db.resources.delete(id);
  };

  const getResourceTypeFromPathRepr = (pathRepr: ResourcePathRepr) => {
    const result = pathRepr.data.find(
      (data) => data.path === "resourceType"
    )?.value;
    return result;
  };
  return (
    <div>
      {resourcesPathRepr?.length === 0 && (
        <div className="text-xs text-gray-500">No resources</div>
      )}
      {resourcesPathRepr?.map((resourcePathRepr) => (
        <div
          key={resourcePathRepr.id}
          className="flex flex-row pl-2 w-full items-center justify-between text-xs"
        >
          <button
            className="overflow-hidden hover:underline"
            title={resourcePathRepr.id}
            onClick={async () => {
              let profile: StructureDefinition | undefined;
              const profileUrl = resourcePathRepr.data.find(
                (data) => data.path === "meta.profile[0]"
              )?.value;

              if (profileUrl && isBaseUrl(profileUrl)) {
                const resourceType = getResourceTypeFromUrl(profileUrl);
                profile = await getBaseProfile(resourceType);
              } else if (profileUrl) {
                profile = profiles?.find(
                  (profile) => profile.url === profileUrl
                );
              }
              if (!profile) {
                toastError("No profile found for this resource");
                return;
              }
              props.loadProfile(profile!, resourcePathRepr.data);
              props.setMode(Modes.EDIT);
            }}
          >
            <span className="text-xs">
              {getResourceTypeFromPathRepr(resourcePathRepr) +
                "/" +
                resourcePathRepr.id}
            </span>
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
  );
};

export default ResourceList;