import { BundleFolder, ResourcePathRepr } from "@/db/db";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { createPathArrayFromJson } from "@/utils/utils";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";
import { Resource } from "fhir/r4";

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
  const BundleId = props.bundleFolder.id;
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
    <div className="border border-gray-300 rounded-md p-1">
      <div className="flex flex-row items-center gap-2 hover:underline">
        <ExpandAccordionToggle
          isOpen={showResources}
          onClick={() => setShowResources(!showResources)}
        />
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
          } font-light truncate hover:underline`}
        >
          {`${BundleId === "Pool" ? "Resource Pool" : "Bundle/" + BundleId}`}
        </button>{" "}
      </div>
      {showResources &&
        resources &&
        resources.map((resource) => {
          return (
            <div
              key={resource.id}
              className="flex flex-row pl-2 items-center justify-between text-xs hover:underline"
            >
              <button
                className={`${
                  props.checkedResources.includes(resource.id!)
                    ? "text-slate-500"
                    : "text-black"
                } truncate`}
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
              </button>{" "}
              <button
                className="hover:scale-105"
                onClick={() => {
                  const resourcePathRepr = createPathArrayFromJson(resource);
                  props.setPreviewOpen(true);
                  props.setPreviewPathRepr({
                    id: resource.id!,
                    data: resourcePathRepr,
                  });
                }}
              >
                <AiOutlineEye size={15} className="ml-2" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default BundleComponent;
