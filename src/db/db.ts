// db.ts
import Dexie, { Table } from "dexie";
import { PathItem } from "../types";
import { StructureDefinition, Resource } from "fhir/r4";

export interface ResourcePathRepr {
  id: string;
  data: PathItem[];
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  resources!: Table<Resource>;
  resourcesPathRepr!: Table<ResourcePathRepr>;
  profiles!: Table<StructureDefinition>;

  constructor() {
    super("fhir-creator-db");
    this.version(1).stores({
      resources: "id", // Primary key and indexed props
      resourcesPathRepr: "id",
      profiles: "url",
    });
  }
}

export const db = new MySubClassedDexie();
