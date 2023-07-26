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

// jest.mock('@/db/db', () => {
//   return {
//     resources: {
//       get: jest.fn(),
//     },
//     // ... other mocks
//   };
// });
// const mockGet = jest.fn();

// var mockResourcesTable = {
//   get: jest.fn(),
//   // Add other methods of the table if required, e.g., toArray: jest.fn()
// };
// jest.mock('@/db/db', () => {
//   return {
//     resources: mockResourcesTable,
//     // ... other tables or properties of db
//   };
// });

// function getMockResourcesTable() {
//   return {
//     get: jest.fn(),
//     // Add other methods of the table if required, e.g., toArray: jest.fn()
//   };
// };

// var mockResourcesTable = getMockResourcesTable();
// jest.mock('@/db/db', () => {
//   return {
//     resources: getMockResourcesTable(),
//     // ... other tables or properties of db
//   };
// });




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

  // it('should call setProfileTree if a resource is clicked', ()=> {
  //   const mockPathRepr = [{
  //     id: '1',
  //     data: [
  //       { 
  //         path: 'meta.profile[0]', value: 'some-url'
  //       },
  //       {
  //         path: 'resourceType', value: 'Condition'
  //       }
  //     ],
  //   }];
  //   const mockResource = {id: '1'}
  //   mockGetResource.mockResolvedValueOnce(mockResource);
  // useLiveQuery.mockReturnValueOnce(mockPathRepr)
  // // db.resources.get.mockResolvedValueOnce(mockResource)

  // render(
  //   <ResourceList
  //       setPreviewOpen={jest.fn()}
  //       setCheckedResources={jest.fn()}
  //       setPreviewPathRepr={jest.fn()}
  //       checkedResources={[]}
  //   />)
  //   screen.debug();
  //   fireEvent.click(screen.getByText('Condition/1'));
  //   expect(mockResourcesTable.get).toHaveBeenCalled();


  })

//   it('triggers the profile error toast when no profile is found', async () => {
//     const mockResource = { id: '1' };
//     const mockPathRepr = [{
//       id: '1',
//       data: [{ path: 'meta.profile[0]', value: 'some-url' }],
//     }];
    
//     useLiveQuery.mockReturnValueOnce(mockPathRepr);
//     // db.resourcesPathRepr.toArray.mockResolvedValueOnce([mockPathRepr]);
//     db.resources.get.mockResolvedValueOnce(mockResource);
//     db.profiles.toArray.mockResolvedValueOnce([]);

//     const { getByTitle } = render(
//       <ResourceList
//           setPreviewOpen={jest.fn()}
//           setCheckedResources={jest.fn()}
//           setPreviewPathRepr={jest.fn()}
//           checkedResources={[]}
//       />
//   );

//   screen.debug();

//     await waitFor(() => {
//       const resourceButton = getByTitle(mockResource.id);
//       fireEvent.click(resourceButton);
//     });

//     expect(toastError).toHaveBeenCalledWith('No profile found for this resource');
//   });

//   // Add more tests as needed to cover other functionalities and interactions within the component
// });


// mock props
// mock database access
// need to mock two different accesses
// mock store access

// test no resource provided default
// 