import { toastError } from "@/toasts";
import {
  SectionInfo,
  LMMSections,
  ValueState,
  EntityElement,
  Entities,
  UnmatchedEntities,
  NoMatchesLLM,
} from "@/types";
import { FormEvent } from "react";
import { addMatches } from "./annotator_utils";

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

export const findNoMatches = (
  matchedOutline: Entities
): UnmatchedEntities | undefined => {
  let noMatches: UnmatchedEntities | undefined = {};
  for (const key in matchedOutline) {
    for (const entity of matchedOutline[key]) {
      if (!entityElementHasMatches(entity)) {
        if (!noMatches[key]) {
          noMatches[key] = [entity];
        } else {
          noMatches[key] = [...noMatches[key], entity];
        }
      }
    }
  }
  if (Object.keys(noMatches).length === 0) {
    noMatches = undefined;
  }
  return noMatches;
};

export const prepareNotMatchesLLM = (
  unmatchedEntities: UnmatchedEntities
): NoMatchesLLM => {
  const noMatchesLLM: NoMatchesLLM = {};
  for (const key in unmatchedEntities) {
    const entityElements: { [key: string]: string }[] = [];
    unmatchedEntities[key].forEach((entity) => {
      entityElements.push({
        [entity.item]: "",
      });
    });
    noMatchesLLM[key] = entityElements;
  }
  return noMatchesLLM;
};

export const entityElementHasMatches = (
  entityElement: EntityElement
): boolean => {
  if (entityElement.matches && entityElement.matches.length > 0) {
    return true;
  }
  return false;
};

export const textToUnmatchedEntities = (
  unmatchedEntities: UnmatchedEntities,
  matchedEntities: Entities,
  text: string
) => {
  if (!unmatchedEntities) {
    return;
  }
  for (const key in unmatchedEntities) {
    for (const entity of unmatchedEntities[key]) {
      const unmatchedIndex = matchedEntities[key].findIndex(
        // index of entity in matchedEntities
        (matchedEntity) => {
          return matchedEntity.item === entity.item;
        }
      );

      // define the text that should be send to the LLM for retry, find the next upper and lower entityElements that were matched
      const textStartIndex = findStartIndexForUnmatch(
        unmatchedIndex,
        matchedEntities[key]
      );
      const textEndIndex = findEndIndexForUnmatch(
        unmatchedIndex,
        matchedEntities[key]
      );

      const unmatchedText = text.substring(
        textStartIndex ? textStartIndex : 0,
        textEndIndex ? textEndIndex : text.length
      );

      entity.text = unmatchedText;
    }
  }
};

export const findStartIndexForUnmatch = (
  unmatchedIndex: number,
  entity: EntityElement[]
): number | undefined => {
  for (let i = unmatchedIndex; i >= 0; i--) {
    if (entityElementHasMatches(entity[i])) {
      return entity[i].matches![0][1];
    }
  }
  return undefined;
};
export const findEndIndexForUnmatch = (
  unmatchedIndex: number,
  entity: EntityElement[]
): number | undefined => {
  for (let i = unmatchedIndex; i < entity.length; i++) {
    if (entityElementHasMatches(entity[i])) {
      return entity[i].matches![0][1];
    }
  }
  return undefined;
};

export const handleUnmatchedEntities = async (
  matchedOutline: Entities,
  text: string,
  apiKey: string
) => {
  const unmatchedEntities = findNoMatches(matchedOutline);
  if (unmatchedEntities) {
    textToUnmatchedEntities(unmatchedEntities, matchedOutline, text);
    const noMatchesLLM = prepareNotMatchesLLM(unmatchedEntities);
    const matchedEntitiesLLM = await callLLMUnmatches(
      noMatchesLLM,
      text,
      apiKey
    );
    if (!matchedEntitiesLLM) return;
    const transformedMatchedEntitiesLLM =
      transformUnmatchedEntitiesLLM(matchedEntitiesLLM);
    addMatches(transformedMatchedEntitiesLLM, text);
    mergeUnmatchedIntoEntities(
      matchedOutline,
      transformedMatchedEntitiesLLM,
      matchedEntitiesLLM
    );
    console.log(
      "matchedEntities after LLM Call: ",
      transformedMatchedEntitiesLLM
    );
    console.log("matched outline after LLM call: ", matchedOutline);
  }
};

