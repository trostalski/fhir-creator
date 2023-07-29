import BundleComponent from "./BundleComponent";
import testBundle from "@/../data/temp/export(30).json";
import { db } from "@/db/db";
import { parseBundle } from "@/db/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { Bundle } from "fhir/r4";

const bundles = [
  {
    id: 1,
    content: [],
  },
  {
    id: 2,
    content: [],
  },
];

const StorageList = () => {
  const bundleFolders = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });
  // if(bundleFolders){
  //     console.log("success, got bundled folder");
  //     console.log(bundleFolders);
  // }
  // console.log(bundleFolders);
  const testBundled = JSON.parse(JSON.stringify(testBundle)) as Bundle;
  return (
    <div>
      <button
        onClick={async () => {
          await parseBundle(testBundled);
          console.log("parsed Bundle");
        }}
      >
        Upload Bundle
      </button>
      <button
        onClick={async () => {
          const bundles = await db.bundleFolders.toArray();
          if (bundles[0].resourceIds) {
            const resources = await db.resources.bulkGet(
              bundles[0].resourceIds
            );
            console.log(resources);
          }
          console.log(bundles);
        }}
      >
        LogBundles
      </button>
      {bundleFolders &&
        bundleFolders.map((bundle) => {
          return (
            <div key={bundle.id}>
              <BundleComponent bundleFolder={bundle} />
            </div>
          );
        })}
      <button
        onClick={async () => {
          await db.bundleFolders.delete("sdfsdf3323423d444");
        }}
      >
        DeleteBundle
      </button>
    </div>
  );
};

export default StorageList;
