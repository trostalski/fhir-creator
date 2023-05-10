import json
import os

with open("../data/fhir-definitions/profiles-resources.json") as rf:
    raw = json.load(rf)
    for entry in raw["entry"]:
        resource = entry["resource"]
        if resource["resourceType"] == "StructureDefinition":
            with open(f"profiles/{resource['type']}_profile.json", "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)
