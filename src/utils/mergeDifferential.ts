import { ElementDefinition, StructureDefinition } from "fhir/r4";
import { isSliceElement } from "./utils";

const updateElementWithOther = (
  element: ElementDefinition,
  otherElement: ElementDefinition
) => {
  // merge element with otherElement, properties of otherElement overwrite properties of element
  const updatedElement = { ...element, ...otherElement };
  return updatedElement;
};

const elmentsHaveSameIdStem = (
  element1: ElementDefinition,
  element2: ElementDefinition
) => {
  let result = false;
  // remove first path element
  const id1 = element1.id!.split(".").slice(1).join(".");
  const id2 = element2.id!.split(".").slice(1).join(".");
  if (id1.startsWith(id2 + ".") || id1.startsWith(id2 + ":")) {
    result = true;
  }
  return result;
};

export const mergeSliceElement = (
  sliceElement: ElementDefinition,
  baseElements: ElementDefinition[],
  differentialElements: ElementDefinition[]
) => {
  let updatedElement;

  const diffElement = differentialElements.find(
    (element) => element.path === sliceElement.path
  );

  if (diffElement) {
    updatedElement = updateElementWithOther(diffElement, sliceElement);
  }
  const baseElement = baseElements.find(
    (element) => element.path === sliceElement.path
  );
  if (baseElement) {
    updatedElement = updateElementWithOther(baseElement, sliceElement);
  }
  if (updatedElement) {
    return updatedElement;
  } else {
    return sliceElement;
  }
};

export const mergeDifferentialWithSnapshot = (
  baseProfile: StructureDefinition,
  differentialProfile: StructureDefinition
) => {
  let elements: ElementDefinition[] = [];

  // elements that exist in base profile
  elements = baseProfile.snapshot!.element.map((baseElement) => {
    const differentialElement = differentialProfile.differential!.element.find(
      (diffElement) => diffElement.id === baseElement.id
    );
    if (differentialElement) {
      // update base element with differential element
      return updateElementWithOther(baseElement, differentialElement);
    }
    return baseElement;
  });

  // new elements that dont exist in base profile
  for (let differentialElement of differentialProfile.differential!.element) {
    // merge base element into slice element
    if (isSliceElement(differentialElement)) {
      differentialElement = mergeSliceElement(
        differentialElement,
        elements,
        differentialProfile.differential!.element
      );
    }

    const elementExists = elements.some(
      (element) => element.id === differentialElement.id
    );

    if (!elementExists) {
      let foundElement = false;

      for (let index = 0; index < elements.length; index++) {
        // if slice element, merge with base element without slice paths in id
        let element = elements[index];

        if (elmentsHaveSameIdStem(differentialElement, element)) {
          elements.splice(index + 1, 0, differentialElement);
          foundElement = true;
          break;
        }
      }

      if (!foundElement) {
        elements.push(differentialElement);
      }
    }
  }
  return elements;
};
