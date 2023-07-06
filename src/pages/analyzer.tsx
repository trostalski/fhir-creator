import Layout from "@/components/Layout";
import CsvFeatureInput from "@/components/analyzer/csv_export/CsvFeatureInput";
import PatSimFeatureInput from "@/components/analyzer/patient_similarity/PatSimFeatureInput";
import { db } from "@/db/db";
import {
  CategoricalStringFeatureInput,
  CodedConceptFeatureInput,
  CodedNumericalFeatureInput,
  CsvExportFeature,
  NumericalFeatureInput,
  PatSimFeature,
} from "@/types";
import {
  _categoricalString,
  _csvExport,
  availableAnalyzerMethods,
  csvExportMethod,
  patSimMethod,
} from "@/utils/constants";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";

const Analyzer = () => {
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const resources = useLiveQuery(() => db.resources.toArray());
  const [analysisMethod, setAnalysisMethod] = React.useState<
    (typeof availableAnalyzerMethods)[number]
  >(availableAnalyzerMethods[0]);

  const [categoricalStringFeatures, setCategoricalStringFeatures] = useState<
    CategoricalStringFeatureInput[]
  >([
    {
      id: 0,
      name: "",
      targetResources: [],
      type: "",
      targetPath: "",
      conditionalTargetPath: "",
    },
  ]);

  const [numericalFeatures, setNumericalFeatures] = useState<
    NumericalFeatureInput[]
  >([
    {
      id: 0,
      name: "",
      targetResources: [],
      type: "",
      targetPath: "",
      conditionalTargetPath: "",
    },
  ]);

  const [codedConceptFeatures, setCodedConceptsFeatures] = useState<
    CodedConceptFeatureInput[]
  >([
    {
      id: 0,
      name: "",
      targetResources: [],
      type: "",
      codePath: "",
      systemPath: "",
      conditionalCodePath: "",
      conditionalSystemPath: "",
    },
  ]);

  const [codedNumericalFeatures, setCodedNumericalFeatures] = useState<
    CodedNumericalFeatureInput[]
  >([
    {
      id: 0,
      name: "",
      targetResources: [],
      type: "",
      codePath: "",
      valuePath: "",
      conditionalCodePath: "",
      conditionalValuePath: "",
    },
  ]);

  const [csvExportFeatures, setCsvExportFeatures] = React.useState<
    CsvExportFeature[]
  >([
    {
      id: 0,
      type: _csvExport,
      name: "",
      targetResources: [],
      targetPath: "",
      condition: "",
    },
  ]);

  const [selectedResourceIds, setSelectedResourceIds] = React.useState<
    string[]
  >([]);
  const [selectedBundleIds, setSelectedBundleIds] = React.useState<string[]>(
    []
  );

  const [results, setResults] = React.useState<any[]>([]);

  const handleAddFeature = () => {
    if (analysisMethod === patSimMethod) {
      setPatSimFeatures((prev: PatSimFeature[]) => [
        ...prev,
        {
          id: Math.max(...prev.map((f) => f.id)) + 1,
          name: "",
          type: _categoricalString,
          targetResources: [],
          targetPath: "",
          conditionalTargetPath: "",
        },
      ]);
    } else if (analysisMethod === csvExportMethod) {
      setCsvExportFeatures((prev: CsvExportFeature[]) => [
        ...prev,
        {
          id: Math.max(...prev.map((f) => f.id)) + 1,
          name: "",
          type: _csvExport,
          targetResources: [],
          targetPath: "",
          condition: "",
        },
      ]);
    }
  };

  const getFeatureComponent = () => {
    if (analysisMethod === patSimMethod) {
      return patSimFeatures.map((feature) => (
        <PatSimFeatureInput
          key={feature.id}
          featureId={feature.id}
          inputFeature={feature}
          setInputFeatures={setPatSimFeatures}
        />
      ));
    } else if (analysisMethod === csvExportMethod) {
      return csvExportFeatures.map((feature) => (
        <CsvFeatureInput
          key={feature.id}
          featureId={feature.id}
          inputFeature={feature}
          setInputFeatures={setCsvExportFeatures}
        />
      ));
    }
  };

  return (
    <div>
      <Layout>
        <div className="flex flex-col w-full pb-10 pt-4 overflow-scroll gap-4 px-12">
          <div className="flex flex-col w-full">
            <span className="text-lg">Method</span>
            <div className="flex flex-row w-full gap-4 p-4 rounded-lg bg-gray-50">
              {availableAnalyzerMethods.map((method) => (
                <div key={method}>
                  <button
                    onClick={() => setAnalysisMethod(method)}
                    className={`p-2 rounded-lg ${
                      method === analysisMethod
                        ? "bg-sky-600 border-0 text-white"
                        : "bg-white"
                    }`}
                  >
                    {method}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full max-h-1/2">
            <span className="text-lg">Data</span>
            <div className="flex flex-row gap-4 w-full p-4 rounded-lg bg-gray-50">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex flex-row gap-4">
                  <span>Bundles</span>
                  <button
                    className="text-xs text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      if (bundles) {
                        setSelectedBundleIds(
                          bundles?.map((bundle) => bundle.id!.toString())
                        );
                      }
                    }}
                  >
                    Select All
                  </button>
                </div>
                {!bundles ? (
                  <span className="text-gray-400">
                    No bundles found. Please import a bundle first.
                  </span>
                ) : (
                  bundles?.map((bundle) => (
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
                        checked={selectedBundleIds?.includes(
                          bundle.id!.toString()
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBundleIds((prev) => [
                              ...(prev ?? []),
                              e.target.value,
                            ]);
                          } else {
                            setSelectedBundleIds((prev) =>
                              prev?.filter((id) => id !== e.target.value)
                            );
                          }
                        }}
                      />
                      <label htmlFor={bundle.id}>{"Bundle/" + bundle.id}</label>
                    </div>
                  ))
                )}
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex flex-row gap-4">
                  <span>Resources</span>
                  <button
                    className="text-xs text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      if (resources) {
                        setSelectedResourceIds(
                          resources?.map((resource) => resource.id!.toString())
                        );
                      }
                    }}
                  >
                    Select All
                  </button>
                </div>
                {!resources ? (
                  <span className="text-gray-400">
                    No resources found. Please import a resources first.
                  </span>
                ) : (
                  resources?.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex flex-row items-center bg-white rounded-lg p-2"
                    >
                      <input
                        type="checkbox"
                        id={resource.id}
                        name={resource.id}
                        value={resource.id}
                        checked={selectedResourceIds?.includes(
                          resource.id!.toString()
                        )}
                        className="rounded-md p-2 mr-2 cursor-pointer"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedResourceIds((prev) => [
                              ...(prev ?? []),
                              e.target.value,
                            ]);
                          } else {
                            setSelectedResourceIds((prev) =>
                              prev?.filter((id) => id !== e.target.value)
                            );
                          }
                        }}
                      />
                      <label htmlFor={resource.id}>
                        {resource.resourceType + "/" + resource.id}
                      </label>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-4">
              <span className="text-lg">Features</span>
              <button
                className="text-md text-blue-600 hover:text-blue-800"
                onClick={handleAddFeature}
              >
                Add Feature
              </button>
            </div>
            <div className="flex flex-col bg-gray-50 rounded-lg">
              {getFeatureComponent()}
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <button
              className="bg-green-600 text-white w-32 text-lg rounded py-1 px-2"
              onClick={() => {}}
            >
              Apply
            </button>
            <button
              className="bg-red-500 text-white w-32 text-lg rounded py-1 px-2"
              onClick={() => {
                setSelectedBundleIds([]);
                setSelectedResourceIds([]);
                // reset to default features
                setPatSimFeatures([
                  {
                    id: 0,
                    name: "",
                    targetResources: [],
                    type: "",
                    targetPath: "",
                    conditionalTargetPath: "",
                  },
                ]);
                setCsvExportFeatures([
                  {
                    id: 0,
                    name: "",
                    type: _csvExport,
                    targetResources: [],
                    targetPath: "",
                    condition: "",
                  },
                ]);
                console.log(patSimFeatures);
              }}
            >
              Reset
            </button>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col w-full">
            <span className="text-lg">Results</span>
            <div className="flex flex-col gap-2 w-full">
              {results.length === 0 ? (
                <span className="text-gray-400">
                  No results found. Please apply an analysis first.
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Analyzer;
