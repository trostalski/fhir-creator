import { StructurerTextDisplayProps, ValueState } from "@/types";
import { handleAnnotationChange } from "@/utils/structurerUtils";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";

const StructurerTextDisplayLabeler = (props: StructurerTextDisplayProps) => {
  const { text, outline, setOutline, focusedCategory, focusedSection, colors } =
    props;

  let dummyValue: ValueState[] = []; // need this somehow so that the type in the TextAnnotator is not never... might be nice to get rid off for usability

  return (
    <div className="">
      {outline[0] && (
        <TextAnnotator
          content={text}
          outline={outline[0].entities}
          onChange={(value) =>
            handleAnnotationChange({
              value: value,
              outline: outline,
              setOutline: setOutline,
              focusedSection: focusedSection,
              focusedCategory: focusedCategory,
              text: focusedSection?.text,
            })
          }
          value={dummyValue} // need this somehow so that the type in the TextAnnotator is not never... might be nice to get rid off for usability
          colors={colors}
          setOutline={() => {}}
        />
      )}
      ;
    </div>
  );
};

export default StructurerTextDisplayLabeler;
