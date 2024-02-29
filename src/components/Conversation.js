import { styled } from "styled-components"
import { ConversationThreadItem } from "./ThreadList"
import { ConversationButton } from "../App"
import { useLocation } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

// 1. Handle test problems with styled componetn inheritance
// 6. Recreate the test after refactoring and integration 
// 7. push to git 
const StyledScollbarWrapper = styled.div`
  overflow-y: auto; /* Enable vertical scrolling for content */
  max-height: 100%; /* Allow content to take full height of the message box */
  /* Style the scrollbar */
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary.base};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary.saturated};
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: ${(props) => props.theme.colors.primary.dark}; /* Color of the scrollbar thumb when active (clicked) */
  }
  ::-webkit-scrollbar-track {
    border-radius: 60px; /* Border radius of the scrollbar track */
  }
`;
const AlignmentContainer=styled.div`
`
const ConversationTitle=styled.div`
margin-bottom: calc(var(--base-point)*2);
display: flex;
justify-content: space-between;
background-color:  ${(props) => props.theme.colors.primary.background};
border-radius: var(--base-point);
padding: 16px;
h3{
    color:  ${(props) => props.theme.colors.primary.dark};
}

`
export const ThreadListContainer=styled.ul`
max-height: 62vh;
overflow-x: auto;

`

const ButtonStack=styled.span`

`

const ProfilePicture=styled.img`
width: 70px;
height: 70px;
border-radius: 50%;

`

export const Conversation=({deleteHandler,showDetailHandler})=>{
    const props=useLocation()
    const  messages=props.state.messages && Object.values(props.state.messages)
    const userDetails=props.state.userDetails && props.state.userDetails

  


    return(
        <>
        
       
        <ConversationTitle>
        <ProfilePicture
         src=""
          alt="icon" data-testid="user-icon-testid"
          /> 
         <h3>{userDetails.name}</h3>
         
         </ConversationTitle>
<StyledScollbarWrapper>
         <ThreadListContainer>
        {messages && messages.map((msg,index)=>{
            return (
                <AlignmentContainer key={index}>
                <ConversationThreadItem  $incomming={msg.incomming}>
                {msg.text}
                <ButtonStack>
                <ConversationButton onClick={()=>deleteHandler(msg.id)}>
                
                <FontAwesomeIcon  icon={faTrash} />
                
                </ConversationButton>
                <ConversationButton onClick={()=>showDetailHandler(msg)}>
                
                <FontAwesomeIcon  icon={faCircleInfo} />
                </ConversationButton>
                </ButtonStack>
                </ConversationThreadItem>
                </AlignmentContainer>
                    
                 )
        })}
       
        </ThreadListContainer>
        </StyledScollbarWrapper>

        </>
    )
}