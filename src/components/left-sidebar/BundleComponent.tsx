import { BundleFolder, ResourcePathRepr } from "@/db/db";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { createPathArrayFromJson } from "@/utils/utils";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";
import { Resource } from "fhir/r4";
import { bundlePoolId, bundlePoolName } from "@/utils/constants";

interface BundleComponentProps {
  bundleFolder: BundleFolder;
  checkedResources: string[];
  setCheckedResources: (checkedResources: string[]) => void;
  checkedFolders: string[];
  setCheckedFolders: (checkedFolders: string[]) => void;
  resToBeCut: string[];
  resToCopy: string[];
  setPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPreviewPathRepr: React.Dispatch<React.SetStateAction<ResourcePathRepr>>;
  resources?: Resource[];
}

const BundleComponent = (props: BundleComponentProps) => {
  const [showResources, setShowResources] = useState<boolean>(false);
  const bundleId = props.bundleFolder.id;
  const bundleName = props.bundleFolder.name;
  const resourceIds = props.bundleFolder.resourceIds;
  const resources = props.resources?.filter((resource) => {
    return resourceIds.includes(resource.id!);
  });

  const handleClickResFol = (
    e: React.MouseEvent,
    itemId: string,
    selectedArr: string[],
    setterFunc: (data: string[]) => void,
    otherSetterFunc: (data: string[]) => void
  ) => {
    otherSetterFunc([]); // to prevent unexpected behaviour, only let either resources or folders be selected at the same time
    if (e.ctrlKey || e.metaKey) {
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
    <div className={`bg-blue-400 p-1 text-white rounded-md`}>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={() => setShowResources(!showResources)}
          className={`p-1 transition duration-300 ease-in-out rounded-md hover:bg-blue-200 ${
            showResources ? "bg-blue-300" : ""
          }`}
        >
          <ExpandAccordionToggle isOpen={showResources} />
        </button>
        <button
          onClick={(e) =>
            handleClickResFol(
              e,
              bundleId,
              props.checkedFolders,
              props.setCheckedFolders,
              props.setCheckedResources
            )
          }
          onContextMenu={(e) =>
            handleRightClick(
              e,
              bundleId,
              props.checkedFolders,
              props.setCheckedFolders,
              props.setCheckedResources
            )
          }
          className={`w-full text-left font-light text-sm truncate hover:bg-blue-200 transition-colors duration-300 ease-in-out px-2 py-1 rounded-md
          ${props.checkedFolders.includes(bundleId) ? "bg-blue-300" : ""} 
          `}
        >
          {`${
            bundleId === bundlePoolId ? bundlePoolName : "Bundle/" + bundleId
          }`}
        </button>
      </div>
      {showResources && resources?.length === 0 && (
        <span className="text-xs">No resources in this bundle.</span>
      )}
      {showResources &&
        resources &&
        resources.map((resource) => {
          return (
            <div
              key={resource.id}
              className="flex flex-row pl-2 items-center justify-between text-xs"
            >
              <button
                className={`${
                  props.checkedResources.includes(resource.id!) && "font-bold"
                } text-white truncate hover:underline`}
                onClick={(e) =>
                  handleClickResFol(
                    e,
                    resource.id!,
                    props.checkedResources,
                    props.setCheckedResources,
                    props.setCheckedFolders
                  )
                }
                onContextMenu={(e) =>
                  handleRightClick(
                    e,
                    resource.id!,
                    props.checkedResources,
                    props.setCheckedResources,
                    props.setCheckedFolders
                  )
                }
              >
                {resource.resourceType + "/" + resource.id}
              </button>
              <button
                className="hover:bg-blue-200 transition-colors duration-300 ease-in-out rounded-md p-1"
                onClick={() => {
                  const resourcePathRepr = createPathArrayFromJson(resource);
                  props.setPreviewOpen(true);
                  props.setPreviewPathRepr({
                    id: resource.id!,
                    data: resourcePathRepr,
                  });
                }}
              >
                <AiOutlineEye size={15} />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default BundleComponent;
