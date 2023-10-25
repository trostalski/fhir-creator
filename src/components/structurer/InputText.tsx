import { InputTextProps } from "@/types";
import { useState } from "react";

const InputText = (props: InputTextProps) => {
  const { onSelect, placeholder } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSelect(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md transform hover:scale-110"
      >
        Add
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="border border-blue-500 rounded-md p-2 w-full"
      />
    </form>
  );
};

export default InputText;
