import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { NewMessage } from "./NewMessage";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../Theme";
import { useState } from "react";
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    ),
    ...options,
  });
};

describe("New Message Component", () => {
  it("should display add convo icon", () => {
    render(<NewMessage />);
    expect(screen.getByTestId("add-convo")).toBeInTheDocument();
  });
  it("should toggle convo icon on click", async () => {
    const mockHandleToggle = jest.fn();
    render(<NewMessage setToggle={mockHandleToggle} />);
    const convoButton = screen.getByTestId("add-convo");
    fireEvent.click(convoButton);
    await waitFor(() => {
      expect(mockHandleToggle).toHaveBeenCalled();
    });
  });
  it("should show contacts on click", async () => {
    const mockHandleSelect = jest.fn();

    const mockSetToggle = jest.fn();
    const { rerender } = render(
      <NewMessage
        toggle={false}
        handleSelectContact={mockHandleSelect}
        setToggle={mockSetToggle}
      />
    );
    const convoButton = screen.getByTestId("add-convo");
    fireEvent.click(convoButton);
    rerender(
      <NewMessage
        toggle={true}
        handleSelectContact={mockHandleSelect}
        setToggle={mockSetToggle}
      />
    );
    const contactSearch = await screen.findByPlaceholderText(
      "Enter contact name"
    );
    expect(contactSearch).toBeInTheDocument()
    
  });
  it("should hides contacts on click", async () => {
    const mockHandleSelect = jest.fn();

    const mockSetToggle = jest.fn();
    const { rerender } = render(
      <NewMessage
        toggle={true}
        handleSelectContact={mockHandleSelect}
        setToggle={mockSetToggle}
      />
    );
    const convoButton = screen.getByTestId("add-convo");
    fireEvent.click(convoButton);
    rerender(
      <NewMessage
        toggle={false}
        handleSelectContact={mockHandleSelect}
        setToggle={mockSetToggle}
      />
    );
    const contactSearch = screen.queryByPlaceholderText(
      "Enter contact name"
    );
    expect(contactSearch).not.toBeInTheDocument()
    
  });
});
