import { InputData } from "@/types";
import { FhirResource, db } from "./db";
import { toastError } from "@/toasts";
import { StructureDefinition } from "fhir/r4";

interface FhirBundleEntry {
  resource: FhirResource;
}

interface FhirBundle {
  entry: FhirBundleEntry[];
  resourceType: string;
  type: string;
  timestamp: string;
  meta: {
    lastUpdated: string;
  };
}

export const getBaseProfile = async (resourceType: string) => {
  const profile = await fetch(`api/profiles?filename=${resourceType}`).then(
    (res) => res.json()
  );
  return profile;
};

export async function getResource(id: string) {
  try {
    const resource = await db.resources.get(id);
    return resource;
  } catch (error) {
    toastError(`Failed to get resource with id ${id}`);
    console.log(`Failed to get resource with id ${id}`);
  }
}

export async function addResource(resource: FhirResource) {
  try {
    await db.resources.add(resource);
  } catch (error) {
    toastError(`Failed to add resource`);
    console.log(`Failed to add resource`);
  }
}

export async function addProfile(profile: StructureDefinition) {
  try {
    await db.profiles.add(profile);
  } catch (error) {
    console.log(`Failed to add profile`);
  }
}

export async function addResourcPathRepr(inputData: InputData[]) {
  try {
    const id = inputData.find((data) => data.path === "id")?.value as string;
    await db.resourcesPathRepr.add({
      id: id,
      data: inputData,
    });
  } catch (error) {
    console.log(`Failed to add path representation of resource`);
  }
}

export async function updateResource(resource: FhirResource) {
  try {
    await db.resources.update(resource.id!, resource);
  } catch (error) {
    console.log(`Failed to update resource`);
  }
}

export async function updateResourcePathRepr(inputData: InputData[]) {
  try {
    const id = inputData.find((data) => data.path === "id")?.value as string;
    await db.resourcesPathRepr.update(id, {
      id: id,
      data: inputData,
    });
  } catch (error) {
    console.log(`Failed to update path representation of resource`);
  }
}

function createBundle(resources: FhirResource[]): FhirBundle {
  const bundle: FhirBundle = {
    resourceType: "Bundle",
    type: "collection",
    timestamp: new Date().toISOString(),
    meta: {
      lastUpdated: new Date().toISOString(),
    },
    entry: [],
  };
  resources.forEach((resourceEle) => {
    bundle.entry.push({
      resource: resourceEle,
    });
  });
  return bundle;
}

export async function getResources() {
  const all_resources = await db.resources.toArray();
  const bundle_created: FhirBundle = createBundle(all_resources);

  const bundle_string = JSON.stringify(bundle_created, null, 2);
  //convert to a blob
  const blob = new Blob([bundle_string], { type: "application/json" });
  //convert to a url
  const url = URL.createObjectURL(blob);
  //download the file
  const filename = "export.json";
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}
