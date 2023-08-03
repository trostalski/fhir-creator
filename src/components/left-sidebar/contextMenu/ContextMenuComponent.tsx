import { executeCopy, executeCut, handleDelete } from "../utils";

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
      {props.checkedFolders.length > 0 && <button>Duplicate</button>}
      {props.checkedResources.length === 1 && <button>Edit</button>}
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
