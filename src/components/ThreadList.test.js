import { screen, render, waitFor, fireEvent } from "@testing-library/react"
import { ThreadList } from "./ThreadList";
import { click } from "@testing-library/user-event/dist/click";
import { server } from "../setupTests";
import { rest } from "msw";
describe('ThreadList Component',()=>{
    it("should render the title", async ()=>{
        render(<ThreadList/>)
        expect(screen.getByText('Message Threads')).toBeInTheDocument();

    });
    it("should render loading state", async()=>{
        render (<ThreadList/>)
        expect(screen.getByText('Message Threads Loading')).toBeInTheDocument();

    });

    it("should render error state", async()=>{
        server.use(()=>{
            rest.get('https://api.example.com/users',(req,res,ctx)=>{
                return res(ctx.status(500))
            })
        })
        render (<ThreadList/>)
        await waitFor(()=>{
        expect(screen.getByText('Message Threads Error')).toBeInTheDocument();
    }) 

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