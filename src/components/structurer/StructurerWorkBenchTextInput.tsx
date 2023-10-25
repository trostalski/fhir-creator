import Image from "next/image";
import structurerImg from "@/../data/img/structurer.png";
import { StructurerModes, StructurerWorkBenchTextInputProps } from "@/types";

const StructurerWorkBenchTextInput = (
  props: StructurerWorkBenchTextInputProps
) => {
  const { mode, text, setMode, setText } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-screen w-500">
      <button
        className="bg-blue-500 rounded-md text-white w-full transform hover:bg-blue-700 hover:scale-110"
        onClick={() => props.setMode(StructurerModes.labelText)}
      >
        Label Medical Entities
      </button>
      <button
        className="bg-blue-500 rounded-md text-white w-full transform hover:bg-blue-700 hover:scale-110"
        onClick={() => props.setMode(StructurerModes.segmentText)}
      >
        Segment Text
      </button>
      <Image
        src={structurerImg}
        alt="The shining hero that structures the medical texts"
        width={500}
        height={300}
        className="rounded-full"
      />
    </div>
  );
};

export default StructurerWorkBenchTextInput;
