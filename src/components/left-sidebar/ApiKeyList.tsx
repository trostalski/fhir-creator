import { db } from "@/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import ApiKeyContextMenu from "./contextMenu/ApiKeyContextMenu";
import { useStore } from "@/stores/useStore";

interface ApiKeyListProps {}

const ApiKeyList = (props: ApiKeyListProps) => {
  const [checkedApiKey, setCheckedApiKey] = useState<string | null>(null);
  const apiKeys = useLiveQuery(() => db.apiKey.toArray());
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [contextPoint, setContextPoint] = useState({
    x: 0,
    y: 0,
  });
  const { activeAPIKey, setActiveAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
      setActiveAPIKey: state.setActiveAPIKey,
    };
  });

  if (!activeAPIKey && apiKeys) {
    // maybe a bit dirty
    setActiveAPIKey(apiKeys[0].key);
  }

  function maskApiKey(apiKey: string): string {
    const visibleCharsBegin = 4;
    const visibleCharsEnd = 4;
    const length = apiKey.length;

    if (length <= visibleCharsBegin + visibleCharsEnd) return apiKey; // Return the original key if it's shorter than or equal to 4 chars

    const maskedPart = " ... *** ... ";
    const visiblePartBegin = apiKey.substring(0, visibleCharsBegin);
    const visiblePartEnd = apiKey.substring(length - visibleCharsEnd);

    return `${visiblePartBegin}${maskedPart}${visiblePartEnd}`;
  }

  return (
    <div className="flex flex-col gap-1">
      {apiKeys?.length === 0 && (
        <div className="text-xs text-gray-500">No API keys</div>
      )}
      {apiKeys?.map((apiKey) => (
        <div
          key={apiKey.key}
          className={`${
            activeAPIKey === apiKey.key ? "bg-blue-600" : "bg-blue-400"
          } p-1 text-white rounded-md`}
        >
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
            onClick={() => {
              setActiveAPIKey(apiKey.key);
            }}
          >
            <span className="text-xs">{maskApiKey(apiKey.key)}</span>
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
