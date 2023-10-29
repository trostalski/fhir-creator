import { Entities, EntityElement } from "@/types";
import { TiDelete } from "react-icons/ti";

interface EntityElementProps {
  outline: Entities;
  setOutline: (outline: Entities) => void;
  entity: EntityElement;
  resourceType: string;
  selectedEntity?: EntityElement;
  setSelectedEntity: (outlineItem?: EntityElement) => void;
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
        className="hover:scale-110 ml-auto flex-shrink-0"
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
