import { Outline, OutlineItem } from "@/types";
import { TiDelete } from "react-icons/ti";

interface EntityElementProps {
  outline: Outline;
  setOutline: (outline: Outline) => void;
  entity: OutlineItem;
  resourceType: string;
  selectedEntity?: OutlineItem;
  setSelectedEntity: (outlineItem?: OutlineItem) => void;
}

const EntityElement = (props: EntityElementProps) => {
  return (
    <div className="flex flex-row border rounded-md pr-2">
      <button
        className="truncate"
        onClick={() => {
          props.setSelectedEntity(
            props.selectedEntity === props.entity ? undefined : props.entity
          );
        }}
      >
        {props.entity.item}
      </button>
      <TiDelete
        className="hover:scale-110 ml-auto"
        onClick={() => {
          props.setOutline({
            ...props.outline,
            [props.resourceType]: props.outline[props.resourceType].filter(
              (entity) => {
                return entity !== props.entity;
              }
            ),
          });
        }}
      />
    </div>
  );
};

export default EntityElement;
