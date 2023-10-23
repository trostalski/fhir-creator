import Image from "next/image";
import structurerImg from "@/../data/img/structurer.png";
import { StructurerModes, StructurerTextInputProps } from "@/types";

const StructurerTextInput = (props: StructurerTextInputProps) => {
  return (
    <div className="flex flex-row gap-4">
      <textarea
        className="rounded"
        rows={30}
        cols={60}
        placeholder="Paste a medical text to be structured"
      ></textarea>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="flex flex-col items-center gap-3 w-500">
          <Image
            src={structurerImg}
            alt="The shining hero that structures the medical texts"
            width={500}
            height={300}
            className="rounded-full"
          />
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
        </div>
      </div>
    </div>
  );
};

export default StructurerTextInput;
