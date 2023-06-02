import { db } from "@/db/db";
import { addResourcPathRepr, addResource, getBaseProfile } from "@/db/utils";
import { toastError, toastSuccess } from "@/toasts";
import { convertObjectToPathArray, isBaseUrl } from "@/utils/utils";
import { Resource, StructureDefinition } from "fhir/r4";
import React from "react";

interface ImportResourceButtonProps {
  text: string;
}

const resolveProfileForResource = async (resource: Resource) => {
  let profile: StructureDefinition | undefined;
  const profileUrl = resource.meta?.profile?.[0];
  const resourceType = resource.resourceType;
  if (!profileUrl || (profileUrl && isBaseUrl(profileUrl))) {
    profile = await getBaseProfile(resourceType);
  } else if (profileUrl && !isBaseUrl(profileUrl)) {
    profile = await db.profiles.get(profileUrl);
  }
  return profile;
};

const ImportResourceButton = (props: ImportResourceButtonProps) => {
  const handleResourceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (e.target) {
            const resource = JSON.parse(e.target.result as string) as Resource;
            const profile = resolveProfileForResource(resource);
            if (!profile) {
              toastError(
                "Could not find profile for resource. Please import a profile first."
              );
              return;
            }
            const addResSuccess = await addResource(resource);
            const addPathReprSuccess = await addResourcPathRepr(
              convertObjectToPathArray(resource)
            );
            if (!addResSuccess || !addPathReprSuccess) {
              toastError("Could not import resource.");
              return;
            }
            toastSuccess("Resource imported successfully.");
          }
        };
        if (file) {
          reader.readAsText(file);
        }
      }
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <label
        htmlFor="profile-upload"
        className="hover:underline hover:cursor-pointer"
      >
        <input
          id="profile-upload"
          type="file"
          hidden
          multiple
          onChange={(e) => handleResourceUpload(e)}
        />
        {props.text}
      </label>
    </div>
  );
};

export default ImportResourceButton;
