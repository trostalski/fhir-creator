import { StructurerOutlineEntityElementProps } from "@/types";
import { TiDelete } from "react-icons/ti";

const StructurerOutlineEntityElement = (
  props: StructurerOutlineEntityElementProps
) => {
  const { outline, setOutline, section, entity, entityElement, entityName } =
    props;

  const handleXClick = () => {
    setOutline(
      outline.map((outlineSection) => {
        if (outlineSection.key === section.key) {
          return {
            ...outlineSection,
            entities: {
              ...outlineSection.entities,
              [entityName]: entity.filter((e) => e.item !== entityElement.item),
            },
          };
        } else {
          return outlineSection;
        }
      })
    );
  };

  return (
    <div
      className={`${
        !entityElement.matches || entityElement.matches.length === 0
          ? "bg-red-500"
          : ""
      } border-t border-black ml-2 flex flex-row justify-between items-center p-1 gap-1 transform hover:scale-105`}
    >
      <div>{entityElement.item}</div>
      <TiDelete onClick={() => handleXClick()} className="flex-shrink-0" />
    </div>
  );
};

export default StructurerOutlineEntityElement;
