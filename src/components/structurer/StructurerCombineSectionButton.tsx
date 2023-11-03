import {
  CombineSectionButtonState,
  Entities,
  SectionInfo,
  StructurerCombineSectionButtonProps,
} from "@/types";
import { PiUniteFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";

const StructurerCombineSectionButton = (
  props: StructurerCombineSectionButtonProps
) => {
  const { state, outline, setOutline, section } = props;

  const combineSections = (section1: SectionInfo, section2: SectionInfo) => {
    const combinedSection = {
      key: `${section1.key} + ${section2.key}`,
      startIndex: section1.startIndex,
      endIndex: section2.endIndex,
      text: `${section1.text}${section2.text}`,
      entities:
        section1.entities && section2.entities
          ? combineEntities(
              section1.entities,
              section2.entities,
              section1.text!.length
            )
          : section1.entities || section2.entities,
      askedFor: true,
    };
    return combinedSection;
  };

  const combineEntities = (
    entities1: Entities,
    entities2: Entities,
    updateIndex: number
  ): Entities => {
    console.log("entities1: ", entities1);
    console.log("entities2: ", entities2);
    const updatedEntities2 = updateMatches(entities2, updateIndex);
    console.log(updatedEntities2);
    const combinedEntities: Entities = {};
    Object.keys(entities1).forEach((key) => {
      if (updatedEntities2[key]) {
        combinedEntities[key] = [...entities1[key], ...updatedEntities2[key]];
      } else {
        combinedEntities[key] = entities1[key];
      }
    });
    Object.keys(updatedEntities2).forEach((key) => {
      if (!entities1[key]) {
        combinedEntities[key] = updatedEntities2[key];
      }
    });
    return combinedEntities;
  };

  const updateMatches = (entities: Entities, updateIndex: number): Entities => {
    const updatedEntities: Entities = {};
    Object.keys(entities).forEach((key) => {
      const entity = entities[key];
      const updatedEntity = entity.map((element) => {
        if (!element.matches) return element;
        return {
          ...element,
          matches: element.matches.map((match): [number, number] => {
            return [match[0] + updateIndex, match[1] + updateIndex];
          }),
        };
      });
      updatedEntities[key] = updatedEntity;
    });
    return updatedEntities;
  };

  const handleCombineClick = () => {
    const sectionIndex = outline.findIndex((sec) => sec.key === section.key);
    if (sectionIndex === 0 && state === CombineSectionButtonState.CombineAbove)
      return;
    if (
      sectionIndex === outline.length - 1 &&
      state === CombineSectionButtonState.CombineBelow
    )
      return;
    if (state === CombineSectionButtonState.CombineAbove) {
      const combinedSection = combineSections(
        outline[sectionIndex - 1],
        section
      );
      const newOutline = outline.filter(
        (sec) =>
          sec.key !== section.key && sec.key !== outline[sectionIndex - 1].key
      );
      newOutline.splice(sectionIndex - 1, 0, combinedSection);
      setOutline(newOutline);
    } else {
      const combinedSection = combineSections(
        section,
        outline[sectionIndex + 1]
      );
      const newOutline = outline.filter(
        (sec) =>
          sec.key !== section.key && sec.key !== outline[sectionIndex + 1].key
      );
      newOutline.splice(sectionIndex, 0, combinedSection);
      setOutline(newOutline);
    }
  };

  return (
    <div className="bg-blue-500 rounded-md p-1 flex items-center transform hover:scale-105">
      <button
        data-tooltip-id="unite-button"
        data-tooltip-content={`${
          state === CombineSectionButtonState.CombineAbove
            ? "Combine with Section Above"
            : "Combine with Section Below"
        }`}
        onClick={handleCombineClick}
      >
        <PiUniteFill />
      </button>
      <Tooltip id="unite-button" place="left" />
    </div>
  );
};

export default StructurerCombineSectionButton;
