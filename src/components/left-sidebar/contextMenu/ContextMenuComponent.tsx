import { Resource, StructureDefinition } from "fhir/r4";
import { copyFolders, executeCopy, executeCut, handleDelete } from "../utils";
import { createPathArrayFromJson, isBaseUrl } from "@/utils/utils";
import { getBaseProfile } from "@/db/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { toastError } from "@/toasts";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";

interface ContextMenuProps {
  x: number;
  y: number;
  checkedResources: string[];
  checkedFolders: string[];
  resToBeCut: string[];
  resToCopy: string[];
  setResToCopy: (resToCopy: string[]) => void;
  setCheckedResources: (checkedResources: string[]) => void;
  setResToCut: (resToCut: string[]) => void;
}

export default function ContextMenuComponent(props: ContextMenuProps) {
  const { setProfileTree, setMode, setResource } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      setMode: state.setMode,
      setResource: state.setResource,
    };
  });
  const profiles = useLiveQuery(() => db.profiles.toArray());

  const handleEdit = async (resourceId: string) => {
    const resource = await db.resources.get(resourceId);
    if (!resource) {
      toastError("No resource found");
      return;
    }
    let profile: StructureDefinition | undefined;
    const resourcePathRepr = createPathArrayFromJson(resource);
    const profileUrl = resource.meta!.profile![0];
    if (profileUrl && isBaseUrl(profileUrl)) {
      const resourceType = resource.resourceType;
      profile = await getBaseProfile(resourceType);
    } else if (profileUrl) {
      profile = profiles?.find((profile) => profile.url === profileUrl);
    }
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
      className={`flex flex-col align-start rounded text-white border-2-black fixed bg-slate-500`}
      style={{ left: props.x, top: props.y }}
    >
      {props.checkedResources.length > 0 && (
        <button
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
          onClick={async () => {
            await copyFolders(props.checkedFolders);
          }}
        >
          Duplicate
        </button>
      )}
      {props.checkedResources.length === 1 && (
        <button onClick={async () => handleEdit(props.checkedResources[0])}>
          Edit
        </button>
      )}
      {props.checkedFolders.length === 1 ||
        (props.checkedResources.length === 1 && <button>Rename</button>)}
      <button>Export</button>
      <button
        onClick={() => {
          handleDelete(props.checkedResources, props.checkedFolders);
        }}
      >
        Delete
      </button>
    </div>
  );
}
