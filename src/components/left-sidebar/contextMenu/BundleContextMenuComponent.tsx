import { copyFolders, executeCopy, executeCut, handleDelete } from "../utils";
import { createPathArrayFromJson } from "@/utils/utils";
import {
  checkoutResources,
  exportBundleFolder,
  exportBundleFolderById,
} from "@/db/utils";
import { db } from "@/db/db";
import { toastError } from "@/toasts";
import { useStore } from "@/stores/useStore";
import { Modes, bundlePoolId } from "@/utils/constants";
import { resolveProfileForResource } from "@/components/buttons/ImportResourceButton";

interface BundleContextMenuProps {
  x: number;
  y: number;
  checkedResources: string[];
  checkedFolders: string[];
  resToBeCut: string[];
  resToCopy: string[];
  setResToCopy: (resToCopy: string[]) => void;
  setCheckedResources: (checkedResources: string[]) => void;
  setResToCut: (resToCut: string[]) => void;
  setShowRename: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BundleContextMenuComponent(
  props: BundleContextMenuProps
) {
  const { setProfileTree, setMode, setResource } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      setMode: state.setMode,
      setResource: state.setResource,
    };
  });

  const handleEdit = async (resourceId: string) => {
    const resource = await db.resources.get(resourceId);
    if (!resource) {
      toastError("No resource found");
      return;
    }
    const profile = await resolveProfileForResource(resource);
    const resourcePathRepr = createPathArrayFromJson(resource);
    if (!profile) {
      toastError("No profile found for this resource");
      return;
    }
    setProfileTree(profile, resourcePathRepr);
    setResource(resource!);
    setMode(Modes.EDIT);
  };
  return (
    <div
      className={`fixed flex flex-col gap-1 rounded-md bg-white border-2 border-blue-400 px-2`}
      style={{ left: props.x, top: props.y }}
    >
      {props.checkedResources.length > 0 && (
        <button
          className="hover:underline"
          onClick={() => {
            props.setResToCopy(props.checkedResources);
            props.setCheckedResources([]);
          }}
        >
          Copy
        </button>
      )}
      {props.checkedResources.length > 0 && (
        <button
          className="hover:underline"
          onClick={() => {
            props.setResToCut(props.checkedResources);
            props.setCheckedResources([]);
          }}
        >
          Cut
        </button>
      )}
      {props.checkedFolders.length === 1 &&
        (props.resToBeCut.length > 0 || props.resToCopy.length > 0) && (
          <button
            className="hover:underline"
            onClick={async () => {
              if (props.resToBeCut.length > 0) {
                await executeCut(
                  props.resToBeCut,
                  props.setResToCut,
                  props.checkedFolders[0]
                );
              } else {
                await executeCopy(
                  props.resToCopy,
                  props.setResToCopy,
                  props.checkedFolders[0]
                );
              }
            }}
          >
            Paste
          </button>
        )}
      {props.checkedFolders.length > 0 && (
        <button
          className="hover:underline"
          onClick={async () => {
            await copyFolders(props.checkedFolders);
          }}
        >
          Duplicate
        </button>
      )}
      {props.checkedResources.length === 1 && (
        <button
          onClick={async () => handleEdit(props.checkedResources[0])}
          className="hover:underline"
        >
          Edit
        </button>
      )}
      {((props.checkedFolders.length === 1 &&
        !props.checkedFolders.includes("Pool")) ||
        props.checkedResources.length === 1) && (
        <button
          className="hover:underline"
          onClick={() => {
            props.setShowRename(true);
          }}
        >
          Rename
        </button>
      )}
      <button
        className="hover:underline"
        onClick={async () => {
          if (props.checkedFolders.length > 0) {
            for (const folderId of props.checkedFolders) {
              await exportBundleFolderById(folderId);
            }
          } else if (props.checkedResources.length > 0) {
            const resources = await db.resources
              .where("id")
              .anyOf(props.checkedResources)
              .toArray();
            await checkoutResources(resources);
          }
        }}
      >
        Export
      </button>
      {!props.checkedFolders.includes(bundlePoolId) && (
        <button
          className="hover:underline"
          onClick={() => {
            handleDelete(props.checkedResources, props.checkedFolders);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
