import { PathCounter } from "@/types";
import { removeLastIndex } from "@/utils/path_utils";
import { parseMaxString } from "@/utils/utils";
import { ElementDefinition } from "fhir/r4";
import { useState } from "react";

export function usePathCounter() {
  const [pathCounter, setPathCounter] = useState<PathCounter[]>([]);

  function incrementPathCounter(path: string) {
    path = removeLastIndex(path);
    // get respective path counter
    const pathCounterObj = pathCounter.find((obj) => obj.path === path);
    // increment path counter
    if (pathCounterObj) {
      pathCounterObj.count++;
    } else {
      const pathWoIndex = removeLastIndex(path);
      pathCounter.push({ path: pathWoIndex, count: 2 });
    }
    // update path counter
    setPathCounter(pathCounter);
  }

  function decrementPathCounter(path: string) {
    // get respective path counter
    path = removeLastIndex(path);
    const pathCounterObj = pathCounter.find((obj) => obj.path === path);
    // decrement path counter
    if (pathCounterObj) {
      pathCounterObj.count--;
    }
    // remove path counter if count is 0
    if (pathCounterObj && pathCounterObj.count === 0) {
      pathCounter.splice(pathCounter.indexOf(pathCounterObj), 1);
    }
    // update path counter
    setPathCounter(pathCounter);
  }

  function evaluatePathCounter(path: string, maxCardinality: number) {
    let result = true;
    // get respective path counter
    const pathCounterObj = pathCounter.find((obj) => obj.path === path);
    // compare path counter with max cardinality
    if (pathCounterObj && pathCounterObj.count >= maxCardinality) {
      result = false;
    }
    return result;
  }

  function evaluateRenderAddButton(element: ElementDefinition, path: string) {
    path = removeLastIndex(path);
    let result = true;
    // check the elements max cardinality
    const max = parseMaxString(element.max!);
    // evaluate path counter
    const counterEvaluation = evaluatePathCounter(path, max);
    if (max <= 1 || !counterEvaluation) {
      result = false;
    }
    return result;
  }

  return {
    pathCounter,
    incrementPathCounter,
    decrementPathCounter,
    evaluatePathCounter,
    evaluateRenderAddButton,
  };
}
