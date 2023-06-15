import { db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { useStore } from "@/stores/useStore";
import { convertObjectToPathArray } from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import omit from "lodash/omit";
import {
  MdExpand,
  MdExpandLess,
  MdExpandMore,
  MdOutlineClear,
} from "react-icons/md";
import { StructureDefinition } from "fhir/r4";

const BundleList = () => {
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.setProfileTree, setMode: state.setMode };
  });
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
            <div className="flex flex-row gap-2 items-center grow overflow-hidden">
              <button
                className=""
                onClick={() => {
                  if (openBundles.includes(bundle.id!)) {
                    setOpenBundles(
                      openBundles.filter((id) => id !== bundle.id)
                    );
                  } else {
                    setOpenBundles([...openBundles, bundle.id!]);
                  }
                }}
              >
                {openBundles.includes(bundle.id!) ? (
                  <MdExpandLess size={20} className="hover:scale-110" />
                ) : (
                  <MdExpandMore size={20} className="hover:scale-110" />
                )}
              </button>
              <button
                className="hover:underline"
                onClick={async () => {
                  const profile: StructureDefinition = await getBaseProfile(
                    "Bundle"
                  );
                  const inputData = convertObjectToPathArray(
                    omit(bundle, "entry")
                  );
                  console.log("budnle input data: ", inputData);
                  setProfileTree(profile, inputData);
                }}
              >
                Bundle/{bundle.id}
              </button>
            </div>
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
