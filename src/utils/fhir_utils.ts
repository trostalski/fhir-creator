import { Resource, Bundle } from "fhir/r4";

export function getResourcesFromBundle(bundle: Bundle) {
  if (!bundle.entry) {
    return [];
  }
  return bundle.entry.map((entry) => {
    return entry.resource as Resource;
  });
}

export function getResourcesFromBundles(bundles: Bundle[]) {
  let resources: Resource[] = [];
  bundles.forEach((bundle) => {
    resources = resources.concat(getResourcesFromBundle(bundle));
  });
  return resources;
}

export function bundleResources(resources: Resource[]) {
  const bundle = {
    resourceType: "Bundle",
    type: "transaction",
    entry: resources.map((resource) => ({
      resource: resource,
      request: {
        method: "POST",
        url: `${resource.resourceType}/${resource.id}`,
      },
    })),
  };
  return bundle;
}
