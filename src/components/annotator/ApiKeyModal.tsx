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
      <div className="flex flex-row gap-8">
        <input
          className="grow"
          type="text"
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button
          onClick={async () => {
            await handleSetApiKey(apiKey);
            props.setShowApiKeyModal(false);
          }}
        >
          Set Api Key
        </button>
        <button onClick={() => props.setShowApiKeyModal(false)}>Cancel</button>
      </div>
    </ModalWrapper>
  );
};
