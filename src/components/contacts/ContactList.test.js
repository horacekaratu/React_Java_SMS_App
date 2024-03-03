// 1. Dispay number but with faint color 

import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ContactList } from "./Contacts";
import { Theme } from "../../Theme";
const initialState = {};
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter
        initialIndex={0}
        initialEntries={[{ pathname: "/", state: initialState }]}
      >
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      </MemoryRouter>
    ),
    ...options,
  });
};

describe("ContactList Component", () => {
  it("should display loading state", () => {
    render(<ContactList />);
    expect(screen.getByText("Loading ...")).toBeInTheDocument();
  });

  it("should display all names", async () => {
    render(<ContactList />);
    await waitFor(() => {
      expect(screen.getByText("Fischer")).toBeInTheDocument();
      expect(screen.getByText("Topalov")).toBeInTheDocument();
      expect(screen.getByText("Kramnik")).toBeInTheDocument();
      expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
    });
  });

  it("should display all numbers", async () => {
    render(<ContactList />);
    await waitFor(() => {
      expect(screen.getByText("071771143")).toBeInTheDocument();
      expect(screen.getByText("071771153")).toBeInTheDocument();
      expect(screen.getByText("071771163")).toBeInTheDocument();
    });
  });

  // it("should delete a contact on click", async () => {
  //   const deleteHandler = jest.fn();
  //   render(<ContactList onDeleteHandler={deleteHandler} />);

  //   await waitFor(() => {
  //     fireEvent.click(screen.getByTestId("delete-button-1"));

  //     expect(deleteHandler).toHaveBeenCalledWith(1);
  //   });
  // });

  // it("should show  detail of a contact on click", async () => {
  //   const showDetailHandler = jest.fn();
  //   render(<ContactList onShowDetailHandler={showDetailHandler} />);

  //   await waitFor(() => {
  //     fireEvent.click(screen.getByTestId("show-detail-button-1"));

  //     expect(showDetailHandler).toHaveBeenCalledWith(1);
  //   });
  // });

  it("should search contacts by name", async () => {
    const showDetailHandler = jest.fn();
    render(<ContactList />);

    await waitFor(() => {
      fireEvent
        .change(screen.getByPlaceholderText("Enter contact name"), {
          target: { value: "Fischer" },
        })
        
        expect(screen.getByText("Fischer"))
        .toBeInTheDocument();
      expect(screen.queryByText("Topalov")).not.toBeInTheDocument();
      expect(screen.queryByText("Kramnik")).not.toBeInTheDocument();
    });
  });
});
