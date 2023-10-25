import {
  StructurerWorkBenchSegmenterProps,
  structureTextWithTemplateAndInferResponse,
} from "@/types";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import InputText from "./InputText";
import DisplayCategoriesBasic from "./DisplayCategoriesBasic";
import { segmentationCategories } from "@/utils/constants";
import { useStore } from "@/stores/useStore";
import { toastError } from "@/toasts";
import { PuffLoader } from "react-spinners";

const StructurerWorkBenchSegmenter = (
  props: StructurerWorkBenchSegmenterProps
) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    segmentationCategories
  );
  const [isLoading, setIslLoading] = useState<boolean>(false);
  const { activeAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
    };
  });

  const handleSelectCategory = (category: string) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const handleLLMSegment = async () => {
    if (!activeAPIKey) {
      toastError("No API Key selected");
      return;
    }
    try {
      setIslLoading(true);
      const response = await fetch(
        "http://localhost:8000/fhirchain/structureTextWithTemplateAndInfer/",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
            sections_to_look_for: selectedCategories,
            api_key: activeAPIKey,
          }),
        }
      );
      const data: structureTextWithTemplateAndInferResponse =
        await response.json();
      setLlmResponse(data.text);
    } catch (error) {
      console.log(error);
    } finally {
      setIslLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <CategorySelector
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        InputComponent={InputText}
        onSelectCategory={handleSelectCategory}
        placeholder="Enter categories to look for in the text (e.g. Medication, History of Present Illness)"
        DisplayComponent={DisplayCategoriesBasic}
      />
      <button
        onClick={async () => await handleLLMSegment()}
        className={`${
          isLoading ? "bg-gray-500" : "bg-blue-500"
        } rounded-md transform hover:scale-y-105 flex flex-row gap-2 p-2 justify-center items-center`}
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "LLM Segment!"}
        {isLoading && <PuffLoader size={20} />}
      </button>
    </div>
  );
};

export default StructurerWorkBenchSegmenter;
