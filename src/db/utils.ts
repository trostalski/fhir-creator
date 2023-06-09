import { PathItem } from "@/types";
import { toastError } from "@/toasts";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import { db } from "./db";
import { FhirResource } from "fhir/r4";

export const getBaseProfile = async (resourceType: string) => {
  try {
    const profile = await fetch(`api/profiles?filename=${resourceType}`).then(
      (res) => res.json()
    );
    return profile;
  } catch (error) {
    toastError(`Failed to get base profile for ${resourceType}`);
  }
};

export async function getResource(id: string) {
  try {
    const resource = await db.resources.get(id);
    return resource;
  } catch (error) {
    console.log(`Failed to get resource with id ${id}`);
  }
}

export async function getResources(ids: string[]) {
  try {
    const resources = await db.resources.bulkGet(ids);
    return resources as Resource[];
  } catch (error) {
    console.log(`Failed to get resources with ids ${ids}`);
  }
}

export async function deleteResources(ids: string[]) {
  try {
    await db.resources.bulkDelete(ids);
    await db.resourcesPathRepr.bulkDelete(ids);
    return true;
  } catch (error) {
    console.log(`Failed to delete resources with ids ${ids}`);
    return false;
  }
}

export async function addResource(resource: Resource) {
  try {
    await db.resources.add(resource);
    return true;
  } catch (error) {
    console.log(`Failed to add resource`);
    return false;
  }
}

export async function addProfile(profile: StructureDefinition) {
  try {
    await db.profiles.add(profile);
    return true;
  } catch (error) {
    console.log(`Failed to add profile`);
    return false;
  }
}

export async function deleteProfiles(urls: string[]) {
  try {
    await db.profiles.bulkDelete(urls);
    return true;
  } catch (error) {
    console.log(`Failed to delete profiles with urls ${urls}`);
    return false;
  }
}

export async function addResourcPathRepr(inputData: PathItem[]) {
  try {
    const id = inputData.find((data) => data.path === "id")?.value as string;
    await db.resourcesPathRepr.add({
      id: id,
      data: inputData,
    });
    return true;
  } catch (error) {
    console.log(`Failed to add path representation of resource`);
    return false;
  }
}

export async function updateResource(resource: Resource) {
  try {
    await db.resources.update(resource.id!, resource);
    return true;
  } catch (error) {
    console.log(`Failed to update resource`);
    return false;
  }
}

export async function updateResourcePathRepr(inputData: PathItem[]) {
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

export async function addBundle(bundle: Bundle) {
  try {
    await db.bundles.add(bundle);
    return true;
  } catch (error) {
    console.log(`Failed to add bundle`);
    return false;
  }
}

export async function deleteBundles(ids: string[]) {
  try {
    await db.bundles.bulkDelete(ids);
    return true;
  } catch (error) {
    console.log(`Failed to delete bundles with ids ${ids}`);
    return false;
  }
}

export async function getBundle(id: string) {
  try {
    const bundle = await db.bundles.get(id);
    return bundle;
  } catch (error) {
    console.log(`Failed to get bundle with id ${id}`);
  }
}

export async function getBundles(ids: string[]) {
  try {
    const bundles = await db.bundles.bulkGet(ids);
    return bundles as Bundle[];
  } catch (error) {
    console.log(`Failed to get bundles with ids ${ids}`);
  }
}

function createBundle(resources: Resource[]): Bundle {
  const bundle: Bundle = {
    resourceType: "Bundle",
    type: "collection",
    timestamp: new Date().toISOString(),
    meta: {
      lastUpdated: new Date().toISOString(),
    },
    entry: [],
  };
  resources.forEach((resourceEle) => {
    bundle.entry!.push({
      resource: resourceEle as FhirResource,
    });
  });
  return bundle;
}

function addBundlesToBundle(bundle: Bundle, bundles: Bundle[]) {
  bundles.forEach((bundleEle) => {
    if (!bundleEle.entry) return;
    for (const resource of bundleEle.entry) {
      bundle.entry!.push(resource);
    }
  });
  return bundle;
}

export async function checkoutBundle(
  resources?: Resource[],
  bundles?: Bundle[]
) {
  resources = resources || [];
  let bundle_created = createBundle(resources);
  if (bundles) {
    bundle_created = addBundlesToBundle(bundle_created, bundles);
  }

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
