import { StructurerTextDisplayProps } from "@/types";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";

const StructurerTextDisplayLabeler = (props: StructurerTextDisplayProps) => {
  const { text, outline, setOutline } = props;
  return (
    <div className="whitespace-pre">
      {outline[0] && (
        <TextAnnotator
          content={text}
          outline={outline[0].entities}
          onChange={(value) => {}}
          value={[]}
          colors={{}}
          setOutline={() => {}}
        />
      )}
      ;
    </div>
  );
};

export default StructurerTextDisplayLabeler;