export const reduceMatchedOutline = (
  matchedOutline: Entities,
  matchedEntitiesLLM: MatchedEntitiesLLM
) => {
  for (const key of Object.keys(matchedEntitiesLLM)) {
    const toBeRemoved: string[] = [];
    for (const e of matchedEntitiesLLM[key]) {
      const eKey = Object.keys(e)[0];
      toBeRemoved.push(eKey);
    }
    const reducedEntityElements: EntityElement[] = matchedOutline[key].reduce(
      (acc: EntityElement[], currentE: EntityElement) => {
        if (!toBeRemoved.includes(currentE.item)) {
          acc.push(currentE);
        }
        return acc;
      },
      []
    );
    matchedOutline[key] = reducedEntityElements;
  }
};

export const mergeUnmatchedIntoEntities = (
  matchedOutline: Entities,
  transformedMatchedEntitiesLLM: Entities,
  matchedEntitiesLLM: MatchedEntitiesLLM
) => {
  // remove unmatched entityElements from Original Entities Object
  reduceMatchedOutline(matchedOutline, matchedEntitiesLLM);
  // add new entityElements
  for (const key of Object.keys(transformedMatchedEntitiesLLM)) {
    for (const e of transformedMatchedEntitiesLLM[key]) {
      matchedOutline[key].push(e);
    }
    // sort in the end (optional)
    matchedOutline[key].sort((a, b) => {
      // Check if `matches` is defined in both `a` and `b` objects
      const aMatches = a.matches?.[0]?.[0]; // optional chaining
      const bMatches = b.matches?.[0]?.[0]; // optional chaining

      // Compare `aMatches` and `bMatches`, handling undefined values gracefully
      if (aMatches !== undefined && bMatches !== undefined) {
        return aMatches - bMatches;
      } else if (aMatches !== undefined) {
        return -1; // `a` comes before `b` because `b` has undefined `matches`
      } else if (bMatches !== undefined) {
        return 1; // `b` comes before `a` because `a` has undefined `matches`
      } else {
        return 0; // Both `a` and `b` have undefined `matches`, consider them equal
      }
    });
  }
};

interface MatchedEntitiesLLM {
  [key: string]: { [key: string]: string }[]; // first key: Entity (e.g. "Condition"), second key: entityElement (e.g. "diabetes")
}

export const transformUnmatchedEntitiesLLM = (
  matchedEntitiesLLM: MatchedEntitiesLLM
) => {
  const matchedEntities: Entities = {};
  for (const key of Object.keys(matchedEntitiesLLM)) {
    matchedEntities[key] = [];
    for (const e of matchedEntitiesLLM[key]) {
      const entityElement: EntityElement = { item: e[Object.keys(e)[0]] };
      matchedEntities[key].push(entityElement);
    }
  }
  return matchedEntities;
};
export const callLLMUnmatches = async (
  noMatchesLLM: NoMatchesLLM,
  text: string,
  apiKey: string | undefined,
  gptVersion: string = "3"
) => {
  if (!apiKey) {
    toastError("API key missing");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:8000/fhirchain/bundleOutlineUnmatched?gptVersion=${gptVersion}/`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          entities: noMatchesLLM,
          api_key: apiKey,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("There was an error with your request");
    }
    const data = await response.json();
    if (data && data.entities) {
      console.log("data", data);
      return data.entities as MatchedEntitiesLLM;
    } else {
      throw new Error(
        "There was an error with the data returned from your request"
      );
    }
  } catch (error) {
    toastError(error.message);
  }
};
