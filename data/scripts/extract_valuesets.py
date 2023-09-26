import json

with open("../data/fhir-definitions/valuesets.json") as rf:
    raw = json.load(rf)
    for entry in raw["entry"]:
        resource = entry["resource"]
        file_name = entry["fullUrl"].split("/")[-1]
        if resource["resourceType"] == "CodeSystem":
            with open(f"codesystems/{file_name}.json", "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)
        elif resource["resourceType"] == "ValueSet":
            with open(f"valuesets/{file_name}.json", "w") as wf:
                json.dump(resource, wf, ensure_ascii=False, indent=4)
