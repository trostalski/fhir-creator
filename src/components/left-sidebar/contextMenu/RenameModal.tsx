import ModalWrapper from "@/components/ModalWrapper";
import { Dispatch, useState } from "react";
import { handleRename } from "../utils";

interface RenameProps {
  renameFolder: string;
  renameResource: string;
  setShowRename: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RenameModal = (props: RenameProps) => {
  const [rename, setRename] = useState<string>("");
  return (
    <ModalWrapper setShow={props.setShowRename}>
      <div className="flex flex-row gap-8">
        <input
          // className="grow"
          type="text"
          // defaultValue={
          //   props.renameFolder ? props.renameFolder : props.renameResource
          // }
          onChange={(e) => console.log("changing")}
          onClick={(e) => {
            if (document.activeElement !== e.target) {
              (e.target as HTMLInputElement).focus();
            }
          }}
        />
        <button
          onClick={async () => {
            handleRename(props.renameFolder, props.renameResource, rename);
          }}
        >
          Rename
        </button>
        <button
        // onClick={() => props.setShowRename(false)}
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
};
