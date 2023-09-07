import json
import os

current_dir = os.path.dirname(os.path.realpath(__file__))
data_dir = os.path.dirname(current_dir)
input_file = os.path.join(data_dir, "fhir-definitions", "valuesets.json")

codesystems_dir = os.path.join(data_dir, "codesystems")
valuesets_dir = os.path.join(data_dir, "valuesets")

with open(input_file) as rf:
    raw = json.load(rf)
    for entry in raw["entry"]:
        resource = entry["resource"]
        file_name = entry["fullUrl"].split("/")[-1]
        if resource["resourceType"] == "CodeSystem":
            with open(os.path.join(codesystems_dir, f"{file_name}.json"), "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)
        elif resource["resourceType"] == "ValueSet":
            with open(os.path.join(valuesets_dir, f"{file_name}.json"), "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)
