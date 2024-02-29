import { styled } from "styled-components"
import { ConversationThreadItem } from "./ThreadList"
import { ConversationButton } from "../App"
import { useLocation } from "react-router"

const ConversationTitle=styled.div`

display: flex;
justify-content: space-between;
`

const ButtonStack=styled.span`

`

const ProfilePicture=styled.img`
width: 70px;
height: 70px;
border-radius: 50%;

`

export const Conversation=({ deleteHandler, showDetailHandler})=>{
    
    const props=useLocation()
    const  messages=props.state.messages && Object.values(props.state.messages)
    const userDetails=props.state.userDetails && props.state.userDetails
    console.log(props)
    return(
        <>
        
       
        <ConversationTitle>
        <ProfilePicture
         src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg"
          alt="icon" data-testid="user-icon-testid"

            onLoad={() => console.log("Image loaded successfully")}
          /> 
         <h3>{userDetails.name}</h3></ConversationTitle>

<ul>
        {messages && messages.map((msg,index)=>{
            return (
                <ConversationThreadItem key={msg.id}>
                {msg.text}
                <ButtonStack>
                <ConversationButton onClick={()=>deleteHandler(msg.id)}>Delete</ConversationButton>
                <ConversationButton onClick={()=>showDetailHandler(msg)}>Show Detail</ConversationButton>
                </ButtonStack>
                </ConversationThreadItem>
                    
                 )
        })}
        </ul>

        </>
    )
}