import { Outline, OutlineItem } from "@/types";
import EntityElement from "./EntityElement";

interface ResourceTypeElementProps {
  outline: Outline;
  setOutline: (outline: Outline) => void;
  resourceType: string;
}

const ResourceTypeElement = (props: ResourceTypeElementProps) => {
  return (
    <div className="flex flex-col border rounded-md">
      <button>{props.resourceType}</button>
      {props.outline[props.resourceType].map((entity) => {
        return (
          <EntityElement
            outline={props.outline}
            setOutline={props.setOutline}
            entity={entity}
            key={entity.item}
          />
        );
      })}
    </div>
  );
};

export default ResourceTypeElement;
