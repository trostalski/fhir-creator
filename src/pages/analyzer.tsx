import Layout from "@/components/Layout";
import PatSimFeatureInput from "@/components/analyzer/PatSimFeatureInput";
import { db } from "@/db/db";
import { resourceList } from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

export interface PatientSimilarityFeature {
  id: number;
  name: string;
  type:
    | "categorical_string"
    | "numerical"
    | "coded_concept"
    | "coded_numerical";
  targetResources: (typeof resourceList)[number][];
  targetPaths: string;
  conditionalPaths: string;
}

const Analyzer = () => {
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const resources = useLiveQuery(() => db.resources.toArray());
  const currentFeatureIndex = React.useRef(1);
  const [inputFeatures, setInputFeatures] = React.useState<
    PatientSimilarityFeature[]
  >([
    {
      id: 1,
      name: "Age",
      type: "numerical",
      targetResources: ["Patient"],
      targetPaths: "",
      conditionalPaths: "",
    },
  ]);

  const availableAnalyzerMethods = ["Patient Similarity"];

  return (
    <div>
      <Layout>
        <div className="flex flex-col w-full pb-10 pt-4 overflow-scroll gap-4 px-12">
          <div className="flex flex-col w-full">
            <span className="text-lg">Method</span>
            <div className="flex flex-row w-full gap-4 p-4 rounded-lg bg-blue-50">
              {availableAnalyzerMethods.map((method) => (
                <div key={method}>
                  <button className="bg-white border p-2 rounded-lg">
                    {method}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full max-h-1/2 overflow-scroll">
            <span className="text-lg">Select data</span>
            <div className="flex flex-row gap-4 w-full p-4 rounded-lg bg-blue-50">
              <div className="flex flex-col gap-2 w-1/3">
                {bundles?.map((bundle) => (
                  <div
                    key={bundle.id}
                    className="flex flex-row items-center bg-white rounded-lg p-2"
                  >
                    <input
                      type="checkbox"
                      id={bundle.id}
                      name={bundle.id}
                      value={bundle.id}
                      className="rounded-md p-2 mr-2 cursor-pointer"
                    />
                    <label htmlFor={bundle.id}>{"Bundle/" + bundle.id}</label>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                {resources?.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex flex-row items-center bg-white rounded-lg p-2"
                  >
                    <input
                      type="checkbox"
                      id={resource.id}
                      name={resource.id}
                      value={resource.id}
                      className="rounded-md p-2 mr-2 cursor-pointer"
                    />
                    <label htmlFor={resource.id}>
                      {resource.resourceType + "/" + resource.id}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-h-1/2">
            <div className="flex flex-row items-center gap-4">
              <span className="text-lg">Features</span>
              <button className="text-md text-blue-600 hover:text-blue-800">
                Add Feature
              </button>
            </div>
            <div className="flex flex-col gap-2 bg-blue-50 rounded-lg">
              {inputFeatures.map((feature, index) => (
                <PatSimFeatureInput
                  key={index}
                  featureId={index}
                  inputFeatures={inputFeatures}
                  setInputFeatures={setInputFeatures}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <button className="bg-green-600 text-white w-32 text-lg rounded py-1 px-2">
              Apply
            </button>
            <button className="bg-red-500 text-white w-32 text-lg rounded py-1 px-2">
              Reset
            </button>
          </div>
          <hr className="border-gray-300" />
        </div>
      </Layout>
    </div>
  );
};

export default Analyzer;
