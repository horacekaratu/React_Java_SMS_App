import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styled/ErrorFallBack";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useState } from "react";
import { Input } from "../styled/Input";
import { styled } from "styled-components";

export const InputMR1=styled(Input)`
margin-right: var(--base-point);
`
export const IconButton=styled(Button)`
  padding: calc(var(--base-point)*1.19) calc(var(--base-point)*2);
  position: absolute;
  /* height: calc(var(--base-point)*3); */
`;

export const CustomIconWhite = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.neutrals.white};

`;
export const CreateMessage=({conversationid,sender})=>{
    const [message,setMessage]=useState({sender:null,message:"",conversationid:null})
    const [isError,setIsError]=useState(false)
    const [isSent, setIsSent]=useState(false)

    useEffect(()=>{
        setMessage({sender:sender,message:"",conversationid:conversationid})
    },[conversationid,sender])
    const sendMessageHandler= ()=>{
      console.log(message.message)
        if(message.message===undefined|message.message===""){
           setIsError("Message cant be blank")
           setTimeout(() => {
            setIsError(false)
         }, 2000);
        }else{
     console.log(message)
        fetch("https://api.example.com/send-message",{
            method:"post",
            body: JSON.stringify(message),
        }).then(response=>{
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
    setMessage({...message,message:""})
    }
    return(
        <>
        {isSent && <p>Message sent</p>}
        {isError && <p>{isError}</p>}
        
        <div>
            <InputMR1  type="text" placeholder="Type Message" value={message.message}

                onChange={(event)=>{
                    setIsError(false)
                    setIsSent(false)
                    setMessage({...message,message:event.target.value})
                }}
            />
            <IconButton data-testid="send-button" onClick={sendMessageHandler}>
             <span>
             <CustomIconWhite  icon={ faPaperPlane } />
             </span>
            </IconButton>
            </div>
        

        </>
    )
}