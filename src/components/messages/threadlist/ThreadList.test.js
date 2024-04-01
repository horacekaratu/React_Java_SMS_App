import {
  screen,
  render as rtlRender,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { ThreadList } from "./ThreadList";
import { Theme } from "../../Theme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

// Mock AuthContext
const AuthContextValue = {
  isLoggedIn: false,
  setLoggedIn: jest.fn().mockImplementation(() => {
    // AuthContextValue.isLoggedIn=!AuthContextValue.isLoggedIn;
  }),
  login: jest.fn().mockImplementation(() => {
    // AuthContextValue.setLoggedIn()
  }),
  logout: jest.fn().mockImplementation(() => {
    // AuthContextValue.setLoggedIn()
  }),
  userDetails: { name: "Fischer" },
  setUserDetails: jest.fn().mockImplementation(() => {
    {
      name: "Topalov";
    }
  }),

  // Set the value of isLoggedIn for testing purposes
};
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <AuthContext.Provider value={AuthContextValue}>
            {children}
          </AuthContext.Provider>
        </MemoryRouter>
      </ThemeProvider>
    ),
    ...options,
  });
};

describe("ThreadList Component", () => {
  // it("should render the title", async ()=>{
  //     render(<ThreadList/>)
  //     expect(screen.getByText('Message Threads')).toBeInTheDocument();

  // });
  it("should render loading state", async () => {
    render(<ThreadList />);
    expect(screen.getByText("Loading ...")).toBeInTheDocument();
  });

  it("should render threads", async () => {
    render(<ThreadList />);
    await waitFor(() => {
      expect(screen.getByText("Threads")).toBeInTheDocument();
      expect(screen.getByText("hello john")).toBeInTheDocument();
      expect(screen.getByText("hello lorem")).toBeInTheDocument();
    });
  });

  it("should set selected thread id on clicking thread", async () => {
    const onClickMock = jest.fn();
    render(<ThreadList handleOnClick={onClickMock} />);
    const helloText = await screen.findByText("hello lorem");
    fireEvent.click(helloText);
    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledWith(2);
    });
  });
});
