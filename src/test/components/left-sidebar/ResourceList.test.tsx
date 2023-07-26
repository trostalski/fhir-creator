var mockGetResource = jest.fn();
var mockGetResourcePathRepr = jest.fn();
var mockGetProfile = jest.fn();
var mockGetBundle = jest.fn();

var mockResourcesTable = {
  get: mockGetResource,
  // Add other methods if needed, e.g., toArray: jest.fn(),
};
var mockResourcesPathReprTable = {
  get: mockGetResourcePathRepr,
};
var mockProfilesTable = {
  get: mockGetProfile,
};
var mockBundlesTable = {
  get: mockGetBundle,
};

jest.mock('@/db/db', () => {
  // Mocked MySubClassedDexie class
  class MockedMySubClassedDexie {
    resources = mockResourcesTable;
    resourcesPathRepr = mockResourcesPathReprTable;
    profiles = mockProfilesTable;
    bundles = mockBundlesTable;
  }

  const db = new MockedMySubClassedDexie();

  return { db };
});


import React, { use } from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResourceList  from '@/components/left-sidebar/ResourceList';
import { useLiveQuery } from 'dexie-react-hooks';


// Mocking required dependencies

jest.mock('@/db/utils', ()=>({
  getBaseProfile: jest.fn()
}))

jest.mock('@/utils/utils', ()=>({
  getResourceTypeFromUrl: jest.fn(),
  isBaseUrl: jest.fn(),
}))

jest.mock('dexie-react-hooks', () => ({
    useLiveQuery: jest.fn(),
  }));

  jest.mock('@/toasts', () => ({
      toastError: jest.fn(),
    }));
    
// CURRENT PROBLEM here: don't know how to mock the dexie singleton


describe('<ResourceList />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('displays "No resources" when there are no resources', async () => {      
      useLiveQuery
            .mockReturnValueOnce([])
            .mockReturnValueOnce([])

        const { getByText } = render(
            <ResourceList
                setPreviewOpen={jest.fn()}
                setCheckedResources={jest.fn()}
                setPreviewPathRepr={jest.fn()}
                checkedResources={[]}
            />
        );

        await waitFor(() => {
        expect(getByText('No resources')).toBeInTheDocument();
    });
  });

  it('should render the resources provided', ()=> {
      const mockPathRepr = [{
        id: '1',
        data: [
          { 
            path: 'meta.profile[0]', value: 'some-url'
          },
          {
            path: 'resourceType', value: 'Condition'
          }
        ],
      }];
    useLiveQuery.mockReturnValueOnce(mockPathRepr)

    render(
      <ResourceList
          setPreviewOpen={jest.fn()}
          setCheckedResources={jest.fn()}
          setPreviewPathRepr={jest.fn()}
          checkedResources={[]}
      />
      
      );
    expect(screen.getByText('Condition/1')).toBeInTheDocument();
  })
  })
