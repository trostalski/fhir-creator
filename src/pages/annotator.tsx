import Layout from "@/components/Layout";
import BundleOutline from "@/components/annotator/BundleOutline";
import FocusSelector from "@/components/annotator/FocusSelector";
import { TextDisplay } from "@/components/annotator/TextDisplay";
import { TextInput } from "@/components/annotator/TextInput";
import { toastError } from "@/toasts";
import { ColorStore, OptionType, Entities, EntityElement } from "@/types";
import {
  addMatches,
  constructDefaultOutline,
  setColorsForDefaultResources,
  transformOutline,
} from "@/utils/annotator_utils";
import { createResources, promptList } from "@/utils/langchain_utils";
import React, { useEffect } from "react";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { colorSeed, defaultFocusResources } from "@/utils/constants";
import seedrandom from "seedrandom";
import { handleAddFolder } from "@/components/left-sidebar/utils";
import { Resource } from "fhir/r4";
import { addResource } from "@/db/utils";
import { v4 as uuidv4 } from "uuid";
import { BounceLoader } from "react-spinners";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { ApiKeyModal } from "@/components/annotator/ApiKeyModal";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import { useStore } from "@/stores/useStore";

const Annotator = () => {
  const [rng, setRng] = React.useState<seedrandom.PRNG>(() =>
    seedrandom(colorSeed)
  );
  const [showApiKeyModal, setShowApiKeyModal] = useState<boolean>(false);
  const [llmAnnotationLoading, setLlmAnnotationLoading] =
    useState<boolean>(false);
  const [llmResourceCreationLoading, setLlmResourceCreationLoading] =
    useState<boolean>(false);
  const [text, setText] = useState("");
  const [outline, setOutline] = React.useState<Entities>(
    constructDefaultOutline(defaultFocusResources)
  );
  const [focusResources, setFocusResources] = React.useState<OptionType[]>(
    defaultFocusResources
  );
  const [activeResourceType, setActiveResourceType] =
    React.useState<OptionType>(defaultFocusResources[0]);
  const [colors, setColors] = React.useState<ColorStore>(
    setColorsForDefaultResources(defaultFocusResources, rng)
  );
  const [selectedEntity, setSelectedEntity] = React.useState<
    EntityElement | undefined
  >(undefined);
  const [chains, setChains] = useState<{
    [key: string]: LLMChain<string, ChatOpenAI>;
  }>();
  const apiKeys = useLiveQuery(() => {
    return db.apiKey.toArray();
  });
  const { activeAPIKey, setActiveAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
      setActiveAPIKey: state.setActiveAPIKey,
    };
  });

  useEffect(() => {
    if (activeAPIKey) {
      const chat = new ChatOpenAI({
        temperature: 0,
        openAIApiKey: activeAPIKey,
        // modelName: "gpt-4",
      });

      setChains({
        bundleOutlineV2: new LLMChain({
          llm: chat,
          prompt: promptList.bundleOutlineV2,
        }),
        buildResourceV2: new LLMChain({
          llm: chat,
          prompt: promptList.buildResourceV2,
        }),
        buildResourceV3: new LLMChain({
          llm: chat,
          prompt: promptList.buildResourceV3,
        }),
        correctJsonError: new LLMChain({
          llm: chat,
          prompt: promptList.correctJsonError,
        }),
        correctValidationError: new LLMChain({
          llm: chat,
          prompt: promptList.correctValidationError,
        }),
      });
    }
  }, [activeAPIKey]);

  async function handleLLMAssist() {
    if (apiKeys?.length === 0) {
      setShowApiKeyModal(true);
      return;
    }
    if (text.length === 0) {
      toastError("Please provide a text");
      return;
    }
    if (focusResources.length === 0) {
      toastError("Please provide focus resources");
      return;
    }
    setLlmAnnotationLoading(true);
    if (chains) {
      try {
        const llmOutline = await chains.bundleOutlineV2.call({
          medical_text: text,
          focus_resources: focusResources.map((resource) => resource.value),
        });
        let llmOutlineJson;
        try {
          llmOutlineJson = JSON.parse(llmOutline.text);
        } catch (error) {
          console.log(
            "Not able to parse llmOutput to Json with Error: ",
            error
          );
        }
        if (llmOutlineJson) {
          let matchedOutline = transformOutline(llmOutlineJson);
          addMatches(matchedOutline, text);
          setOutline(matchedOutline);
        }
      } catch (error) {
        toastError("There was an error, is your API-Key valid?");
        console.log(error);
      }
    }
    setLlmAnnotationLoading(false);
  }

  async function handleCreateResources() {
    if (apiKeys?.length === 0) {
      setShowApiKeyModal(true);
      return;
    }
    if (outline && chains) {
      try {
        setLlmResourceCreationLoading(true);
        const results = await createResources(text, outline, chains);
        if (results) {
          const bundleId = await handleAddFolder();
          for (const result of results) {
            if (result.status === "fulfilled") {
              const resource = result.value as Resource;
              resource.id = uuidv4();
              await addResource(resource, bundleId);
            }
          }
        }
      } catch (error) {
        toastError(
          "There was a problem while calling OpenAI, is your API Key valid?"
        );
        console.log(error);
      }
      setLlmResourceCreationLoading(false);
    }
  }

  const checkActive = (focusResource: OptionType) => {
    if (
      activeResourceType &&
      activeResourceType.value === focusResource.value
    ) {
      return "text-white m-1 flex flex-row h-min rounded-md hover:scale-105 border-2 border-black";
    } else {
      return "text-white m-1 flex flex-row h-min rounded-md hover:scale-105";
    }
  };

  return (
    <Layout>
      <div className="flex flex-row mt-4 pb-11 w-full gap-5 overflow-auto">
        <div className="flex flex-col items-center gap-5 justify-center h-full w-full">
          <div className="flex flex-row w-full gap-5 h-1/3">
            <TextInput text={text} setText={setText} setOutline={setOutline} />
            <div className="flex flex-col w-1/2 gap-2">
              <FocusSelector
                focusResources={focusResources}
                setFocusResources={setFocusResources}
                outline={outline}
                setOutline={setOutline}
                colors={colors}
                setColors={setColors}
                rng={rng}
              />
              <div className="flex flex-row flex-wrap overflow-scroll h-full">
                {focusResources &&
                  focusResources.map((focusResource) => {
                    return (
                      <div
                        key={focusResource.label}
                        className={checkActive(focusResource)}
                        style={{ backgroundColor: colors[focusResource.value] }}
                      >
                        <button
                          className="p-1"
                          onClick={() => setActiveResourceType(focusResource)}
                        >
                          {focusResource.value}
                        </button>
                        <TiDelete
                          className="hover:scale-110"
                          onClick={() => {
                            setFocusResources(
                              focusResources.filter((item) => {
                                return item.value !== focusResource.value;
                              })
                            );
                            const {
                              [focusResource.value]: deletedKey,
                              ...otherKeys
                            } = outline!;
                            setOutline(otherKeys);
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
              <button
                className={` text-white text-lg font-semibold py-1 rounded-lg flex flex-row justify-center gap-10 ${
                  llmAnnotationLoading
                    ? "bg-gray-500"
                    : "hover:bg-blue-700 bg-blue-500"
                }`}
                disabled={llmAnnotationLoading}
                onClick={async () => {
                  await handleLLMAssist();
                }}
              >
                LLM Annotation
                <BounceLoader loading={llmAnnotationLoading} size={30} />
              </button>
              <button
                className={` text-white text-lg font-semibold py-1 rounded-lg flex flex-row justify-center gap-10 ${
                  llmResourceCreationLoading
                    ? "bg-gray-500"
                    : "hover:bg-blue-700 bg-blue-500"
                }`}
                onClick={async () => {
                  await handleCreateResources();
                }}
              >
                LLM Resource Creation
                <BounceLoader loading={llmResourceCreationLoading} size={30} />
              </button>
            </div>
          </div>
          <TextDisplay
            text={text}
            setText={setText}
            outline={outline}
            setOutline={setOutline}
            activeResourceType={activeResourceType}
            colors={colors}
            selectedEntity={selectedEntity}
          />
        </div>
        <div className="w-1/5 overflow-auto">
          <BundleOutline
            outline={outline}
            setOutline={setOutline}
            selectedEntity={selectedEntity}
            setSelectedEntity={setSelectedEntity}
          />
        </div>
      </div>
      {showApiKeyModal && (
        <ApiKeyModal setShowApiKeyModal={setShowApiKeyModal} />
      )}
    </Layout>
  );
};

export default Annotator;
