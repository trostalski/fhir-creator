import { Outline, OutlineItem } from "@/types";
import { TiDelete } from "react-icons/ti";

interface EntityElementProps {
  outline: Outline;
  setOutline: (outline: Outline) => void;
  entity: OutlineItem;
  resourceType: string;
}

const EntityElement = (props: EntityElementProps) => {
  return (
    <div className="flex flex-row border rounded-md pr-2">
      <button className="truncate">{props.entity.item}</button>
      <TiDelete
        className="hover:scale-110 ml-auto"
        onClick={() => {
          let newOutline = props.setOutline({
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
