import { toastError } from "@/toasts";
import {
  SectionInfo,
  LMMSections,
  ValueState,
  EntityElement,
  Entities,
} from "@/types";
import { FormEvent } from "react";

// Function to extract sections from the input
const extractSections = (
  sections: Record<string, string[]>,
  askedFor: boolean,
  text: string
) =>
  Object.entries(sections).map(([key, substrings]) => {
    const startIndex = text.indexOf(substrings[0]);
    const endIndex = text.indexOf(substrings[1], startIndex);
    return {
      key,
      startIndex,
      endIndex: endIndex + substrings[1].length, // adjust to get the last index of the substring
      askedFor,
    };
  });

const checkEndIndex = (
  section: SectionInfo,
  nextSection: SectionInfo,
  text: string
) => {
  // check if endIndex is greater than startIndex, otherwise extend to next section
  if (section.endIndex < section.startIndex) {
    if (nextSection) {
      section.endIndex = nextSection.startIndex;
    } else {
      section.endIndex = text.length;
    }
  }
};

export const prepareIndexList = (
  llmSections: LMMSections | undefined,
  text: string
) => {
  if (!llmSections) {
    return;
  }
  // Extracting askedFor and inferred sections
  const askedForSections = extractSections(
    llmSections.sectionsAskedFor,
    true,
    text
  );
  const inferredSections = extractSections(
    llmSections.sectionsInferred,
    false,
    text
  );

  // Merging and sorting the sections
  const allSections = [...askedForSections, ...inferredSections];
  allSections.sort((a, b) => a.startIndex - b.startIndex);

  // check end index
  for (let i = 0; i < allSections.length; i++) {
    const section = allSections[i];
    const nextSection = allSections[i + 1];
    checkEndIndex(section, nextSection, text);
  }
  // adding unnamed sections
  let unnamedSectionIndex = 0;
  const sectionsWithGaps = allSections.reduce((acc, section, i, arr) => {
    const nextSection = arr[i + 1]; // Look ahead to the next section
    let unnamedSection: SectionInfo | undefined = undefined;
    if (nextSection && nextSection.startIndex > section.endIndex) {
      // If there is a gap between the current section and the next section
      const gapText = text.slice(section.endIndex, nextSection.startIndex);
      // If the gap text only contains newlines and whitespace, you might want to skip adding the unnamed section
      if (gapText.trim().length > 0) {
        unnamedSection = {
          key: `unnamed-${unnamedSectionIndex++}`,
          startIndex: section.endIndex,
          endIndex: nextSection.startIndex,
          askedFor: false,
        };
      } else {
        // If the gap text only contains newlines and whitespace, add the gap text to the current section
        section.endIndex = nextSection.startIndex;
      }
    }
    acc.push(section); // Push the current section first
    if (unnamedSection) {
      acc.push(unnamedSection); // Push the unnamed section second
    }
    return acc;
  }, [] as SectionInfo[]);

  // Handle unnamed section at the start
  if (sectionsWithGaps[0]?.startIndex > 0) {
    sectionsWithGaps.unshift({
      key: `unnamed-${unnamedSectionIndex++}`,
      startIndex: 0,
      endIndex: sectionsWithGaps[0].startIndex,
      askedFor: false,
    });
  }

  // add text to sections
  sectionsWithGaps.forEach((section) => {
    section.text = text.slice(section.startIndex, section.endIndex);
  });

  return sectionsWithGaps;
};

export const transformValueToEntity = (value: ValueState[], text: string) => {
  const entity: EntityElement = {
    item: text.slice(
      value[value.length - 1].start,
      value[value.length - 1].end
    ),
    matches: [[value[value.length - 1].start, value[value.length - 1].end]],
  };
  return entity;
};

interface HandleAnnotationChangeArgs {
  value: ValueState[] | FormEvent<HTMLDivElement>;
  focusedSection: SectionInfo | undefined;
  focusedCategory: string | undefined;
  text: string | undefined;
  setOutline: (outline: SectionInfo[]) => void;
  outline: SectionInfo[];
}

export const handleAnnotationChange = (args: HandleAnnotationChangeArgs) => {
  const { value, focusedSection, focusedCategory, text, setOutline, outline } =
    args;

  if (!focusedCategory) {
    toastError("Please select a Category!");
    return;
  }
  if (!text) {
    toastError("Please set a text!");
    return;
  }
  if (Array.isArray(value)) {
    const entity = transformValueToEntity(value, text);
    if (focusedSection) {
      setOutline(
        outline.map((section) => {
          if (section.key === focusedSection.key) {
            if (!section.entities) {
              return {
                ...section,
                entities: {
                  [focusedCategory]: [entity],
                },
              };
            }
            return {
              ...section,
              entities: {
                ...section.entities,
                [focusedCategory]: [
                  ...(section.entities[focusedCategory] || []),
                  entity,
                ],
              },
            };
          } else {
            return section;
          }
        })
      );
    }
  }
};

export const downloadOutlinePart = (
  outlinePart: SectionInfo[] | SectionInfo | Entities
) => {
  const outlinePartString = JSON.stringify(outlinePart, null, 2);
  const blob = new Blob([outlinePartString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "download.json";
  a.click();
};

export const combineSections = (
  section1: SectionInfo,
  section2: SectionInfo
) => {
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

export const combineEntities = (
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

export const updateMatches = (
  entities: Entities,
  updateIndex: number
): Entities => {
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

export const splitEntities = (
  entities: Entities,
  range: [number, number]
): Entities | undefined => {
  const newEntities: Entities = {};
  for (const key of Object.keys(entities)) {
    const entityElements = entities[key];
    const newEntityElements = entityElements.filter((element) => {
      if (!element.matches) return false;
      if (EntityElementIntersectsSplitRange(element, range)) {
        throw new Error("Please set a split outside of an entity");
      }
      return (
        element.matches[0][0] >= range[0] && element.matches[0][1] <= range[1]
      ); // Only handling the first match here, not decided what to do with multiple matches
    });
    if (newEntityElements.length > 0) {
      const updatedEntityElements = newEntityElements.map((element) => {
        element.matches![0][0] -= range[0];
        element.matches![0][1] -= range[0];
        return element;
      });
      newEntities[key] = updatedEntityElements;
    }
  }
  if (Object.keys(newEntities).length === 0) return undefined;
  return newEntities;
};

export const EntityElementIntersectsSplitRange = (
  element: EntityElement,
  range: [number, number]
) => {
  return (
    (range[0] >= element.matches![0][0] &&
      range[0] <= element.matches![0][1]) || // start of split range is inside entity
    (range[1] >= element.matches![0][0] && range[1] <= element.matches![0][1]) // end of split range is inside entity
  );
};
