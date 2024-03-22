import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { NewContact } from "./NewContact"
import { ThemeProvider } from "styled-components";
import { Theme } from "../../Theme";
import { wait } from "@testing-library/user-event/dist/utils";
const render = (ui, options) => {
    return rtlRender(ui, {
      wrapper: ({ children }) => (
      
          <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      
      ),
      ...options,
    });
  };
describe("New Contact Component", ()=>{
it("should display new contact input fields",()=>{
    render(<NewContact/>)
    const namePlaceholder=screen.getByPlaceholderText("Enter name")
    const numberPlaceholder=screen.getByPlaceholderText("Enter number")
    expect(namePlaceholder).toBeInTheDocument()
    expect(numberPlaceholder).toBeInTheDocument()
})
it("should displaysave button",()=>{
    render(<NewContact/>)
    const saveButton=screen.getByText("Save")
    expect(saveButton).toBeInTheDocument()
})
it("should call savehandler on cliking save",async()=>{
    const tosaveObject={
        name:"Alex mutai",
        number:"0789223322",
        country:"Kenya"
    }
    const saveHandlerMock=jest.fn()
    render(<NewContact handleAddContact={saveHandlerMock}/>)
    const saveButton=screen.getByText("Save")
    const namePlaceholder=screen.getByPlaceholderText("Enter name")
    const numberPlaceholder=screen.getByPlaceholderText("Enter number")
    const countryPlaceholder=screen.getByPlaceholderText("Enter country")
    fireEvent.change(namePlaceholder,{target:{value:"Alex mutai"}})
    fireEvent.change(numberPlaceholder,{target:{value:"0789223322"}})
    fireEvent.change(countryPlaceholder,{target:{value:"Kenya"}})
    fireEvent.click(saveButton)
    const savedMessage= screen.queryByText("Contact saved")
    await waitFor(()=>{
        expect(saveHandlerMock).toHaveBeenCalledWith(tosaveObject)
        expect(savedMessage).toBeInTheDocument()
    })
    
})

it("should show error on saving nulls",async()=>{
   
    const saveHandlerMock=jest.fn().mockReturnValueOnce("Name is blank")
    render(<NewContact handleAddContact={saveHandlerMock}/>)
    const saveButton=screen.getByText("Save")
    fireEvent.click(saveButton)
    const savedMessage= screen.queryByText("Contact saved")
    await waitFor(()=>{
       expect(savedMessage).toBeNull()
    })
    
})


})
