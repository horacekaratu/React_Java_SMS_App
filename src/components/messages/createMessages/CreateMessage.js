import { Button } from "../../styled/Buttons";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useState } from "react";
import { Input } from "../../styled/Input";
import { styled } from "styled-components";
import {WhiteIcon} from "../../styled/Icons"
const NewMessageInput=styled(Input)`
margin-right: var(--base-point);
`
const NewMessageButton=styled(Button)`
  padding: calc(var(--base-point)*1.19) calc(var(--base-point)*2);
  position: absolute;
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
            <NewMessageInput  type="text" placeholder="Type Message" value={message.message}

                onChange={(event)=>{
                    setIsError(false)
                    setIsSent(false)
                    setMessage({...message,message:event.target.value})
                }}
            />
            <NewMessageButton data-testid="send-button" onClick={sendMessageHandler}>
             <span>
             <WhiteIcon  icon={ faPaperPlane } />
             </span>
            </NewMessageButton>
            </div>
        

        </>
    )
}