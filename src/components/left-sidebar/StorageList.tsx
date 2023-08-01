import BundleComponent from "./BundleComponent";
import testBundle from "@/../data/temp/export(30).json";
import { BundleFolder, FolderReference, db } from "@/db/db";
import { parseBundle } from "@/db/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { Bundle, Resource } from "fhir/r4";
import { use, useState } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { error } from "console";
const DynamicContextMenu = dynamic(
  () => import("./contextMenu/ContextMenuComponent"),
  {
    ssr: false,
  }
);
const StorageList = () => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedFolders, setCheckedFolders] = useState<string[]>([]);
  const [resToBeCut, setResToBeCut] = useState<string[]>([]);

  const [points, setPoints] = useState({
    x: 99,
    y: 152,
  });
  const bundleFolderz = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });
  const testBundled = JSON.parse(JSON.stringify(testBundle)) as Bundle;

  const handleCopy = async () => {
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

  const handleCut = () => {
    setResToBeCut(checkedResources);
    console.log(resToBeCut);
  };

  interface pooledRef {
    folderId: string;
    resourceIds: string[];
  }

  const poolRefs = (folderReferences: FolderReference[]) => {
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

  const copyResources = async (
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

  const copyFolders = async (checkedFolders: string[]) => {
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

  const handleDelete = async () => {
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

  const handleEdit = () => {
    console.log("edit");
  };

  const handleExport = () => {
    console.log("export");
  };

  const handlePaste = async () => {
    if (resToBeCut.length > 0 && checkedFolders.length === 1) {
      console.log("pasting");
      await pasteResources(resToBeCut, checkedFolders[0]);
      setResToBeCut([]);
    }
  };

  const pasteResources = async (
    resourcestoBeCut: string[],
    destinationFolder: string
  ) => {
    db.transaction(
      "rw",
      db.folderReferences,
      db.bundleFolders,
      db.resources,
      async () => {
        await db.folderReferences
          .where("resourceId")
          .anyOf(resourcestoBeCut)
          .modify((ref) => {
            ref.folderId = destinationFolder;
          });
        await db.bundleFolders
          .where("id")
          .equals(destinationFolder)
          .modify((folder) => {
            folder.resourceIds = [...folder.resourceIds, ...resourcestoBeCut];
          });
      }
    );
  };

  const handleAddFolder = async () => {
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

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("context menu clicked");
        setPoints({ x: e.pageX, y: e.pageY });
        console.log(points);
      }}
    >
      <button
        className="border-2 rounded"
        onClick={() => {
          handleAddFolder();
        }}
      >
        Add Folder
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handleCopy();
        }}
      >
        Copy
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handleCut();
        }}
      >
        Cut
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handleEdit();
        }}
      >
        Edit
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handleExport();
        }}
      >
        Export
      </button>
      <button
        className="border-2 rounded"
        onClick={() => {
          handlePaste();
        }}
      >
        Paste
      </button>
      <button
        onClick={async () => {
          await parseBundle(testBundled);
          console.log("parsed Bundle");
        }}
      >
        Upload Bundle
      </button>
      <button
        onClick={async () => {
          const bundles = await db.bundleFolders.toArray();
          if (bundles[0].resourceIds) {
            const resources = await db.resources.bulkGet(
              bundles[0].resourceIds
            );
            console.log(resources);
          }
          console.log(bundles);
        }}
      >
        LogBundles
      </button>
      {bundleFolderz &&
        bundleFolderz.map((bundle) => {
          return (
            <div key={bundle.id}>
              <BundleComponent
                bundleFolder={bundle}
                checkedFolders={checkedFolders}
                checkedResources={checkedResources}
                setCheckedFolders={setCheckedFolders}
                setCheckedResources={setCheckedResources}
              />
            </div>
          );
        })}
      <button
        onClick={async () => {
          await db.folderReferences.bulkDelete(bundleFolderz![0].resourceIds!);
          await db.resources.bulkDelete(bundleFolderz![0].resourceIds!);
          await db.bundleFolders.delete("sdfsdf3323423d444");
        }}
      >
        DeleteBundle
      </button>
      <DynamicContextMenu x={points.x} y={points.y} />
    </div>
  );
};

export default StorageList;
