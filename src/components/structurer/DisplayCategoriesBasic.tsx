import { DisplayCategoriesProps } from "@/types";
import { TiDelete } from "react-icons/ti";

const DisplayCategoriesBasic = (props: DisplayCategoriesProps) => {
  const {
    selectedCategories,
    setSelectedCategories,
    colors,
    focusedCategory,
    getColor,
    setColors,
    setFocusedCategory,
  } = props;

  return (
    <div className="flex flex-row flex-wrap overflow-scroll h-full border border-black rounded-md p-2 gap-1">
      {selectedCategories.map((category) => (
        <div
          key={category}
          className="flex flex-row gap-1 border border-black p-1 rounded-md"
        >
          {category}
          <TiDelete
            className="transform hover:scale-110"
            onClick={() =>
              setSelectedCategories(
                selectedCategories.filter(
                  (selectedCategory) => selectedCategory !== category
                )
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayCategoriesBasic;
