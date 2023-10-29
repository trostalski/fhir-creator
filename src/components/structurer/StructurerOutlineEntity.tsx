import { StructurerOutlineEntityProps } from "@/types";
import StructurerOutlineEntityElement from "./StructurerOutlineEntityElement";

const StructuerOutlineEntity = (props: StructurerOutlineEntityProps) => {
  const { outline, setOutline, section, entity, entityName } = props;
  return (
    <div className="flex flex-col ml-1 border rounded-md">
      {entityName}
      {entity.map((entityElement) => {
        return (
          <StructurerOutlineEntityElement
            key={entityElement.item}
            {...props}
            entityElement={entityElement}
          />
        );
      })}
    </div>
  );
};

export default StructuerOutlineEntity;
