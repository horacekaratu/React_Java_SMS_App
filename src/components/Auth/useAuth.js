import { useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"

export const useAuth=(page)=>{
    
    const navigate=useNavigate()
    const {isLoggedIn}=useContext(AuthContext)
    useEffect(()=>{
      console.log("Auth reload")
        if(!isLoggedIn){
          // navigate(`/login`,{state:{from:window.location.pathname}})
          navigate(`/login`,{state:{from:page}})
        }
       },[isLoggedIn])
}