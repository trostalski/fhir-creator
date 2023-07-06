import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

interface EntityOverviewProps {
  type: "resource" | "bundle" | "profile";
}

const EntityOverview = (props: EntityOverviewProps) => {
  const { type } = props;
  const typeIsResource = type === "resource";
  const settings = {
    resource: {
      name: "Resources",
      title: "Resources",
      query: useLiveQuery(() => db.resources.toArray()),
      key: "resourceType",
    },
    bundle: {
      name: "Bundles",
      title: "Bundles",
      query: useLiveQuery(() => db.bundles.toArray()),
      key: "id",
    },
    profile: {
      name: "Profiles",
      title: "Profiles",
      query: useLiveQuery(() => db.profiles.toArray()),
      key: "id",
    },
  };
  const { name, query, key } = settings[type];
  return (
    <div className="flex flex-col h-64 w-full">
      <div className="flex flex-row items-center gap-8">
        <span className="">{name}</span>
        <input
          placeholder="Search Resources"
          className="h-8 w-1/3 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {}}
        />
      </div>
      {query?.map((item) => (
        <div key={item.id} className="flex flex-row items-center gap-8">
          <span className="">
            {typeIsResource ? item.resourceType + "/" + item.id : item.id}
          </span>
        </div>
      ))}
    </div>
  );
};

const AllOverview = () => {
  const validEntities = ["resource", "bundle", "profile"];
  return (
    <div className="flex flex-col w-full grow">
      {validEntities.map((entity) => (
        <EntityOverview key={entity} type={entity as "resource"} />
      ))}
    </div>
  );
};

export default AllOverview;
