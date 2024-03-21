import { createContext, useState } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
const [isLoggedIn, setLoggedIn]=useLocalStorage("isLoggedIn")
console.log("am i logged in ")
console.log(isLoggedIn)
const [userDetails, setUserDetails]=useState({name:"Fischer"})
const login=(username, password)=>{
  
    setLoggedIn(true);
    console.log("login clicked : "+isLoggedIn)
}
const logout=(username, password)=>{
   
    setLoggedIn(false);
    console.log("logout clicked : "+isLoggedIn)
}

    return(
        <AuthContext.Provider value={{isLoggedIn,setLoggedIn,login,logout, userDetails, setUserDetails}}>
            {children}
        </AuthContext.Provider>
    )
}