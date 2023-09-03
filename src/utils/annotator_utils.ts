import { OldOutline, Outline, OutlineItem, ValueState } from "@/types";

export function llmJsonToAnnotatorFormat(llmJson: Outline) {
    let values: ValueState[] = [];
    for (const [resourceType, entities] of Object.entries(llmJson)) {
      if (entities.length > 0) {
        for (const entity of entities) {
          if (entity.matches && entity.matches.length > 0) {
            values.push({
              start: entity.matches[0][0], // only taking into account the first match atm..., also not handling overlapping matches atm
              end: entity.matches[0][1],
              tag: resourceType,
            });
          }
        }
      }
    }
    return values;
  }
  
  const caseInsensitiveFindIter = (
    substring: string,
    text: string
  ): IterableIterator<RegExpMatchArray> => {
    const pattern = new RegExp(substring, "ig");
    return text.matchAll(pattern);
  };
  
  export const addMatches = (outline: Outline, text: string): void => {
    for (const key in outline) {
      for (const item of outline[key]) {
        const matches = Array.from(caseInsensitiveFindIter(item.item, text));
        item.matches = matches.map((match) => [
          match.index!,
          match.index! + match[0].length,
        ]);
      }
    }
  };
  
  export const transformOutline = (outline: OldOutline): Outline => {
    const newOutline: Outline = {};
  
    for (const key in outline) {
      newOutline[key] = [];
  
      for (const entity of outline[key]) {
        const preppedDict: OutlineItem = { item: entity, matches: [] };
        newOutline[key].push(preppedDict);
      }
    }
  
    return newOutline;
  };

  export function removeKey<T extends object>(obj: T, key: PropertyKey): Partial<T> {
    if (key in obj) {
      const { [key]: deletedKey, ...otherKeys } = obj;
      return otherKeys;
    }
    return obj;
  }