import { idIsImportant } from "../utils/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

interface ProfileCheckboxesProps {
  setCheckedBranchIds: React.Dispatch<React.SetStateAction<string[]>>;
  branchIds: string[];
  checkedBranchIds: string[];
}

export const BranchIdsCheckboxes = (props: ProfileCheckboxesProps) => {
  const [searchInput, setSearchInput] = React.useState<string | null>(null);
  return (
    <div className="flex flex-col gap-1 p-2">
      <div className="p-2 flex flex-row gap-2 items-center w-full">
        <input
          placeholder="search"
          className="h-8 w-full border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="text-blue-600 font-bold text-xs"
          onClick={(e) => {
            if (props.branchIds.length > props.checkedBranchIds?.length) {
              props.setCheckedBranchIds(props.branchIds);
            } else {
              props.setCheckedBranchIds([]);
            }
          }}
        >
          toggle
        </button>
        <button
          className="text-gray-500 font-bold text-xs"
          onClick={(e) =>
            props.setCheckedBranchIds(
              props.branchIds.filter((id) => idIsImportant(id))
            )
          }
        >
          reset
        </button>
      </div>
      {!props.branchIds
        ? null
        : props.branchIds
            .filter((id) => {
              if (searchInput) {
                return id.toLowerCase().includes(searchInput.toLowerCase());
              } else {
                return true;
              }
            })
            .map((id) => (
              <div className="flex items-center" key={id}>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={props.checkedBranchIds.includes(id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      props.setCheckedBranchIds((prev) => [...prev, id]);
                    } else {
                      props.setCheckedBranchIds(
                        props.checkedBranchIds.filter((i) => i !== id)
                      );
                    }
                  }}
                  className="w-max-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-gray-300"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  {id}
                </label>
              </div>
            ))}
    </div>
  );
};

const RightSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`relative bg-gray-50 shadow-md h-full overflow-scroll ${
        isOpen ? "w-96" : "w-12"
      }`}
    >
      {isOpen ? (
        <div className="bg-inherit">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex p-2 flex-row bg-inherit items-center sticky top-2 w-full h-8"
          >
            <RxHamburgerMenu />
          </button>
          {props.children}
        </div>
      ) : (
        <div className="w-12 bg-inherit">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="fixed top-12 right-4"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
