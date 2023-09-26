import ModalWrapper from "@/components/ModalWrapper";
import { addApiKey } from "@/db/utils";
import { useState } from "react";

interface ApiKeyModalProps {
  setShowApiKeyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApiKeyModal = (props: ApiKeyModalProps) => {
  const [apiKey, setApiKey] = useState<string>("");
  const handleSetApiKey = async (apiKey: string) => {
    await addApiKey(apiKey);
  };
  return (
    <ModalWrapper setShow={props.setShowApiKeyModal}>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-xl font-semibold text-center text-blue-600 mb-2">
          Add your OpenAI - API Key
        </h2>
        <div className="flex flex-row gap-4 w-full">
          <input
            className="grow"
            type="text"
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            className="text-gray-100 text-lg font-semibold py-1 rounded-lg hover:bg-blue-700 bg-blue-500 p-2"
            onClick={async () => {
              await handleSetApiKey(apiKey);
              props.setShowApiKeyModal(false);
            }}
          >
            Set Api Key
          </button>
          <button
            onClick={() => props.setShowApiKeyModal(false)}
            className="text-gray-100 text-lg font-semibold py-1 rounded-lg hover:bg-blue-700 bg-blue-500 p-2"
          >
            Cancel
          </button>
        </div>
        <p>Your API Key is stored locally in your browser.</p>
      </div>
    </ModalWrapper>
  );
};
