import Layout from "@/components/Layout";
import BundleOutline from "@/components/annotator/BundleOutline";
import FocusSelector from "@/components/annotator/FocusSelector";
import { TextDisplay } from "@/components/annotator/TextDisplay";
import { TextInput } from "@/components/annotator/TextInput";
import { toastError } from "@/toasts";
import { Color, ColorStore, OptionType, Outline, OutlineItem } from "@/types";
import {
  addMatches,
  constructDefaultOutline,
  generateHexColor,
  setColorsForDefaultResources,
  transformOutline,
} from "@/utils/annotator_utils";
import { chains, createResources } from "@/utils/langchain_utils";
import React from "react";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { colorSeed, defaultFocusResources } from "@/utils/constants";
import seedrandom from "seedrandom";
import { json } from "stream/consumers";
import { Fhir } from "fhir";

const Annotator = () => {
  const [rng, setRng] = React.useState<seedrandom.PRNG>(() =>
    seedrandom(colorSeed)
  );
  const [text, setText] = useState("");
  const [outline, setOutline] = React.useState<Outline>(
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
    OutlineItem | undefined
  >(undefined);

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

  async function handleCreateResources() {
    if (outline) {
      const fhir = new Fhir();
      const results = await createResources(text, outline);
      if (results) {
        for (const result of results) {
          if (result.status === "fulfilled") {
            const valResult = fhir.validate(result.value);
            console.log(valResult);
          }
        }
      }
      console.log(results);
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
                className="bg-blue-500 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-700"
                onClick={async () => {
                  await handleLLMAssist();
                }}
              >
                LLM Assist
              </button>
              <button
                onClick={async () => {
                  await handleCreateResources();
                }}
              >
                Create Resources
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
    </Layout>
  );
};

export default Annotator;
