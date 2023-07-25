import { PreviewModal } from "../PreviewModal";
import { ResourcePathRepr, db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { toastError } from "@/toasts";
import { getResourceTypeFromUrl, isBaseUrl } from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import JsonView from "react18-json-view";
import { useStore } from "@/stores/useStore";
import sampleResource from "@/testResources/sampleResource.json";
// import samplePathRepr from "@/testResources/samplePathRepr.json";
import Condition from "@/../data/base-profiles/Condition.json"
import { screen, fireEvent, waitFor, render } from "@testing-library/react";

// mock
jest.mock("react18-json-view");
jest.mock('dexie-react-hooks', ()=>({
    useLiveQuery: jest.fn(),
}))
const mockSetProfileTree = jest.fn();
const mockSetMode = jest.fn();
jest.mock('@/stores/useStore', ()=>({
    useStore: jest.fn(()=>({
        setProfileTree: mockSetProfileTree,
        setMode: mockSetMode
    }))
}))
jest.mock('@/utils/utils', ()=>({
    isBaseUrl: jest.fn(),
    getResourceTypeFromUrl: jest.fn(()=> 'Condition')
}))
jest.mock('@/db/utils', ()=>({
    getBaseProfile: jest.fn()
}))
jest.mock('@/toasts', ()=>({
    toastError: jest.fn()
}))

// as the PathRepr I console logged from the actual component does not seem
// to conform to the type defintion, a mocked up version by me
const samplePathRepr: ResourcePathRepr = {
    id: "33",
    data: [
        {
            path: 'meta.profile[0]',
            value: 'StructureDefinition/Condition'
        }
    ]
}

// test:
describe('<PreviewModal/>', ()=>{
    afterEach(()=>{
        jest.clearAllMocks();
        useLiveQuery.mockReset();
        isBaseUrl.mockReset();
    })
    it('renders calls the JSON View with the resource provided', ()=>{
        useLiveQuery
            .mockReturnValueOnce(sampleResource)
            .mockReturnValueOnce([])
        render(<PreviewModal isOpen={true} setIsOpen={jest.fn()} pathRepr={samplePathRepr} />)

        expect(screen.getByText('Edit')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
        expect(JsonView).toHaveBeenCalled();
    })
    it('should toast an error if no profile is present to edit', ()=>{
        useLiveQuery
            .mockReturnValueOnce(sampleResource)
            .mockReturnValueOnce([])
        isBaseUrl.mockReturnValueOnce(false);
            render(<PreviewModal isOpen={true} setIsOpen={jest.fn()} pathRepr={samplePathRepr} />)
            fireEvent.click(screen.getByText('Edit'));
            expect(toastError).toHaveBeenCalledWith('No profile found for this resource');
    })
    it('should call the setProfileTree method', async ()=>{
        useLiveQuery
            .mockReturnValueOnce(sampleResource)
            .mockReturnValueOnce([])
        isBaseUrl.mockReturnValueOnce(true);
        getBaseProfile.mockResolvedValueOnce(Condition);
        render(<PreviewModal isOpen={true} setIsOpen={jest.fn()} pathRepr={samplePathRepr} />)
        fireEvent.click(screen.getByText('Edit'));
        await waitFor(()=>expect(mockSetProfileTree).toHaveBeenCalled());    
    })
    it('should call the setOpen method if Done is clicked', ()=>{
        useLiveQuery
            .mockReturnValueOnce(sampleResource)
            .mockReturnValueOnce([])
        const mockSetIsOpen = jest.fn();
        render(<PreviewModal isOpen={true} setIsOpen={mockSetIsOpen} pathRepr={samplePathRepr} />)
        fireEvent.click(screen.getByText('Done'));
        expect(mockSetIsOpen).toHaveBeenCalled();
    })
})
