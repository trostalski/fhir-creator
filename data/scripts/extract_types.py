# Description: Extracts the JSON files for each type from the profiles-types.json file
import json
import os
import sys

current_dir = os.path.dirname(os.path.realpath(__file__))
data_dir = os.path.dirname(current_dir)
profile_types = os.path.join(data_dir, "fhir-definitions/profiles-types.json")
output_dir = os.path.join(data_dir, "fhir-types")

# load json file
with open(profile_types, "r") as f:
    data = json.load(f)

content = []
for entry in data["entry"]:
    content.append(entry["resource"])

for entry in content:
    filename = entry["id"] + ".json"
    with open(os.path.join(output_dir, filename), "w") as f:
        json.dump(entry, f, indent=4)
