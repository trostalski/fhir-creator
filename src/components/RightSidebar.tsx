import { idIsImportant } from "../utils/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { useStore } from "@/stores/useStore";

export const BranchIdsCheckboxes = () => {
  const [searchInput, setSearchInput] = React.useState<string | null>(null);


  const {
    setCheckedBranchIds,
    checkedBranchIds,
    branchIds } = useStore(
    (state) => {
      return {
        setCheckedBranchIds: state.setCheckedBranchIds,
        checkedBranchIds: state.checkedBranchIds,
        branchIds: state.branchIds
      };
    }
  );

  return (
    <div className="flex flex-col gap-1 p-2">
      <input
        placeholder="search"
        className="h-8 w-full border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className="p-2 flex flex-row gap-2 justify-end items-center w-full">
        <button
          className="text-blue-600 font-bold text-xs"
          onClick={(e) => {
            if (branchIds.length > checkedBranchIds?.length) {
              setCheckedBranchIds(branchIds);
            } else {
              setCheckedBranchIds([]);
            }
          }}
        >
          toggle
        </button>
        <button
          className="text-gray-500 font-bold text-xs"
          onClick={(e) =>
            setCheckedBranchIds(
              branchIds.filter((id) => idIsImportant(id))
            )
          }
        >
          reset
        </button>
      </div>

      {!branchIds
        ? null
        : branchIds
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
                  checked={checkedBranchIds.includes(id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckedBranchIds([...useStore.getState().checkedBranchIds, id]);
                    } else {
                      setCheckedBranchIds(
                        checkedBranchIds.filter((i) => i !== id)
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
  const { profileTree } = useStore((state) => {
    return {
      profileTree: state.activeProfileTree,
    };
  });

  if (!profileTree) {
    return null;
  }

  return (
    <div
      className={`relative shadow-md h-full overflow-scroll ${
        isOpen ? "w-72" : "w-12"
      }
      `}
    >
      {isOpen ? (
        <div className="bg-inherit">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex p-2 flex-row bg-inherit items-center sticky top-2 w-full h-8"
            title="toggle sidebar"
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
            title="toggle sidebar"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
