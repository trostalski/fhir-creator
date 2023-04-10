import { useState, useEffect } from "react";

export interface FhirResource {
  id: string;
  // Add other properties of the FHIR resource here
}

interface FhirResourcesDatabase extends IDBDatabase {
  transaction(
    storeNames: string | string[],
    mode?: IDBTransactionMode
  ): FhirResourcesTransaction;
}

interface FhirResourcesTransaction extends IDBTransaction {
  objectStore(name: string): FhirResourcesObjectStore;
}

interface FhirResourcesObjectStore extends IDBObjectStore {
  add(resource: FhirResource): IDBRequest<IDBValidKey>;
  openCursor(): IDBRequest<IDBCursorWithValue | null>;
}

const useFhirResources = (): {
  addResources: (resources: FhirResource[]) => void;
  getResources: (callback: (resources: FhirResource[]) => void) => void;
} => {
  const [db, setDb] = useState<FhirResourcesDatabase | null>(null);

  useEffect(() => {
    const openDbRequest = window.indexedDB.open("myFhirDatabase", 1);

    openDbRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest)
        .result as FhirResourcesDatabase;
      db.createObjectStore("fhirResources", { keyPath: "id" });
    };

    openDbRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest)
        .result as FhirResourcesDatabase;
      setDb(db);
    };
  }, []);

  const addResources = (resources: FhirResource[]): void => {
    if (db) {
      const transaction = db.transaction(["fhirResources"], "readwrite");
      const objectStore = transaction.objectStore("fhirResources");

      resources.forEach((resource) => {
        objectStore.add(resource);
      });
    }
  };

  const getResources = (
    callback: (resources: FhirResource[]) => void
  ): void => {
    if (db) {
      const transaction = db.transaction(["fhirResources"], "readonly");
      const objectStore = transaction.objectStore("fhirResources");
      const request = objectStore.getAll();
      request.onerror = (event) => {
        console.error(event);
      };
      request.onsuccess = (event) => {
        const resources = (event.target as IDBRequest).result as FhirResource[];
        callback(resources);
      };
    }
  };

  return { addResources, getResources };
};

export default useFhirResources;
