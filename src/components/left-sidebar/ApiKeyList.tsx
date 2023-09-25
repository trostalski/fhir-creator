import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import ProfileContextMenu from "./contextMenu/ProfileContextMenu";
import ApiKeyContextMenu from "./contextMenu/ApiKeyContextMenu";

interface ApiKeyListProps {}

const ApiKeyList = (props: ApiKeyListProps) => {
  const [checkedApiKey, setCheckedApiKey] = useState<string | null>(null);
  const apiKeys = useLiveQuery(() => db.apiKey.toArray());
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [contextPoint, setContextPoint] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="flex flex-col gap-1">
      {apiKeys?.length === 0 && (
        <div className="text-xs text-gray-500">No API keys</div>
      )}
      {apiKeys?.map((apiKey) => (
        <div key={apiKey.key} className="bg-blue-400 p-1 text-white rounded-md">
          <button
            className="w-full text-left font-light text-sm truncate transition-colors duration-300 ease-in-out px-2 py-1 rounded-md overflow-hidden hover:bg-blue-200"
            title={apiKey.key}
            onContextMenu={(e) => {
              e.preventDefault();
              if (checkedApiKey !== apiKey.key) {
                setCheckedApiKey(apiKey.key);
              }
              setContextPoint({ x: e.pageX, y: e.pageY });
              setShowContextMenu(true);
            }}
            onClick={() => {}}
          >
            <span className="text-xs">{apiKey.key}</span>
          </button>
        </div>
      ))}
      {showContextMenu && (
        <ApiKeyContextMenu
          setShowContextMenu={setShowContextMenu}
          apiKey={checkedApiKey}
          x={contextPoint.x}
          y={contextPoint.y}
        />
      )}
    </div>
  );
};

export default ApiKeyList;
