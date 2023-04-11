// db.ts
import Dexie, { Table } from "dexie";

export interface FhirResource {
  id?: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  resources!: Table<FhirResource>;

  constructor() {
    super("fhir-creator-db");
    this.version(1).stores({
      resources: "id", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
