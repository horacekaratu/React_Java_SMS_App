import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./AuthContext";

const TestingComponent = () => {
  const {
    isLoggedIn,
    login,
    logout,
    setLoggedIn,
    userDetails,
    setUserDetails,
  } = useContext(AuthContext);

  return (
    <>
      <p>{userDetails.name} </p>
      <p>{isLoggedIn ? "loggedin " : "loggedout"}</p>
      <button onClick={logout}>Logout</button>
      <button onClick={login}>Login</button>
      <button onClick={()=>{
        setUserDetails({
            name:"changed"
        })
      }}>SetUserData</button>
    </>
  );
};
const renderComponent = () => {
  render(
    <AuthContextProvider>
      <TestingComponent />
    </AuthContextProvider>
  );
};
describe("AuthProvider Context", () => {
  it("should initialize with the right values", () => {
    renderComponent();
    expect(screen.getByText("Fischer")).toBeInTheDocument();
    expect(screen.getByText("loggedout")).toBeInTheDocument();
  });
  
  it("should login", async () => {
    renderComponent();
    fireEvent.click(screen.getByText("Login"));
    await waitFor(() => {
      expect(screen.queryByText("loggedout")).toBeNull();
      expect(screen.getByText("loggedin")).toBeInTheDocument();
    });
  });

  it("should logout", async () => {
    renderComponent();
    fireEvent.click(screen.getByText("Login"));
    await waitFor(() => {
      expect(screen.queryByText("loggedout")).toBeNull;
      expect(screen.queryByText("loggedin")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("Logout"));
    await waitFor(() => {
      expect(screen.queryByText("loggedin")).toBeNull;
      expect(screen.getByText("loggedout")).toBeInTheDocument();
    });
  });

  it("should set userdetails", async () => {
    renderComponent();
    fireEvent.click(screen.getByText("SetUserData"));
    await waitFor(() => {
        expect(screen.queryByText("Fischer")).toBeNull()
        expect(screen.queryByText("changed")).toBeInTheDocument();
    });
  });
});
