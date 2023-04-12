import { InputData } from "@/types";
import { StructureDefinition } from "../types";
import { FhirResource, db } from "./db";

export async function addResource(resource: FhirResource) {
  try {
    await db.resources.add(resource);
  } catch (error) {
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
