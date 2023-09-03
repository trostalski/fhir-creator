import Layout from "@/components/Layout";
import BundleOutline from "@/components/annotator/BundleOutline";
import FocusSelector from "@/components/annotator/FocusSelector";
import { TextDisplay } from "@/components/annotator/TextDisplay";
import { TextInput } from "@/components/annotator/TextInput";
import { toastError } from "@/toasts";
import { OptionType, Outline } from "@/types";
import {
  addMatches,
  removeKey,
  transformOutline,
} from "@/utils/annotator_utils";
import { chains } from "@/utils/langchain_utils";
import React from "react";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Annotator = () => {
  const [text, setText] = useState("");
  const [outline, setOutline] = React.useState<Outline>();
  const [focusResources, setFocusResources] = React.useState<OptionType[]>([]);
  const [activeResourceType, setActiveResourceType] =
    React.useState<OptionType>();

  async function handleLLMAssist() {
    if (text.length === 0) {
      toastError("Please provide a text");
      return;
    }
    if (focusResources.length === 0) {
      toastError("Please provide focus resources");
      return;
    }
    const llmOutline = await chains.bundleOutlineV2.call({
      medical_text: text,
      focus_resources: focusResources.map((resource) => resource.value),
    });
    let llmOutlineJson;
    try {
      llmOutlineJson = JSON.parse(llmOutline.text);
    } catch (error) {
      console.log("Not able to parse llmOutput to Json with Error: ", error);
    }
    if (llmOutlineJson) {
      let matchedOutline = transformOutline(llmOutlineJson);
      addMatches(matchedOutline, text);
      setOutline(matchedOutline);
    }
  }

  const checkActive = (focusResource: OptionType) => {
    if (activeResourceType) {
      if (activeResourceType.value === focusResource.value) {
        return "bg-blue-500";
      } else {
        return "bg-blue-400";
      }
    } else {
      return "bg-blue-400";
    }
  };

  return (
    <Layout>
      <div className="flex flex-row pt-4 w-full gap-5">
        <div className="flex flex-col items-center gap-5 justify-center h-screen w-full">
          <div className="flex flex-row w-full gap-5">
            <TextInput text={text} setText={setText} setOutline={setOutline} />
            <div className="flex flex-col h-[25vh] w-1/2">
              <FocusSelector
                focusResources={focusResources}
                setFocusResources={setFocusResources}
                outline={outline}
                setOutline={setOutline}
              />
              <div className="flex flex-row flex-wrap overflow-scroll h-full">
                {focusResources &&
                  focusResources.map((focusResource) => {
                    return (
                      <div
                        key={focusResource.label}
                        className={`${checkActive(
                          focusResource
                        )} text-white m-1 flex flex-row h-min rounded-md hover:bg-blue-500 hover:scale-105`}
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
                className="bg-blue-500 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-700"
                onClick={async () => {
                  await handleLLMAssist();
                }}
              >
                LLM Assist
              </button>
              {/* Focus selection and LLM Assist button */}
            </div>
          </div>
          <TextDisplay
            text={text}
            setText={setText}
            outline={outline}
            setOutline={setOutline}
            activeResourceType={activeResourceType}
          />
        </div>
        <div className="w-1/5 overflow-auto">
          <BundleOutline outline={outline} setOutline={setOutline} />
        </div>
      </div>
    </Layout>
  );
};

export default Annotator;
