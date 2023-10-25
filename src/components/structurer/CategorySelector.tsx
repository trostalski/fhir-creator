import { CategorySelectorProps } from "@/types";
import { TiDelete } from "react-icons/ti";

const CategorySelector = (props: CategorySelectorProps) => {
  const {
    selectedCategories,
    setSelectedCategories,
    placeholder,
    InputComponent,
    onSelectCategory,
    fetchCategories,
    DisplayComponent,
    colors,
    focusedCategory,
    setFocusedCategory,
    setColors,
    getColor,
  } = props;

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputComponent
        onSelect={onSelectCategory}
        placeholder={placeholder}
        fetchCategories={fetchCategories}
      />
      <DisplayComponent
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        colors={colors}
        setColors={setColors}
        getColor={getColor}
        focusedCategory={focusedCategory}
        setFocusedCategory={setFocusedCategory}
      />
    </div>
  );
};

export default CategorySelector;
