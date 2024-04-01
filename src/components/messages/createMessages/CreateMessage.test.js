import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react";
import { CreateMessage } from "./CreateMessage";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../../Theme";
import { server } from "../../../setupTests";
import { rest } from "msw";
const render = (ui, options) => {
    return rtlRender(ui, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
        
      ),
      ...options,
    });
  };

describe('Create Message', () => {
    it("should render message input",async ()=>{
        
        render(<CreateMessage/>)
        const placeholder=await screen.findByPlaceholderText("Type Message")
        expect(placeholder).toBeInTheDocument()
    })
    it("should render send button",async ()=>{
        render(<CreateMessage/>)
        const sendButton=await screen.findByTestId("send-button")
        expect(sendButton).toBeInTheDocument()
    })

    it("should send message on clicking send button",async ()=>{
        render(<CreateMessage/>)
        const placeholder=await screen.findByPlaceholderText("Type Message")
        fireEvent.change(placeholder,{target:{value:"hello"}})
        const sendButton=await screen.findByTestId("send-button")
        fireEvent.click(sendButton);
        const sentRespose=await screen.findByText("Message sent")
        await waitFor(async ()=>{
           
        expect(sentRespose).toBeInTheDocument()
        expect(screen.queryByText("Message cant be blank")).toBeNull()
        expect(screen.queryByText("Internal Server Error")).toBeNull()
        })
        
    })

    it("should show error on errorneous sending of message",async ()=>{
        server.use(
            rest.post('https://api.example.com/send-message', (req, res, ctx) => {
            
            return res(
              ctx.status(500)
            );
          }),
        )
        render(<CreateMessage/>)
        const placeholder=await screen.findByPlaceholderText("Type Message")
        fireEvent.change(placeholder,{target:{value:"hello"}})
        const sendButton=await screen.findByTestId("send-button")
        fireEvent.click(sendButton);
        const sentRespose=await screen.findByText("Internal Server Error")
        await waitFor(async ()=>{
           
        expect(sentRespose).toBeInTheDocument()
        expect(screen.queryByText("Message cant be blank")).toBeNull()
        expect(screen.queryByText("Message sent")).toBeNull()
        })
        
    })
    it("should show error on errorneous sending of blank message",async ()=>{
       
        render(<CreateMessage/>)
        const placeholder=await screen.findByPlaceholderText("Type Message")
        // fireEvent.change(placeholder,{target:{value:"hello"}})
        const sendButton=await screen.findByTestId("send-button")
        fireEvent.click(sendButton);
        const sentRespose=await screen.findByText("Message cant be blank")
        
        await waitFor(async ()=>{
           
        expect(sentRespose).toBeInTheDocument()
        expect(screen.queryByText("Internal Server Error")).toBeNull()
        expect(screen.queryByText("Message sent")).toBeNull()
        })
        
    })
});

// error state, not sent