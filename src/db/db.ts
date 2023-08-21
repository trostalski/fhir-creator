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
  profiles!: Table<StructureDefinition>;
  bundleFolders!: Table<BundleFolder>;
  folderReferences!: Table<FolderReference>
  // deprecated, not sure if can be deleted on dexie with ts
  bundles!: Table<Bundle>;
  resourcesPathRepr!: Table<ResourcePathRepr>;

  constructor() {
    super("fhir-creator-db");
    this.version(3).stores({
      folderReferences: "resourceId, folderId",
      bundles: null,
      resourcesPathRepr: null,
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
        resourceIds: [],
        meta: {
          resourceType: "Bundle",
          type: "collection",
          timestamp: new Date().toISOString(),
          meta: {
            lastUpdated: new Date().toISOString(),
            }
          }
      })
    })
  }
}

export const db = new MySubClassedDexie();
