import { render, screen, fireEvent } from '@testing-library/react';
import ProfilesList from '../ProfilesList';

// sample profiles for testing purposes
const sampleProfiles = [
    {
        id: '1',
        url: 'https://example.com/profile/1',
        name: 'Profile 1'
    },
    {
        id: '2',
        url: 'https://example.com/profile/2',
        name: 'Profile 2'
    }
];

// Mocking the hooks and database operations
jest.mock('dexie-react-hooks', () => ({
    useLiveQuery: jest.fn(() => sampleProfiles)
}));

const mockSetProfileTree = jest.fn();
const mockSetMode = jest.fn();

jest.mock('@/stores/useStore', () => ({
    useStore: jest.fn(() => 
    ({
        setProfileTree: mockSetProfileTree,
        setMode: mockSetMode
    }))
}))

describe('<ProfilesList />', () => {
    it('renders profiles and allows interaction', () =>{
        const setCheckedProfilesMock = jest.fn();

        render(<ProfilesList checkedProfiles={[]} setCheckedProfiles={setCheckedProfilesMock}/>)

        // check if profiles are rendered
        expect(screen.getByText('Profile 1')).toBeInTheDocument();
        expect(screen.getByText('Profile 2')).toBeInTheDocument();

        // check click on profile
        fireEvent.click(screen.getByText('Profile 1'))
        expect(mockSetProfileTree).toHaveBeenCalledWith(sampleProfiles[0]);
        
        
        // check that checkboxes are clickable
        fireEvent.click(screen.getAllByRole('checkbox')[0]);
        expect(setCheckedProfilesMock).toHaveBeenCalledWith([sampleProfiles[0].id!]);

    })
})