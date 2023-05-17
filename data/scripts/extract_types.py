# Description: Extracts the JSON files for each type from the profiles-types.json file
import json
import os
import sys

# load json file
with open(os.path.join("../data", "fhir-definitions", "profiles-types.json"), "r") as f:
    data = json.load(f)

content = []
for entry in data["entry"]:
    content.append(entry["resource"])

for entry in content:
    filename = entry["id"] + ".json"
    with open(os.path.join("../data", "fhir-types", filename), "w") as f:
        json.dump(entry, f, indent=4)
