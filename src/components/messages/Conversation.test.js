import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react";
import { Conversation } from "./Conversation";
import { messages, userDetails } from "../../App";
import { Theme } from "../../Theme";
import { ThemeProvider } from "styled-components";
import {  MemoryRouter} from "react-router-dom";

const initialState = {
  messages: messages,
  userDetails: userDetails,
};
const render=(ui,options)=>{
  return rtlRender(ui,{
      wrapper:({children})=>(
        <MemoryRouter 
         initialIndex={0}
         initialEntries={[{ pathname: '/', state: initialState }]}>
               <ThemeProvider theme={Theme}>
              {children}
          </ThemeProvider>
          </MemoryRouter>
      ), ...options
  })
  
  
  }

// describe("Conversation Component", () => {
//   const mockeDeleteHandler=jest.fn()
//   const mockeShowDetailsHandler=jest.fn()

//   it("should show  username ", () => {
//     render(<Conversation  deleteHandler={mockeDeleteHandler}  showDetailHandler={mockeShowDetailsHandler} />);
//     expect(screen.getByText("Alexander Alekhine")).toBeInTheDocument();
//   });
// });

// describe("Conversation Component", () => {
//   it("should show icon ", () => {
//     render(<Conversation message={messages} userDetails={userDetails} />);
//     expect(screen.getByTestId("user-icon-testid")).toBeInTheDocument();
//   });
// });

// describe("Conversation Component", () => {
//   it("should show messages ", () => {
//     render(<Conversation messages={messages} userDetails={userDetails} />);
//     expect(screen.getByText("wanna play some chess")).toBeInTheDocument();
//     expect(screen.getByText("alitema moal")).toBeInTheDocument();
//   });
// });

// describe("Conversation Component", () => {
//   it("should delete message", async () => {
//     const mockOnDelete = jest.fn();
//     render(
//       <Conversation
//         messages={messages}
//         userDetails={userDetails}
//         deleteHandler={mockOnDelete}
//       />
//     );

//     await waitFor(() => {
//       fireEvent.click(screen.getByTestId('delete-button-2'));

//       expect(mockOnDelete).toHaveBeenCalledWith(2);
//     });
//   });
// });

describe("Conversation Component", () => {
    it("should show detail", async () => {
      const mockOnShowDetail = jest.fn();
      const mockOnDelete = jest.fn();
      render(
        <Conversation
          messages={messages}
          userDetails={userDetails}
deleteHandler={mockOnDelete}  showDetailHandler={mockOnShowDetail}
        />
      );
  
      await waitFor(() => {

        fireEvent.click(screen.getByTestId("show-detail-button-2"));
        expect(mockOnShowDetail).toHaveBeenCalledWith(messages[2]);
      });
    });
  });