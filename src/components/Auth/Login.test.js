import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from "@testing-library/react";
import { Login } from "./Login";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../Theme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const AuthContextValue = {
  isLoggedIn: true,
  setLoggedIn:jest.fn().mockImplementation(()=>{
      AuthContextValue.isLoggedIn=!AuthContextValue.isLoggedIn;
  }),
  login: jest.fn().mockImplementation(()=>{
      AuthContextValue.setLoggedIn()
  }),
  logout:jest.fn().mockImplementation(()=>{
      // AuthContextValue.setLoggedIn()
  }), 
  userDetails: { name: 'Fischer' },
   setUserDetails:jest.fn().mockImplementation(()=>{
      { name: 'Topalov' }
  }),
  
  // Set the value of isLoggedIn for testing purposes
};

const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={Theme}>
      <MemoryRouter initialEntries={[{pathname:"/login", state:{from:"/testf"}}]}>
      <AuthContext.Provider value={AuthContextValue}>
      {children}
      </AuthContext.Provider>
      </MemoryRouter>
      </ThemeProvider>
    ),
  });
};
describe("Login Component", () => {
  it("should render Login Title", () => {
    render(<Login />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });
  it("should render Name field", async () => {
    render(<Login />);
    await waitFor(() => {
      const name = screen.getByLabelText("Name");
      expect(name).toBeInTheDocument();
    });
  });
  it("should render Password field", async () => {
    render(<Login />);
    await waitFor(() => {
      const password = screen.getByLabelText("Password");
      expect(password).toBeInTheDocument();
    });
  });
  it("should render Login Button", () => {
    render(<Login />);
    const title = screen.getByRole("button", { name: "login" });
    expect(title).toBeInTheDocument();
  });
  it("should render loading on button click with right data", async () => {
    render(<Login />);
    const name = screen.getByLabelText("Name");
    const password = screen.getByLabelText("Password");
    
      fireEvent.change(name, { target: { value: "Fischer" } });
      fireEvent.change(password, { target: { value: "Fischer123" } });
      const loginButton = screen.getByRole("button", { name: "login" });
      fireEvent.click(loginButton);
      expect(screen.getByText("Loading ...")).toBeInTheDocument()
  });

  it("should not login with invalid data", async () => {
    render(<Login />);
    const loginButton = screen.getByRole("button", { name: "login" });
    await waitFor(() => {
      fireEvent.click(loginButton);
      expect(
        screen.getByText("Invalid username or password")
      ).toBeInTheDocument();
    });
  });
  it("should login on clicking login", async () => {
    render(<Login />);
    const name = screen.getByLabelText("Name");
    const password = screen.getByLabelText("Password");
    await waitFor(() => {
      fireEvent.change(name, { target: { value: "Fischer" } });
      fireEvent.change(password, { target: { value: "Fischer123" } });
      const loginButton = screen.getByRole("button", { name: "login" });
      fireEvent.click(loginButton);
      expect(screen.queryByText("Invalid username or password")).toBeNull();
    });
  });
});
