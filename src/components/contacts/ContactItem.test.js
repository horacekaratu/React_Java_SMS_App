import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { ContactItem } from "./ContactItem";
import { contacts } from "../../mocks/handlers";
import { Theme } from "../../Theme";
import { ThemeProvider } from "styled-components";
import { wait } from "@testing-library/user-event/dist/utils";

const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    ),
    ...options,
  });
};
describe("Contact Item Component", () => {
  it("should render all contact infor", async () => {
    render(<ContactItem contact={contacts[0]} />);
    await waitFor(() => {
      expect(screen.getByDisplayValue("Fischer")).toBeInTheDocument();
      expect(screen.getByDisplayValue("071771143")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Iceland")).toBeInTheDocument();
    });
  });
  it("should allow edit of each field", async () => {
    const mockHandleUpdate = jest.fn();
    const newContact = {
      id: 1,
      name: "Robert James",
      number: "1234567890",
      country: "US",
    };
    render(
      <ContactItem contact={contacts[0]} handleUpdate={mockHandleUpdate} />
    );
    await waitFor(() => {
      expect(screen.getByDisplayValue("Fischer")).toBeInTheDocument();
      expect(screen.getByDisplayValue("071771143")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Iceland")).toBeInTheDocument();
    });
    await waitFor(() => {
      fireEvent.click(screen.getByLabelText("Edit"));
      expect(screen.getByText("Update")).toBeInTheDocument();
    });
    await waitFor(() => {
      fireEvent.change(screen.getByDisplayValue("Fischer"), {
        target: { value: "Robert James" },
      });
    });

    await waitFor(() => {
      fireEvent.change(screen.getByDisplayValue("071771143"), {
        target: { value: "1234567890" },
      });
    });
    await waitFor(() => {
      fireEvent.change(screen.getByDisplayValue("Iceland"), {
        target: { value: "US" },
      });
    });
    const updateButton=await screen.findByText("Update")
    fireEvent.click(updateButton);
    await waitFor(() => {
     
    });
    expect(mockHandleUpdate).toHaveBeenCalledWith(newContact);
  });

  it("should allow delete", async () => {
    const mockHandleDelete = jest.fn();
    render(
      <ContactItem contact={contacts[0]} handleDelete={mockHandleDelete} />
    );
    const deleteButton=await screen.findByText("Delete")
    fireEvent.click(deleteButton);
    await waitFor(() => {
      
      expect(mockHandleDelete).toHaveBeenCalledWith(contacts[0].id);
    });
  });

});
