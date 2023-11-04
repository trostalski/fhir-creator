import { Entities, SectionInfo, StructurerSplitTextModalProps } from "@/types";
import ModalWrapper from "../ModalWrapper";
import { LuSplitSquareHorizontal } from "react-icons/lu";
import { check } from "prettier";
import EntityElement from "../annotator/EntityElement";
import { splitEntities, updateMatches } from "@/utils/structurerUtils";
import { toastError } from "@/toasts";

const StructurerSplitSectionModal = (props: StructurerSplitTextModalProps) => {
  const {
    setShowSplitSectionModal,
    splitSection,
    setOutline,
    outline,
    setSpliceSection,
  } = props;

  const handleSplitSectionClick = () => {
    const selection = window.getSelection();
    if (selection && selection.anchorNode && splitSection.text) {
      const offset = selection.focusOffset;

      // prepare the text
      const newSection1Text = splitSection.text.substring(0, offset);
      const newSection2Text = splitSection.text.substring(offset);

      // prepare the entities
      let newSection1Entities: Entities | undefined;
      let newSection2Entities: Entities | undefined;
      if (splitSection.entities) {
        try {
          newSection1Entities = splitEntities(splitSection.entities, [
            0,
            offset,
          ]);
          newSection2Entities = splitEntities(splitSection.entities, [
            offset,
            splitSection.text.length,
          ]);
        } catch (error) {
          toastError(error.message);
          return;
        }
      }

      // prepare the new sections
      const newSection1: SectionInfo = {
        key: splitSection.key + ".0",
        askedFor: splitSection.askedFor,
        startIndex: splitSection.startIndex,
        endIndex: splitSection.startIndex + offset,
        text: newSection1Text,
        entities: newSection1Entities ? newSection1Entities : undefined,
      };
      const newSection2: SectionInfo = {
        key: splitSection.key + ".1",
        askedFor: splitSection.askedFor,
        startIndex: splitSection.startIndex + offset,
        endIndex: splitSection.endIndex,
        text: newSection2Text,
        entities: newSection2Entities ? newSection2Entities : undefined,
      };

      // splice the outline
      const splitSectionIndex = outline.findIndex(
        (section) => section.key === splitSection.key
      );
      const newOutline = JSON.parse(JSON.stringify(outline)); // getting weird behaviour when splicing on outline directly
      newOutline.splice(splitSectionIndex, 1, newSection1, newSection2);
      setOutline(newOutline);

      // Reset selection state after split
      setSpliceSection(undefined);
      setShowSplitSectionModal(false);
    }
  };

  return (
    <ModalWrapper setShow={setShowSplitSectionModal}>
      <div>
        <p>
          Click where you want to set the split indicator. Then click the button
          below.
        </p>
        {splitSection.text && (
          <div
            className="border border-gray-300 p-2 my-2 rounded-md whitespace-pre"
            contentEditable
            key={splitSection.key}
            dangerouslySetInnerHTML={{ __html: splitSection.text }}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          ></div>
        )}

        <button
          onClick={handleSplitSectionClick}
          className="bg-blue-500 rounded-md p-1 transform hover:scale-105 flex items-center gap-1"
        >
          <LuSplitSquareHorizontal />
          Split
        </button>
      </div>
    </ModalWrapper>
  );
};

export default StructurerSplitSectionModal;
