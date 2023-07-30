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
  return (
    <div>
      <button className="font-bold">Bundle: {BundleId}</button>{" "}
      <input
        type="checkbox"
        checked={props.checkedFolders.includes(BundleId)}
        onChange={() => {
          props.setCheckedFolders(
            props.checkedFolders.includes(BundleId)
              ? props.checkedFolders.filter((id) => id !== BundleId)
              : [...props.checkedFolders, BundleId]
          );
        }}
      />
      {resourceIds &&
        resourceIds.map((resourceId) => {
          return (
            <div key={resourceId}>
              <button>Resource: {resourceId}</button>{" "}
              <input
                type="checkbox"
                checked={props.checkedResources.includes(resourceId)}
                onChange={() => {
                  props.setCheckedResources(
                    props.checkedResources.includes(resourceId)
                      ? props.checkedResources.filter((id) => id !== resourceId)
                      : [...props.checkedResources, resourceId]
                  );
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BundleComponent;
