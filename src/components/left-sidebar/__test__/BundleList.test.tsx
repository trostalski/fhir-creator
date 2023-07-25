import { render, screen, fireEvent } from '@testing-library/react';
import BundleList from '../BundleList';

// what do I want to test here?
// if no bundles then no bundles is rendered
// click checkbox
// if expand is clicked resources are shown

// mock:
// bundles
// sample bundles for testing purposes
const sampleBundles = [
    {
        id: '1',
        name: 'Bundle 1',
        entry: [
            {
                resource:{
                    id: '1',
                    resourceType: 'Condition'
                }
            },
            {
                resource:{
                    id: '2',
                    resourceType: 'Medication'
                }
            }
        ]
    },
    {
        id: '2',
        name: 'Bundle 2',
        entry: [
            {
                resource:{
                    id: '1',
                    resourceType: 'Condition'
                }
            },
            {
                resource:{
                    id: '2',
                    resourceType: 'Medication'
                }
            }
        ]
    }
];

// store: same as Profiles List
const mockSetProfileTree = jest.fn();
const mockSetMode = jest.fn();

jest.mock('@/stores/useStore', () => ({
    useStore: jest.fn(() => 
    ({
        setProfileTree: mockSetProfileTree,
        setMode: mockSetMode
    }))
}))
jest.mock('dexie-react-hooks', () => ({
    useLiveQuery: jest.fn(() => sampleBundles)
}));

// sample profile
const sampleProfile = {
    id: '1',
    url: 'https://example.com/profile/1',
    name: 'Profile 1'
};


// const mockGetBaseProfile = jest.fn(() => sampleProfile);
// jest.mock('@/db/utils', () => ({
//     getBaseProfile: mockGetBaseProfile
// }));

// checked bundles

describe('<BundleList/>', ()=> {
    it('should render the bundle list with bundles provided', ()=>{
        const setCheckedBundlesMock = jest.fn();

        render(<BundleList checkedBundles={[]} setCheckedBundles={setCheckedBundlesMock} />)

        expect(screen.getByText('Bundle/1')).toBeInTheDocument();
        expect(screen.getByText('Bundle/2')).toBeInTheDocument();
    })
    it('should expand and show the resources provided', ()=>{
        const setCheckedBundlesMock = jest.fn();

        render(<BundleList checkedBundles={[]} setCheckedBundles={setCheckedBundlesMock} />)

        const expandButton = screen.getByTestId("expand-1");
        fireEvent.click(expandButton);
        expect(screen.getByText("Condition/1")).toBeInTheDocument();
        expect(screen.getByText("Medication/2")).toBeInTheDocument();
    })
//     it('should set the bundle profile tree when clicked', ()=> {
//         const setCheckedBundlesMock = jest.fn();
//         render(<BundleList checkedBundles={[]} setCheckedBundles={setCheckedBundlesMock} />)

//         fireEvent.click(screen.getByText('Bundle/1'));
//         // expect(mockGetBaseProfile).toHaveBeenCalled();
//         // expect(mockSetProfileTree).toHaveBeenCalled();

//     })
})

