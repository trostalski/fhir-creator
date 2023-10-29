import { InputSelectionProps } from "@/types";
import { useEffect, useState } from "react";

const InputSelection = (props: InputSelectionProps) => {
  const { onSelect, fetchCategories } = props;
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        if (!fetchCategories) {
          throw new Error("No fetchCategories function provided");
        }
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.log("Error fetching categories", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategories();
  }, [fetchCategories]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <select onChange={(e) => onSelect(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default InputSelection;
