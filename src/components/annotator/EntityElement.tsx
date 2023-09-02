import { Outline, OutlineItem } from "@/types";

interface EntityElementProps {
  outline: Outline;
  setOutline: (outline: Outline) => void;
  entity: OutlineItem;
}

const EntityElement = (props: EntityElementProps) => {
  return (
    <div className="">
      <button className="truncate">{props.entity.item}</button>
    </div>
  );
};

export default EntityElement;
