import { useContext, useState } from "react";
import { Button } from "../styled/ErrorFallBack";
import { InputContainer, InputGroup } from "../styled/FormElements";
import { Input } from "../styled/Input";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useLocalStorage } from "../../utils/useLocalStorage";
const LoginContainer=styled.div`
max-width: 350px;
margin: auto;
margin-top: calc(var(--base-point)*8);
`
export const Login=()=>{
    
    const navigate=useNavigate()
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [isError,setIsError]=useState(false)
    const [isLoading, setIsLoading]=useState(false)
    const {state:{from}}=useLocation()
    const {setLoggedIn}=useContext(AuthContext)
    const [isLoggedIn, setIsLoggedIn]=useLocalStorage("isLoggedIn",false,1)

    const handleInputChange=(inputType,value)=>{
       
    setIsError(false)
       if(inputType==="name"){
        setUsername(value)
       }else if(inputType==="password") {
        setPassword(value)
       }else{
        setIsError(true)
       }
    }
    const handleSubmit=()=>{
        
        if(!username|!password){
            setIsError(true)
        }else{
            setIsLoading(true)
            fetch("https://api.example.com/login")
            .then(response=>{
                if(!response.ok){
                    setIsError(true)
                }
                return response.json()
            }).then(data=>{
                setIsLoading(false)
                // save to local storage using a custom hook. also create an extractor in the hook
                setIsLoggedIn(true)
                setLoggedIn(true)
                navigate(from)

            })

        }

    }
    return (<LoginContainer>
        <h2 >Login</h2>
       {isError && <p>Invalid username or password</p>}
       {isLoading && <p>Loading ...</p>}
        <InputGroup>
        </InputGroup>
        <InputContainer>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" onChange={event=>{
            handleInputChange(event.target.name, event.target.value)
        }} />
        </InputContainer>
        <InputContainer>
        <label htmlFor="password" >Password</label>
        <Input type="password" id="password" name="password" onChange={event=>{
            handleInputChange(event.target.name, event.target.value)
        }} />
        </InputContainer>
        <Button aria-label="login" onClick={()=>handleSubmit()}>Login</Button>
    </LoginContainer>)
}