import { IoChevronBackCircleSharp } from "react-icons/io5";

export interface ChangeTextButtonProps {
  onClick: () => void;
}

const ChangeTextButton = (props: ChangeTextButtonProps) => {
  return (
    <button
      className="flex flex-row bg-blue-500 text-white rounded-md transform hover:bg-blue-700 p-2 justify-center items-center"
      onClick={props.onClick}
    >
      <IoChevronBackCircleSharp size={24} />
      Change Text
    </button>
  );
};

export default ChangeTextButton;
