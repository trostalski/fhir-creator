import { BundleFolder, FolderReference, db } from "@/db/db";
import { Resource } from "fhir/r4";
import { v4 as uuidv4 } from "uuid";

interface pooledRef {
  folderId: string;
  resourceIds: string[];
}

// StorageList handles

export const handleAddFolder = async () => {
  const folder: BundleFolder = {
    id: uuidv4(),
    resourceIds: [],
    meta: {
      resourceType: "Bundle",
      type: "collection",
      timestamp: new Date().toISOString(),
      meta: {
        lastUpdated: new Date().toISOString(),
      },
    },
  };
  await db.bundleFolders.add(folder);
};

export const handleCopy = async (
  checkedResources: string[],
  checkedFolders: string[]
) => {
  // first handle marked resources
  // pool resource by folder they belong to to reduce database accesses
  if (checkedResources.length > 0) {
    let folderReferences: FolderReference[] = (
      await db.folderReferences.bulkGet(checkedResources)
    ).filter(
      (ref) => typeof ref !== "undefined" // bulkGet would return undefined if no corresponding element
    ) as unknown as FolderReference[];
    if (folderReferences) {
      const pooledRefs = poolRefs(folderReferences);
      console.log(folderReferences);
      db.transaction(
        "rw",
        db.folderReferences,
        db.bundleFolders,
        db.resources,
        async () => {
          for (const ref of pooledRefs) {
            await copyResources(ref.resourceIds, ref.folderId);
          }
        }
      ).catch((error) => console.log(error));
    }
  }
  // handle folders
  if (checkedFolders.length > 0) {
    await copyFolders(checkedFolders);
  }
};

export const handleCut = (
  checkedResources: string[],
  setResToBeCut: (checkedResources: string[]) => void
) => {
  setResToBeCut(checkedResources);
};

export const handleDelete = async (
  checkedResources: string[],
  checkedFolders: string[]
) => {
  db.transaction(
    "rw",
    db.folderReferences,
    db.bundleFolders,
    db.resources,
    async () => {
      if (checkedResources.length > 0) {
        await deleteResources(checkedResources);
      }
      if (checkedFolders.length > 0) {
        await deleteFolder(checkedFolders);
      }
    }
  ).catch((err) => console.log(err));
};

export const handleEdit = () => {
  console.log("edit");
};

export const handleExport = () => {
  console.log("export");
};

export const handlePaste = async (
  resToBeCut: string[],
  checkedFolders: string[],
  setResToBeCut: (checkedResources: string[]) => void
) => {
  if (resToBeCut.length > 0 && checkedFolders.length === 1) {
    await pasteResources(resToBeCut, checkedFolders[0]);
    setResToBeCut([]);
  }
};

// Storage List utility functions

export const poolRefs = (folderReferences: FolderReference[]) => {
  const pooledRefs: pooledRef[] = [];
  for (const ref of folderReferences) {
    if (pooledRefs.some((pooledRef) => pooledRef.folderId === ref.folderId)) {
      pooledRefs
        .find((pooledRef) => pooledRef.folderId === ref.folderId)!
        .resourceIds.push(ref.resourceId);
    } else {
      pooledRefs.push({
        folderId: ref.folderId,
        resourceIds: [ref.resourceId],
      });
    }
  }
  return pooledRefs;
};

export const copyResources = async (
  resourceIds: string[],
  destinationFolder: string
) => {
  db.transaction(
    "rw",
    db.resources,
    db.folderReferences,
    db.bundleFolders,
    async () => {
      const resources = (await db.resources.bulkGet(resourceIds)).filter(
        (resource) => typeof resource !== "undefined"
      ) as unknown as Resource[];
      // create copied instance
      const copiedResources: Resource[] = [];
      for (const resource of resources) {
        let copiedResource = JSON.parse(JSON.stringify(resource)) as Resource;
        copiedResource = { ...copiedResource, id: uuidv4() }; // ensure no duplicate resources
        copiedResources.push(copiedResource);
      }
      // push to database and attach to folder
      await db.resources.bulkAdd(copiedResources);
      await db.bundleFolders
        .where("id")
        .equals(destinationFolder)
        .modify((folder) => {
          folder.resourceIds = [
            ...folder.resourceIds,
            ...copiedResources.map((resource) => resource.id!),
          ];
        });
      await db.folderReferences.bulkAdd(
        copiedResources.map((resource) => {
          return { folderId: destinationFolder, resourceId: resource.id! };
        })
      );
    }
  ).catch((error) => console.log(error));
};

