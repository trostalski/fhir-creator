import json
import os

current_dir = os.path.dirname(os.path.realpath(__file__))
data_dir = os.path.dirname(current_dir)
base_profiles = os.path.join(data_dir, "fhir-definitions/profiles-resources.json")
output_dir = os.path.join(data_dir, "base-profiles")

with open(base_profiles) as rf:
    raw = json.load(rf)
    for entry in raw["entry"]:
        resource = entry["resource"]
        if resource["resourceType"] == "StructureDefinition":
            with open(os.path.join(output_dir, f"{resource['type']}.json"), "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)