import { Entities, EntityElement } from "@/types";
import ResourceTypeElement from "./ResourceTypeElement";

interface BundleOutlineProps {
  outline?: Entities;
  setOutline: (outline: Entities) => void;
  selectedEntity?: EntityElement;
  setSelectedEntity: (outlineItem?: EntityElement) => void;
}

const BundleOutline = (props: BundleOutlineProps) => {
  return (
    <div className="flex flex-col gap-1">
      {props.outline &&
        Object.keys(props.outline).map((resourceType) => {
          return (
            <div key={resourceType}>
              <ResourceTypeElement
                outline={props.outline!}
                setOutline={props.setOutline}
                resourceType={resourceType}
                selectedEntity={props.selectedEntity}
                setSelectedEntity={props.setSelectedEntity}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BundleOutline;
