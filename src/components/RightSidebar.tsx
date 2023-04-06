import { containsDot, idIsImportant } from "@/pages/utils";
import { Elements } from "@/types";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

interface ProfileCheckboxesProps {
  profileElements: Elements;
  setCheckedIds: React.Dispatch<React.SetStateAction<string[]>>;
  checkedIds: string[];
}

export const ProfileCheckboxes = (props: ProfileCheckboxesProps) => {
  return (
    <div>
      <div className="flex flex-row gap-8 items-center">
        <button
          className="text-blue-800 font-bold"
          onClick={(e) => {
            if (
              props.profileElements?.element.length > props.checkedIds.length
            ) {
              console.log("checked ids: ", props.checkedIds);
              props.setCheckedIds(
                props.profileElements?.element.map((element) => element.id)
              );
            } else {
              props.setCheckedIds([]);
            }
          }}
        >
          toggle all
        </button>
        <button
          className="text-gray-800 font-bold"
          onClick={(e) =>
            props.setCheckedIds(
              props.profileElements.element
                .map((element) => element.id)
                .filter((id) => idIsImportant(id))
            )
          }
        >
          reset
        </button>
      </div>
      {!props.profileElements
        ? null
        : props.profileElements.element
            .filter((element) => containsDot(element.id))
            .map((element) => (
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={props.checkedIds.includes(element.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      props.setCheckedIds((prev) => [...prev, element.id]);
                    } else {
                      props.setCheckedIds((prev) =>
                        prev.filter((id) => id !== element.id)
                      );
                    }
                  }}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {element.id}
                </label>
              </div>
            ))}
    </div>
  );
};

const RightSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      {isOpen ? (
        <div className="relative p-2 w-72 bg-gray-50 h-full overflow-scroll">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex flex-row items-center sticky top-0 w-full bg-inherit h-8"
          >
            <RxHamburgerMenu />
          </button>
          {props.children}
        </div>
      ) : (
        <div className="relative w-12 bg-gray-50 h-full overflow-scroll">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="fixed top-14 right-4"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
