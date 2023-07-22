import { render, screen} from "@testing-library/react";
import Header from "@/components/Header";

describe('Header', () => {
    it('renders the header', ()=> {
        render(<Header/>)

        const header = screen.getByText(/FHIR Creator/i);
        expect(header).toBeInTheDocument();
    })
    it('contains the github link and the homepage link', ()=>{
        render(<Header/>)
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(2);
    })
})