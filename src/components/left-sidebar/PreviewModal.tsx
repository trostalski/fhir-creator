import ModalWrapper from "../ModalWrapper";
import { ResourcePathRepr, db } from "@/db/db";
import { toastError } from "@/toasts";
import { useLiveQuery } from "dexie-react-hooks";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { AiFillEdit } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";
import { resolveProfileForResource } from "../buttons/ImportResourceButton";

interface PreviewModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathRepr: ResourcePathRepr;
}

export function PreviewModal(props: PreviewModalProps) {
  const resource = useLiveQuery(() => db.resources.get(props.pathRepr.id));
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.setProfileTree, setMode: state.setMode };
  });

  return (
    <ModalWrapper setShow={props.setIsOpen}>
      <div className="h-[calc(100vh-200px)] overflow-y-auto">
        {resource && <JsonView src={resource} />}
      </div>
      <div className="flex flex-row gap-4">
        <div className="grow"></div>
        <button
          className="w-24 p-2 text-gray-500 rounded-md border-2 hover:scale-105"
          onClick={async () => {
            const resource = await db.resources.get(props.pathRepr.id);
            const profile = await resolveProfileForResource(resource!);
            if (!profile) {
              toastError("No profile found for this resource");
              return;
            }
            setProfileTree(profile, props.pathRepr.data);
            setMode(Modes.EDIT);
            props.setIsOpen(false);
          }}
        >
          <AiFillEdit className="inline" /> Edit
        </button>
        <button
          className="w-24 p-2 text-gray-500 rounded-md border-2 hover:scale-105"
          onClick={() => props.setIsOpen(false)}
        >
          <BsHandThumbsUp className="inline" /> Done
        </button>
      </div>
    </ModalWrapper>
  );
}
