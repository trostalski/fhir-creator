import { db } from "@/db/db";
import {
  addBundle,
  addResource,
  getBaseProfile,
  parseBundle,
} from "@/db/utils";
import { toastError, toastSuccess } from "@/toasts";
import { isBaseUrl } from "@/utils/utils";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import React from "react";

interface ImportResourceButtonProps {
  text: string;
  inputType: "Resource" | "Bundle";
}

export const resolveProfileForResource = async (resource: Resource) => {
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

            if (!addResSuccess) {
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

  const handleBundleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (e.target) {
            const bundle = JSON.parse(e.target.result as string) as Bundle;
            if (bundle.resourceType !== "Bundle" || !bundle.entry) {
              toastError("File is not a bundle.");
              return;
            }
            const addBundleSuccess = await parseBundle(bundle);
            if (!addBundleSuccess) {
              toastError("Could not import bundle.");
              return;
            }
            toastSuccess("Bundle imported successfully.");
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
        htmlFor="resource-upload"
        className="hover:underline hover:cursor-pointer"
      >
        <input
          id="resource-upload"
          type="file"
          hidden
          multiple
          onChange={(e) => {
            if (props.inputType === "Resource") {
              handleResourceUpload(e);
            } else if (props.inputType === "Bundle") {
              handleBundleUpload(e);
            }
          }}
        />
        {props.text}
      </label>
    </div>
  );
};

export default ImportResourceButton;
