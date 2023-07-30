// db.ts
import Dexie, { Table } from "dexie";
import { PathItem } from "../types";
import { StructureDefinition, Resource, Bundle } from "fhir/r4";

export interface ResourcePathRepr {
  id: string;
  data: PathItem[];
}

export interface BundleFolder {
  id: string;
  name?: string;
  meta: Bundle;
  resourceIds: string[]
}
export interface FolderReference{
  resourceId: string,
  folderId: string
}

export class MySubClassedDexie extends Dexie {
  resources!: Table<Resource>;
  bundles!: Table<Bundle>;
  resourcesPathRepr!: Table<ResourcePathRepr>;
  profiles!: Table<StructureDefinition>;
  bundleFolders!: Table<BundleFolder>;
  folderReferences!: Table<FolderReference>

  constructor() {
    super("fhir-creator-db");
    this.version(3).stores({
      folderReferences: "resourceId, folderId"
    })
    this.version(2).stores({
      bundleFolders: "id, name",
    })
    this.version(1).stores({
      resources: "id", // Primary key and indexed props
      resourcesPathRepr: "id",
      profiles: "url",
      bundles: "id",
    });
    this.on("populate", ()=>{
      db.bundleFolders.add({
        id:"Pool",
        name: "Pool",
        resourceIds: []
      })
    })
  }
}

export const db = new MySubClassedDexie();
