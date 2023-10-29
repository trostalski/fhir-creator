import { SectionInfo, LMMSections } from "@/types";

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

  // Adding unnamed sections
  // const sectionsWithGaps = allSections.reduce((acc, section, i, arr) => {
  //   const previousSection = arr[i - 1];
  //   if (previousSection && section.startIndex > previousSection.endIndex) {
  //     // if section text only contains newlines and whitespace, add to previous section
  //     const sectionText = text.slice(
  //       previousSection.endIndex,
  //       section.startIndex
  //     );
  //     // if (sectionText.trim().length === 0) {
  //     //   previousSection.endIndex = section.endIndex;
  //     // }
  //     acc.push({
  //       key: "unnamed",
  //       startIndex: previousSection.endIndex,
  //       endIndex: section.startIndex,
  //       askedFor: false,
  //     });
  //   }
  //   acc.push(section);
  //   return acc;
  // }, [] as IndexSection[]);

  // Adding unnamed sections
  const sectionsWithGaps = allSections.reduce((acc, section, i, arr) => {
    const nextSection = arr[i + 1]; // Look ahead to the next section
    let unnamedSection: SectionInfo | undefined = undefined;
    if (nextSection && nextSection.startIndex > section.endIndex) {
      // If there is a gap between the current section and the next section
      const gapText = text.slice(section.endIndex, nextSection.startIndex);
      // If the gap text only contains newlines and whitespace, you might want to skip adding the unnamed section
      if (gapText.trim().length > 0) {
        unnamedSection = {
          key: "unnamed",
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
      key: "unnamed",
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
