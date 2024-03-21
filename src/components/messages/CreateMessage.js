import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styled/ErrorFallBack";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {  useState } from "react";
import { Input } from "../styled/Input";
import { styled } from "styled-components";

export const InputMR1=styled(Input)`
margin-right: var(--base-point);
`
export const IconButton=styled(Button)`
  padding: calc(var(--base-point)*1.19) calc(var(--base-point)*2);
  /* height: calc(var(--base-point)*3); */
`;

export const CustomIconWhite = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.neutrals.white};

`;
export const CreateMessage=()=>{
    const [message,setMessage]=useState("")
    const [isError,setIsError]=useState(false)
    const [isSent, setIsSent]=useState(false)
    const sendMessageHandler= ()=>{
      
        if(message===""){
           setIsError("Message cant be blank")
           setTimeout(() => {
            setIsError(false)
         }, 2000);
        }else{
     
        fetch("https://api.example.com/send-message",{
            method:"post",
            body: JSON.stringify(message),
        }).then(response=>{
            console.log(response.statusText)
            if(!response.ok){
                setIsError(response.statusText)
            }
            else{

            
            setIsSent(true)
            setIsError(false)
            setTimeout(() => {
               setIsError(false)
               setIsSent(false)
            }, 2000);
        }
        })
    }
    setMessage("")
    }
    return(
        <>
        {isSent && <p>Message sent</p>}
        {isError && <p>{isError}</p>}
        
            <InputMR1  type="text" placeholder="Type Message" value={message}

                onChange={(event)=>{
                    setIsError(false)
                    setIsSent(false)
                    setMessage(event.target.value)
                }}
            />
            <IconButton data-testid="send-button" onClick={sendMessageHandler}>
             <span>
             <CustomIconWhite  icon={ faPaperPlane } />
             </span>
            </IconButton>
        

        </>
    )
}