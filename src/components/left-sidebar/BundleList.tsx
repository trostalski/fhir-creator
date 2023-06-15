import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import {
  MdExpand,
  MdExpandLess,
  MdExpandMore,
  MdOutlineClear,
} from "react-icons/md";

const BundleList = () => {
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const [openBundles, setOpenBundles] = React.useState<string[]>([]);

  const deleteBundle = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this bundle?"
    );
    if (!confirm) return;
    db.bundles.delete(id);
  };

  return (
    <div className="flex flex-col gap-2">
      {bundles?.length === 0 && (
        <div className="text-xs text-gray-500 w-full">No bundles</div>
      )}
      {bundles?.map((bundle) => (
        <div className="border boder-gray-200 rounded-md p-1 w-full">
          <div className="flex flex-row items-center w-full text-sm">
            <button
              className="flex flex-row grow items-center overflow-hidden"
              onClick={() => {
                if (openBundles.includes(bundle.id!)) {
                  setOpenBundles(openBundles.filter((id) => id !== bundle.id));
                } else {
                  setOpenBundles([...openBundles, bundle.id!]);
                }
              }}
            >
              {openBundles.includes(bundle.id!) ? (
                <MdExpandLess />
              ) : (
                <MdExpandMore />
              )}
              <span>Bundle/{bundle.id}</span>
            </button>
            <button
              className="hover:scale-105"
              onClick={() => deleteBundle(bundle.id!)}
            >
              <MdOutlineClear size={20} className="ml-2" />
            </button>
          </div>
          {openBundles.includes(bundle.id!) && (
            <div className="w-full overflow-scroll pt-2 pl-2">
              {bundle.entry
                ?.sort(
                  (a, b) =>
                    a.resource?.resourceType.localeCompare(
                      b.resource?.resourceType!
                    ) ?? 0
                )
                .map((entry) => (
                  <div className="flex flex-row items-center text-xs whitespace-nowrap">
                    <span>
                      {entry.resource?.resourceType} / {entry.resource?.id}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BundleList;
