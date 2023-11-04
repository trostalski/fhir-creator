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
    rng,
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
        colors={colors} // set colors only if you want need them (currently only for labeler)
        setColors={setColors}
        getColor={getColor}
        focusedCategory={focusedCategory}
        setFocusedCategory={setFocusedCategory}
        rng={rng}
      />
    </div>
  );
};

export default CategorySelector;