import {
  containsDot,
  elementContainsValidType,
  idIsImportant,
} from "@/pages/utils";
import { Element } from "@/types";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

interface ProfileCheckboxesProps {
  profileElements: Element[];
  setCheckedIds: React.Dispatch<React.SetStateAction<string[]>>;
  checkedIds: string[];
}

export const ProfileCheckboxes = (props: ProfileCheckboxesProps) => {
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
            if (props.profileElements.length > props.checkedIds?.length) {
              props.setCheckedIds(
                props.profileElements.map((element) => element.id)
              );
            } else {
              props.setCheckedIds([]);
            }
          }}
        >
          toggle
        </button>
        <button
          className="text-gray-500 font-bold text-xs"
          onClick={(e) =>
            props.setCheckedIds(
              props.profileElements
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
        : props.profileElements
            .filter(
              (element) =>
                containsDot(element.id) && elementContainsValidType(element)
            )
            .filter((element) => {
              if (searchInput) {
                return element.id
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              } else {
                return true;
              }
            })
            .map((element) => (
              <div className="flex items-center" key={element.id}>
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
                  className="w-max-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-gray-300"
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
    <div className="relative bg-gray-50 shadow-md h-full overflow-scroll">
      {isOpen ? (
        <div className="w-60 bg-inherit">
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
