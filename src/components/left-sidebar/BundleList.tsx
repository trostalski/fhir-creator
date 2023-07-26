import { db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { useStore } from "@/stores/useStore";
import { convertObjectToPathArray } from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import omit from "lodash/omit";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { StructureDefinition } from "fhir/r4";

interface BundleListProps {
  setCheckedBundles: (checkedBundles: string[]) => void;
  checkedBundles: string[];
}

const BundleList = (props: BundleListProps) => {
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const { setProfileTree, setMode } = useStore((state) => {
    return { setProfileTree: state.setProfileTree, setMode: state.setMode };
  });
  const [openBundles, setOpenBundles] = React.useState<string[]>([]);

  return (
    <div className="flex flex-col gap-2">
      {bundles?.length === 0 && (
        <div className="text-xs text-gray-500 w-full">No bundles</div>
      )}
      {bundles?.map((bundle) => (
        <div key={bundle.id}>
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
                  setProfileTree(profile, inputData);
                }}
              >
                Bundle/{bundle.id}
              </button>
            </div>
            <input
              type="checkbox"
              checked={props.checkedBundles.includes(bundle.id!)}
              className="ml-2 cursor-pointer"
              onChange={() => {
                props.setCheckedBundles(
                  props.checkedBundles.includes(bundle.id!)
                    ? props.checkedBundles.filter((id) => id !== bundle.id)
                    : [...props.checkedBundles, bundle.id!]
                );
              }}
            />
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
                  <div
                    key={entry.id}
                    className="flex flex-row items-center text-xs whitespace-nowrap"
                  >
                    <span>
                      {entry.resource?.resourceType}/{entry.resource?.id}
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
