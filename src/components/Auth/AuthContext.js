import { createContext, useState } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { useRoutes } from "react-router-dom";
import { Home } from "../home/Home";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useLocalStorage("isLoggedIn");
  const [userDetails, setUserDetails] = useState({ name: "Fischer" });
  const routes=useRoutes(
    [
        {
            path:"/logout",
            element:()=>{
                logout()
                console.log("ka")
              return  <Home/>
            }
        }
    ]
  )
  const login = (username, password) => {
    setLoggedIn(true);
  };
  const logout = () => {
    console.log("logging out")
    setLoggedIn(false);
  };

  return (
   
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        login,
        logout,
        userDetails,
        setUserDetails,
      }}
    > {routes}
      {children}
    </AuthContext.Provider>
  );
};
