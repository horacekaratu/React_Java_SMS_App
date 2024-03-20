import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { NavigationComponent } from "./Navigation";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import {Theme} from "../../Theme"
import { wait } from "@testing-library/user-event/dist/utils";
// 1. implement as bread crumbs --follow bootstrap
// 2. have active state and the other
// 3. It shouldnt reload so it should be out of other components

 
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => {
        
      return <MemoryRouter initialIndex={0} initialEntries={[{pathname:'/',state:{}}]}
      >
       <ThemeProvider theme={Theme} >
       {children}
      </ThemeProvider>
      </MemoryRouter>
    },
    ...options,
  });
};
describe("Navigation Component", () => {
  it("should render nav items", async () => {
    render(<NavigationComponent />);
    await  waitFor(()=>{
      expect(screen.getByText("Messages")).toBeInTheDocument();
      expect(screen.getByText("Contacts")).toBeInTheDocument();
    })
   
  });
});
