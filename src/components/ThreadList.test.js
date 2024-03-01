import { screen, render as rtlRender, waitFor, fireEvent } from "@testing-library/react"
import { ThreadList } from "./ThreadList";
import { Theme } from "../Theme";
import { ThemeProvider } from "styled-components";
const render=(ui,options)=>{
return rtlRender(ui,{
    wrapper:({children})=>(
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    ), ...options
})

}

describe('ThreadList Component',()=>{
    it("should render the title", async ()=>{
        render(<ThreadList/>)
        expect(screen.getByText('Message Threads')).toBeInTheDocument();

    });
    it("should render loading state", async()=>{
        render (<ThreadList/>)
        expect(screen.getByText('Message Threads Loading ...')).toBeInTheDocument();

    });



    it("should render threads", async()=>{
        render (<ThreadList/>)
         await waitFor(()=>{
            expect(screen.getByText('Threads')).toBeInTheDocument();
            expect(screen.getByText('hello john')).toBeInTheDocument();
            expect(screen.getByText('hello lorem')).toBeInTheDocument();
         }) 
    });

    it("should set selected thread id on clicking thread", async () => {
        const onClickMock = jest.fn();
        render(<ThreadList handleOnClick={onClickMock} />);
        await waitFor(() => {
            fireEvent.click(screen.getByText('hello lorem'));
            expect(onClickMock).toHaveBeenCalledWith(2);
        });
    });




})