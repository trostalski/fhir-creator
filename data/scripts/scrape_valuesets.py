import requests


def main():
    result_dict = {}
    max_id = 158007
    for i in range(1, max_id):
        url = "https://simplifier.net/ui/packagefile/downloadas?packageFileId={}&format=json".format(
            i
        )
        response = requests.get(url)
        if not response.ok:
            print("Failed to get response from {}".format(url))
            continue
        try:
            json = dict(response.json())
        except Exception as e:
            print("Failed to parse json from {}".format(url))
            continue
        resource_type = json.get("resourceType", "unknown")
        if resource_type in result_dict:
            result_dict[resource_type].append(json)
        else:
            result_dict[resource_type] = [json]
    for k, v in result_dict.items():
        # write json to file
        with open("../simplifier/{}.json".format(k.capitalize()), "w") as f:
            f.write(str(v))


if __name__ == "__main__":
    main()