export const copyFolders = async (checkedFolders: string[]) => {
  db.transaction(
    "rw",
    db.folderReferences,
    db.resources,
    db.bundleFolders,
    async () => {
      const originalFolders = (
        await db.bundleFolders.bulkGet(checkedFolders)
      ).filter(
        (folder) => typeof folder !== "undefined"
      ) as unknown as BundleFolder[];
      if (originalFolders.length !== checkedFolders.length) {
        throw new Error("A Folder could not be copied");
        // for the following steps it is important that copied and original folders share the same index
      }
      let copiedFolders = originalFolders.map((folder) => {
        return { ...folder, id: uuidv4(), resourceIds: [] }; // reset resource IDs in order to reuse copyResources
      });
      for (let i = 0; i < copiedFolders.length; i++) {
        await db.bundleFolders.bulkAdd(copiedFolders);
        await copyResources(
          originalFolders[i].resourceIds,
          copiedFolders[i].id
        );
      }
    }
  ).catch((error) => console.log(error));
};

const deleteResources = async (resourceIds: string[]) => {
  db.transaction(
    "rw",
    db.resources,
    db.folderReferences,
    db.bundleFolders,
    async () => {
      // update folders
      const folderReferences = await db.folderReferences
        .where("resourceId")
        .anyOf(resourceIds)
        .toArray();
      const pooledRefs = poolRefs(folderReferences);
      for (const pooledRef of pooledRefs) {
        await db.bundleFolders
          .where("id")
          .equals(pooledRef.folderId)
          .modify({
            resourceIds: resourceIds.filter(
              (id) => !pooledRef.resourceIds.includes(id)
            ),
          });
      }
      await db.resources.bulkDelete(resourceIds);
      // delete folder refs
      await db.folderReferences.bulkDelete(
        folderReferences.map((ref) => ref.resourceId)
      );
    }
  ).catch((err) => console.log(err));
};

const deleteFolder = async (checkedFolders: string[]) => {
  db.transaction(
    "rw",
    db.folderReferences,
    db.bundleFolders,
    db.resources,
    async () => {
      const folders = await db.bundleFolders
        .where("id")
        .anyOf(checkedFolders)
        .toArray();
      // delete resources and refs
      const resourceIds: string[] = [];
      const folderIds: string[] = [];
      for (const folder of folders) {
        if (folder.resourceIds) {
          resourceIds.push(...folder.resourceIds);
        }
        folderIds.push(folder.id);
      }
      if (resourceIds.length > 0) {
        await db.resources.bulkDelete(resourceIds);
        await db.folderReferences.bulkDelete(resourceIds);
      }
      // delete folders
      await db.bundleFolders.bulkDelete(folderIds);
    }
  ).catch((err) => console.log(err));
};

export const pasteResources = async (
  resourcestoBeCut: string[],
  destinationFolder: string
) => {
  db.transaction(
    "rw",
    db.folderReferences,
    db.bundleFolders,
    db.resources,
    async () => {
      const refs = await db.folderReferences
        .where("resourceId")
        .anyOf(resourcestoBeCut)
        .toArray();
      const pooledRefs = poolRefs(refs);
      // change original folder
      for (const ref of pooledRefs) {
        await db.bundleFolders
          .where("id")
          .equals(ref.folderId)
          .modify((folder) => {
            folder.resourceIds = folder.resourceIds.filter((resId) => {
              return !ref.resourceIds.includes(resId);
            });
          });
      }
      // update references
      await db.folderReferences
        .where("resourceId")
        .anyOf(resourcestoBeCut)
        .modify((ref) => {
          ref.folderId = destinationFolder;
        });
      // add to new folder
      await db.bundleFolders
        .where("id")
        .equals(destinationFolder)
        .modify((folder) => {
          folder.resourceIds = [...folder.resourceIds, ...resourcestoBeCut];
        });
    }
  );
};
