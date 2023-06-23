import Layout from "@/components/Layout";
import AllOverview from "@/components/explorer/AllOverview";
import ResourceJsonViewer from "@/components/explorer/ResourceJsonViewer";
import { useStore } from "@/stores/useStore";
import React from "react";

export enum ViewFormat {
  JSON = "json",
  OVERVIEW = "overview",
}
export enum ViewEntity {
  ALL = "all",
  RESOURCE = "resource",
  PROFILE = "profile",
  BUNDLE = "bundle",
}

const Explorer = () => {
  const [viewFormat, setViewFormat] = React.useState<ViewFormat>(
    ViewFormat.OVERVIEW
  );
  const [viewEntity, setViewEntity] = React.useState<ViewEntity>(
    ViewEntity.ALL
  );
  const { profileTree, resource, bundle, profile } = useStore((state) => {
    return {
      profileTree: state.activeProfileTree,
      resource: state.activeResource,
      profile: state.activeProfile,
      bundle: state.activeBundle,
    };
  });

  return (
    <div>
      <Layout>
        <div className="flex flex-col w-full pb-10 pt-4 overflow-scroll gap-2 px-12">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-center">
              <span className="text-gray-600">View Entity:</span>
              <button
                className={`text-gray-600 border-2 w-16 rounded-md p-2 hover:scale-105 ${
                  viewEntity === ViewEntity.ALL ? "bg-gray-200" : ""
                }`}
                onClick={() => setViewEntity(ViewEntity.ALL)}
              >
                All
              </button>
              <button
                className={`text-gray-600 border-2 rounded-md p-2 hover:scale-105 ${
                  viewEntity === ViewEntity.PROFILE ? "bg-gray-200" : ""
                }`}
                onClick={() => setViewEntity(ViewEntity.PROFILE)}
              >
                Profile
              </button>
              <button
                className={`text-gray-600 border-2 rounded-md p-2 hover:scale-105 ${
                  viewEntity === ViewEntity.RESOURCE ? "bg-gray-200" : ""
                }`}
                onClick={() => setViewEntity(ViewEntity.RESOURCE)}
              >
                Resource
              </button>
              <button
                className={`text-gray-600 border-2 rounded-md p-2 hover:scale-105 ${
                  viewEntity === ViewEntity.BUNDLE ? "bg-gray-200" : ""
                }`}
                onClick={() => setViewEntity(ViewEntity.BUNDLE)}
              >
                Bundle
              </button>
            </div>
            <div className="flex flex-row gap-4"></div>
            <div className="flex flex-row gap-4 items-center">
              <span className="text-gray-600">View Format:</span>
              <button
                className={`text-gray-600 border-2 rounded-md p-2 hover:scale-105 ${
                  viewFormat === ViewFormat.OVERVIEW ? "bg-gray-200" : ""
                }`}
                onClick={() => setViewFormat(ViewFormat.OVERVIEW)}
              >
                Overview
              </button>
              <button
                className={`text-gray-600 border-2 rounded-md p-2 hover:scale-105 ${
                  viewFormat === ViewFormat.JSON ? "bg-gray-200" : ""
                }`}
                disabled={viewEntity === ViewEntity.ALL}
                onClick={() => setViewFormat(ViewFormat.JSON)}
              >
                JSON
              </button>
            </div>
          </div>
          <hr></hr>
          {!resource && !bundle ? (
            <span className="text-gray-500 pt-4 px-8">
              Please select a resource or bundle from the storage.
            </span>
          ) : null}
          <AllOverview />
        </div>
      </Layout>
    </div>
  );
};

export default Explorer;
