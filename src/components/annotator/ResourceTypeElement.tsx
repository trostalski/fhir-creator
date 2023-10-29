import { Entities, EntityElement } from "@/types";
import EntityElement from "./EntityElement";

interface ResourceTypeElementProps {
  outline: Entities;
  setOutline: (outline: Entities) => void;
  resourceType: string;
  selectedEntity?: EntityElement;
  setSelectedEntity: (outlineItem?: EntityElement) => void;
}

const ResourceTypeElement = (props: ResourceTypeElementProps) => {
  return (
    <div className="flex flex-col border rounded-md">
      <button>{props.resourceType}</button>
      {props.outline[props.resourceType].map((entity) => {
        return (
          <EntityElement
            selectedEntity={props.selectedEntity}
            setSelectedEntity={props.setSelectedEntity}
            outline={props.outline}
            setOutline={props.setOutline}
            entity={entity}
            resourceType={props.resourceType}
            key={entity.item}
          />
        );
      })}
    </div>
  );
};

export default ResourceTypeElement;
