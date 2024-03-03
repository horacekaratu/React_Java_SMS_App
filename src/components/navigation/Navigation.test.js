import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Navigation } from "./Navigation";
// 1. implement as bread crumbs --follow bootstrap
// 2. have active state and the other 
// 3. It shouldnt reload so it should be out of other components 

describe("Navigation Component",()=>{
    it("should render nav items",()=>{
        render(<Navigation/>)
        expect(screen.getByText("Messages")).toBeInTheDocument();
        expect(screen.getByText("Contacts")).toBeInTheDocument();
    })
    it("should navigate when clicked",async ()=>{
        render(<Navigation/>);
        await waitFor(()=>{
            fireEvent.click(screen.getByText("Messages"))
            expect(history.)
        })
       
    })
})