import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { Conversation } from "./Conversation";
import { Theme } from "../../Theme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { messages, userDetails } from "../../App";

const initialState = {
  messages: messages,
  userDetails: userDetails,
};
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

describe("Conversation Component", () => {
  const mockeDeleteHandler = jest.fn();
  const mockeShowDetailsHandler = jest.fn();

  it("should show  username ", () => {
    render(
      <Conversation
        deleteHandler={mockeDeleteHandler}
        showDetailHandler={mockeShowDetailsHandler}
      />
    );
    expect(screen.getByText("Alexander Alekhine")).toBeInTheDocument();
  });

  it("should show icon ", () => {
    render(<Conversation message={messages} userDetails={userDetails} />);
    expect(screen.getByTestId("user-icon-testid")).toBeInTheDocument();
  });
  it("should show messages ", () => {
    render(<Conversation messages={messages} userDetails={userDetails} />);
    expect(screen.getByText("wanna play some chess")).toBeInTheDocument();
    expect(screen.getByText("alitema moal")).toBeInTheDocument();
  });
  it("should delete message", async () => {
    const mockOnDelete = jest.fn();
    render(
      <Conversation
        messages={messages}
        userDetails={userDetails}
        deleteHandler={mockOnDelete}
      />
    );
    const deleteButton=await screen.findByTestId("delete-button-2")
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalledWith(2);
    });
  });

  it("should show detail", async () => {
    const mockOnShowDetail = jest.fn();
    const mockOnDelete = jest.fn();
    render(
      <Conversation
        messages={messages}
        userDetails={userDetails}
        deleteHandler={mockOnDelete}
        showDetailHandler={mockOnShowDetail}
      />
    );
    const showDetailsButton=await screen.getByTestId("show-detail-button-2")
    fireEvent.click(showDetailsButton);
    await waitFor(() => {
      expect(mockOnShowDetail).toHaveBeenCalledWith(messages[2]);
    });
  });
});
