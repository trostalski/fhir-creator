import { BundleFolder } from "@/db/db";
import { useState } from "react";

interface BundleComponentProps {
  bundleFolder: BundleFolder;
  checkedResources: string[];
  setCheckedResources: (checkedResources: string[]) => void;
  checkedFolders: string[];
  setCheckedFolders: (checkedFolders: string[]) => void;
}

const BundleComponent = (props: BundleComponentProps) => {
  const [showResources, setShowResources] = useState<boolean>(true);
  const BundleId = props.bundleFolder.id;
  const resourceIds = props.bundleFolder.resourceIds;

  const handleClickResFol = (
    e: React.MouseEvent,
    itemId: string,
    selectedArr: string[],
    setterFunc: (data: string[]) => void,
    otherSetterFunc: (data: string[]) => void
  ) => {
    otherSetterFunc([]); // to prevent unexpected behaviour, only let either resources or folders be selected at the same time
    if (e.ctrlKey) {
      setterFunc(
        selectedArr.includes(itemId)
          ? selectedArr.filter((item) => item !== itemId)
          : [...selectedArr, itemId]
      );
    } else {
      setterFunc(
        selectedArr.includes(itemId) && selectedArr.length > 1
          ? [itemId]
          : selectedArr.includes(itemId)
          ? []
          : [itemId]
      );
    }
  };

  const handleRightClick = (
    e: React.MouseEvent,
    itemId: string,
    selectedArr: string[],
    setterFunc: (data: string[]) => void,
    otherSetterFunc: (data: string[]) => void
  ) => {
    otherSetterFunc([]);
    setterFunc(
      selectedArr.includes(itemId) && selectedArr.length > 1
        ? selectedArr
        : [itemId]
    );
  };

  return (
    <div>
      <button
        onClick={(e) =>
          handleClickResFol(
            e,
            BundleId,
            props.checkedFolders,
            props.setCheckedFolders,
            props.setCheckedResources
          )
        }
        onContextMenu={(e) =>
          handleRightClick(
            e,
            BundleId,
            props.checkedFolders,
            props.setCheckedFolders,
            props.setCheckedResources
          )
        }
        className={`${
          props.checkedFolders.includes(BundleId)
            ? "text-slate-500"
            : "text-black"
        } font-bold`}
      >
        Bundle: {BundleId}
      </button>{" "}
      {resourceIds &&
        resourceIds.map((resourceId) => {
          return (
            <div key={resourceId}>
              <button
                className={`${
                  props.checkedResources.includes(resourceId)
                    ? "text-slate-500"
                    : "text-black"
                }`}
                onClick={(e) =>
                  handleClickResFol(
                    e,
                    resourceId,
                    props.checkedResources,
                    props.setCheckedResources,
                    props.setCheckedFolders
                  )
                }
                onContextMenu={(e) =>
                  handleRightClick(
                    e,
                    resourceId,
                    props.checkedResources,
                    props.setCheckedResources,
                    props.setCheckedFolders
                  )
                }
              >
                Resource: {resourceId}
              </button>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default BundleComponent;
