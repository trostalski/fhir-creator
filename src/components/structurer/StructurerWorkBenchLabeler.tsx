import { StructurerModes, StructurerWorkBenchLabelerProps } from "@/types";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import { resourceOptions } from "@/utils/constants";
import { defaultFocusResources } from "@/utils/constants";
import InputSelection from "./InputSelection";
import DisplayCategoriesBasic from "./DisplayCategoriesBasic";

const StructurerWorkBenchLabeler = (props: StructurerWorkBenchLabelerProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultFocusResources.map((option) => option.value)
  );

  const handleSelectCategory = (category: string) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <CategorySelector
        InputComponent={InputSelection}
        DisplayComponent={DisplayCategoriesBasic}
        placeholder="Select a resource"
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        onSelectCategory={handleSelectCategory}
        focusedCategory=""
        setFocusedCategory={() => {}}
        fetchCategories={() =>
          Promise.resolve(resourceOptions.map((option) => option.value))
        }
      />
    </div>
  );
};

export default StructurerWorkBenchLabeler;
