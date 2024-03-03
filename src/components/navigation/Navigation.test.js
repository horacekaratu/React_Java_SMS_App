import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { NavigationComponent } from "./Navigation";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
// 1. implement as bread crumbs --follow bootstrap
// 2. have active state and the other
// 3. It shouldnt reload so it should be out of other components
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => {
      return <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>;
    },
    ...options,
  });
};
describe("Navigation Component", () => {
  it("should render nav items", () => {
    render(<NavigationComponent />);
    expect(screen.getByText("Messages")).toBeInTheDocument();
    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });
});
