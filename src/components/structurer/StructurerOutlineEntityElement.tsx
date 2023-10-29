import { StructurerOutlineEntityElementProps } from "@/types";

const StructurerOutlineEntityElement = (
  props: StructurerOutlineEntityElementProps
) => {
  const { outline, setOutline, section, entity, entityElement } = props;

  return <div className="border rounded-md ml-2">{entityElement.item}</div>;
};

export default StructurerOutlineEntityElement;
