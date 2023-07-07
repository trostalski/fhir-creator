# need to get overview of constraints
# parse structure definitions
# extract constraints
# write in new file, one file per structure definition
# examine constraints
import json
import os

current_dir = os.path.dirname(os.path.realpath(__file__))
data_dir = os.path.dirname(current_dir)
base_profiles_dir = os.path.join(data_dir, "base-profiles")

base_profiles = os.listdir(base_profiles_dir)

def extract_constraints(profile):
    constraints = {}
    for element in profile["snapshot"]["element"]:
        if "constraint" in element:
            constraints[element["id"]] = element["constraint"]
    return constraints

def extract_constraints_from_file(filename):
    with open(filename, "r") as f:
        profile = json.load(f)
        return extract_constraints(profile)

for base_profile in base_profiles:
    # check if the directory exists
    constraints_dir = os.path.join(data_dir, "constraints")
    if not os.path.exists(constraints_dir):
    # create the directory
        os.makedirs(constraints_dir)
    # extract the constraints
    filename = os.path.join(base_profiles_dir, base_profile)
    constraints = extract_constraints_from_file(filename)
    with open(os.path.join(data_dir, "constraints", base_profile), "w") as f:
        json.dump(constraints, f, indent=4)

