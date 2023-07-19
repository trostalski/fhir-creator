import { render, screen} from "@testing-library/react";
import Header from "@/components/Header";

describe('Header', () => {
    it('renders the header', ()=> {
        render(<Header/>)

        const header = screen.getByText(/FHIR Creator/i);
        expect(header).toBeInTheDocument();
    })
    // it('contains the github link', ()=>{
    //     render(<Header/>)
    //     const github = screen.getByRole()
    // })
})