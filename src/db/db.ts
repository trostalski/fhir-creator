// db.ts
import Dexie, { Table } from "dexie";
import { PathItem } from "../types";
import { StructureDefinition, Resource, Bundle } from "fhir/r4";
import { bundlePoolId, bundlePoolName } from "@/utils/constants";

export interface ResourcePathRepr {
  id: string;
  data: PathItem[];
}

export interface apiKey {
  key:string
}

export interface BundleFolder {
  id: string;
  name?: string;
  meta: Bundle;
  resourceIds: string[];
  createdAt: string;
  updatedAt: string;
}
export interface FolderReference {
  resourceId: string;
  folderId: string;
}

export class MySubClassedDexie extends Dexie {
  resources!: Table<Resource>;
  profiles!: Table<StructureDefinition>;
  bundleFolders!: Table<BundleFolder>;
  folderReferences!: Table<FolderReference>;
  // deprecated, not sure if can be deleted on dexie with ts
  bundles!: Table<Bundle>;
  apiKey!: Table<apiKey>

  constructor() {
    super("fhir-creator-db");
    this.version(1).stores({
      resources: "id", // Primary key and indexed props
      folderReferences: "resourceId, folderId",
      bundleFolders: "id",
      profiles: "url",
      bundles: "id",
      apiKey: "key"
    });
    this.on("populate", () => {
      db.bundleFolders.add({
        id: bundlePoolId,
        name: bundlePoolName,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        resourceIds: [],
        meta: {
          resourceType: "Bundle",
          type: "collection",
          timestamp: new Date().toISOString(),
          meta: {
            lastUpdated: new Date().toISOString(),
          },
        },
      });
    });
  }
}

export const db = new MySubClassedDexie();
