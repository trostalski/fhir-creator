import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BundleList from "../BundleList";
import { useLiveQuery } from "dexie-react-hooks";
import { getBaseProfile } from "@/db/utils";
import { StructureDefinition } from "fhir/r4";

// module mocks
const mockSetProfileTree = jest.fn();
const mockSetMode = jest.fn();
jest.mock("@/stores/useStore", () => ({
  useStore: jest.fn(() => ({
    setProfileTree: mockSetProfileTree,
    setMode: mockSetMode,
  })),
}));

jest.mock("dexie-react-hooks", () => ({
  useLiveQuery: jest.fn(),
}));

jest.mock("@/db/utils", () => ({
  getBaseProfile: jest.fn(),
}));

// sample data
const sampleBundles = [
  {
    id: "1",
    name: "Bundle 1",
    entry: [
      {
        resource: {
          id: "1",
          resourceType: "Condition",
        },
      },
      {
        resource: {
          id: "2",
          resourceType: "Medication",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Bundle 2",
    entry: [
      {
        resource: {
          id: "1",
          resourceType: "Condition",
        },
      },
      {
        resource: {
          id: "2",
          resourceType: "Medication",
        },
      },
    ],
  },
];
const sampleProfile: StructureDefinition = {
  id: "1",
  url: "https://example.com/profile/1",
  name: "Profile 1",
  resourceType: "StructureDefinition",
  abstract: false,
  kind: "resource",
  status: "active",
  type: "Condition",
};

// mock implementations
useLiveQuery.mockImplementation(() => sampleBundles);
getBaseProfile.mockResolvedValue(sampleProfile);

// Tests
describe("<BundleList/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the default message if no bundles are provided", () => {
    const setCheckedBundlesMock = jest.fn();
    useLiveQuery.mockImplementationOnce(() => []);
    render(
      <BundleList
        checkedBundles={[]}
        setCheckedBundles={setCheckedBundlesMock}
      />
    );
    expect(screen.getByText("No bundles")).toBeInTheDocument();
  });
  it("should render the bundle list with bundles provided", () => {
    const setCheckedBundlesMock = jest.fn();
    render(
      <BundleList
        checkedBundles={[]}
        setCheckedBundles={setCheckedBundlesMock}
      />
    );
    expect(screen.getByText("Bundle/1")).toBeInTheDocument();
    expect(screen.getByText("Bundle/2")).toBeInTheDocument();
  });
  it("should expand and show the resources provided", () => {
    const setCheckedBundlesMock = jest.fn();
    render(
      <BundleList
        checkedBundles={[]}
        setCheckedBundles={setCheckedBundlesMock}
      />
    );

    const expandButton = screen.getByTestId("expand-1");
    fireEvent.click(expandButton);
    expect(screen.getByText("Condition/1")).toBeInTheDocument();
    expect(screen.getByText("Medication/2")).toBeInTheDocument();
  });
  it("should set the bundle profile tree when clicked", async () => {
    const setCheckedBundlesMock = jest.fn();
    render(
      <BundleList
        checkedBundles={[]}
        setCheckedBundles={setCheckedBundlesMock}
      />
    );

    fireEvent.click(screen.getByText("Bundle/1"));
    await waitFor(() => expect(mockSetProfileTree).toHaveBeenCalled());
  });
});
