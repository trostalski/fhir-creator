import BundleComponent from "./BundleComponent";
import testBundle from "@/../data/temp/export(30).json";
import { BundleFolder, FolderReference, db } from "@/db/db";
import { parseBundle } from "@/db/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { Bundle } from "fhir/r4";
import { useState } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
const DynamicContextMenu = dynamic(
  () => import("./contextMenu/ContextMenuComponent"),
  {
    ssr: false,
  }
);
const StorageList = () => {
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [checkedFolders, setCheckedFolders] = useState<string[]>([]);

  const [points, setPoints] = useState({
    x: 99,
    y: 152,
  });
  const bundleFolderz = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });
  const testBundled = JSON.parse(JSON.stringify(testBundle)) as Bundle;

  const handleCopy = () => {
    console.log("copy");
  };

  const handleCut = () => {
    console.log("cut");
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
