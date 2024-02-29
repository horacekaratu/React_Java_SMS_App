import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Conversation } from "./Conversation";
import { messages, userDetails } from "../App";

describe("Conversation Component", () => {
  it("should show  username ", () => {
    render(<Conversation message={messages} userDetails={userDetails} />);
    expect(screen.getByText("Davis Shuma")).toBeInTheDocument();
  });
});

describe("Conversation Component", () => {
  it("should show icon ", () => {
    render(<Conversation message={messages} userDetails={userDetails} />);
    expect(screen.getByTestId("user-icon-testid")).toBeInTheDocument();
  });
});

describe("Conversation Component", () => {
  it("should show messages ", () => {
    render(<Conversation messages={messages} userDetails={userDetails} />);
    expect(screen.getByText("wanna play some chess")).toBeInTheDocument();
    expect(screen.getByText("Nyet")).toBeInTheDocument();
    expect(
      screen.getByText("I just won a world championship")
    ).toBeInTheDocument();
  });
});

describe("Conversation Component", () => {
  it("should delete message", async () => {
    const mockOnDelete = jest.fn();
    render(
      <Conversation
        messages={messages}
        userDetails={userDetails}
        deleteHandler={mockOnDelete}
      />
    );

    await waitFor(() => {
      fireEvent.click(
        screen.getByText("wanna play some chess")
        .querySelector("button")
      );

      expect(mockOnDelete).toHaveBeenCalledWith(1);
    });
  });
});

describe("Conversation Component", () => {
    it("should show detail", async () => {
      const mockOnShowDetail = jest.fn();
      render(
        <Conversation
          messages={messages}
          userDetails={userDetails}
         showDetailHandler={mockOnShowDetail}
        />
      );
  
      await waitFor(() => {
        fireEvent.click(
          screen.getByText("wanna play some chess")
          .querySelectorAll("button")[1]
        );
  
        expect(mockOnShowDetail).toHaveBeenCalledWith(messages[1]);
      });
    });
  });