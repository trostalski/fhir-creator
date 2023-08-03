import { ResourcePathRepr, db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { toastError } from "@/toasts";
import { Modes } from "@/utils/constants";
import {
  createPathArrayFromJson,
  getResourceTypeFromUrl,
  isBaseUrl,
} from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { StructureDefinition } from "fhir/r4";
import React from "react";
import { useStore } from "@/stores/useStore";
import { AiOutlineEye } from "react-icons/ai";

interface ResourceListProps {
  setPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPreviewPathRepr: React.Dispatch<React.SetStateAction<ResourcePathRepr>>;
  setCheckedResources: (checkedResources: string[]) => void;
  checkedResources: string[];
}

const ResourceList = (props: ResourceListProps) => {
  const resources = useLiveQuery(() => db.resources.toArray());
  const resourcesPathRepr = useLiveQuery(() => db.resourcesPathRepr.toArray());
  const { setProfileTree, setMode, setResource } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      setMode: state.setMode,
      setResource: state.setResource,
    };
  });
  const profiles = useLiveQuery(() => db.profiles.toArray());
  const getResourceTypeFromPathRepr = (pathRepr: ResourcePathRepr) => {
    const result = pathRepr.data.find(
      (data) => data.path === "resourceType"
    )?.value;
    return result;
  };
  return (
    <div>
      {resources?.length === 0 && (
        <div className="text-xs text-gray-500">No resources</div>
      )}
      {resources?.map((resource) => (
        <div
          key={resource.id}
          className="flex flex-row pl-2 w-full items-center justify-between text-xs"
        >
          <button
            className="overflow-hidden hover:underline"
            title={resource.id}
            onClick={async () => {
              let profile: StructureDefinition | undefined;
              // const profileUrl = resourcePathRepr.data.find(
              //   (data) => data.path === "meta.profile[0]"
              // )?.value;
              const resourcePathRepr = createPathArrayFromJson(resource);
              const profileUrl = resource.meta!.profile![0];
              if (profileUrl && isBaseUrl(profileUrl)) {
                const resourceType = resource.resourceType;
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
              setProfileTree(profile, resourcePathRepr);
              setResource(resource!);
              setMode(Modes.EDIT);
            }}
          >
            <span className="text-xs">
              {resource.resourceType + "/" + resource.id}
            </span>
          </button>
          <div className="flex flex-row items-center">
            <button
              className="hover:scale-105"
              onClick={() => {
                const resourcePathRepr = createPathArrayFromJson(resource);
                props.setPreviewOpen(true);
                props.setPreviewPathRepr({
                  id: resource.id!,
                  data: resourcePathRepr,
                });
              }}
            >
              <AiOutlineEye size={15} className="ml-2" />
            </button>
            <input
              type="checkbox"
              checked={props.checkedResources.includes(resource.id!)}
              className="ml-2 cursor-pointer"
              onChange={(e) => {
                props.setCheckedResources(
                  props.checkedResources.includes(resource.id!)
                    ? props.checkedResources.filter((id) => id !== resource.id!)
                    : [...props.checkedResources, resource.id!]
                );
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
