// db.ts
import Dexie, { Table } from "dexie";
import { InputData } from "../types";
import { StructureDefinition } from "fhir/r4";

export interface FhirResource {
  id?: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  resources!: Table<FhirResource>;
  resourcesPathRepr!: Table<{ id: string; data: InputData[] }>;
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
