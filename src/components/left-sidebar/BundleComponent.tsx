import { BundleFolder } from "@/db/db";
import { useState } from "react";

interface BundleComponentProps {
  bundleFolder: BundleFolder;
}

const BundleComponent = (props: BundleComponentProps) => {
  const [showResources, setShowResources] = useState<boolean>(true);

  const BundleId = props.bundleFolder.id;
  const resourceIds = props.bundleFolder.resourceIds;
  return (
    <div>
      <h1>{BundleId}</h1>
      {resourceIds &&
        resourceIds.map((resourceId) => {
          return (
            <div key={resourceId}>
              <p>{resourceId}</p>
            </div>
          );
        })}
    </div>
  );
};

export default BundleComponent;
