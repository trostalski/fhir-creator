import { PathItem } from "@/types";
import { toastError } from "@/toasts";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import { BundleFolder, db } from "./db";
import { FhirResource } from "fhir/r4";
import { v4 as uuidv4 } from "uuid";
import { error } from "console";

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
  db.transaction('rw', db.resources, db.folderReferences, db.bundleFolders, async ()=>{
    db.resources.add(resource);
    db.bundleFolders.where("id").equals("Pool").modify((folder)=>{
      folder.resourceIds = [...folder.resourceIds, resource.id!]
    })
    db.folderReferences.add({folderId:"Pool", resourceId:resource.id!})
  }).catch(error => console.log(error));
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

export async function parseBundle(bundle: Bundle) {
  // Ensure bundle has an ID
  if (!bundle.id) {
    bundle.id = uuidv4();
  }

  // Extract resources and their IDs from the bundle
  const resources = (bundle.entry || []).map(entry => entry.resource).filter((resource)=>{
    if(resource?.id){
      return true;
    } else {
      return false;
    }
  }) as FhirResource[];
  const resourceIds = resources.map(resource => resource.id!);

  // Create the metaInfo object
  const metaInfo: Bundle = { ...bundle, entry: [] };

  // Create the bundleFolder object
  const bundleFolder: BundleFolder = {
    id: bundle.id,
    resourceIds: resourceIds,
    meta: metaInfo,
  };
  const folderReferences = resourceIds.map((resourceId)=>(
    {
      resourceId: resourceId,
      folderId: bundle.id!
    }
  ))

  // Transaction for adding to database
  try {
    await db.transaction('rw', db.bundleFolders, db.resources, db.folderReferences, async () => {
      await db.bundleFolders.add(bundleFolder);
      if(resources.length > 0){
        await db.resources.bulkAdd(resources);
        await db.folderReferences.bulkAdd(folderReferences);
      }
    });
    return true;
  } catch (error) {
    console.error('Failed to parse bundle:', error);
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
  const filename = "Bundle_" + new Date().toISOString() + ".json";

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

export async function checkoutResources(resources?: Resource[]) {
  if (resources) {
    resources.forEach((resource) => {
      const resource_string = JSON.stringify(resource, null, 2);
      const blob = new Blob([resource_string], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const filename = resource.resourceType + "_" + resource.id + ".json";
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
    });
  }
}
