import { css, styled, useTheme } from "styled-components"
import { useLocation } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons"
import { BaseThreadItem } from "./styled/ThreadItem"
import { ScollbarWrapper } from "./styled/ScrollBarWrapper"
import { Title } from "./styled/Title"
import { ProfilePicture } from "./styled/ProfilePicture"
import { ErrorButton } from "./error-handling/ErrorFallBack"

export const ConversationButton=styled(ErrorButton)`
margin-left: var(--base-point);
padding: calc(var(--base-point)* 1) var(--base-point);
visibility: hidden;

${props=>props.$error && css`
background-color: ${(props)=>props.theme.colors.contextual.error} ;
`}

`

export const ConversationThreadItem=styled(BaseThreadItem)`

display: flex;  
flex-direction: row;
justify-content: space-between;
max-width: 40%;
background-color: ${props=>props.theme.colors.lightNeutral.light} ;
color: ${props=>props.theme.colors.darkNeutral.dark} ;
box-shadow: 1px 2px 5px ${props=>props.theme.colors.primary.desaturated};


&:hover{
  button{
    visibility: visible;
  }
}

${props=>props.$incomming && css`
margin-left: ${props => props.$incomming ? 'auto' : '50%'};

`}


`

const AlignmentContainer=styled.div`
`
const ConversationTitle=styled(Title)`
h3{
    color:  ${(props) => props.theme.colors.primary.dark};
}
`


export const ThreadListContainer=styled.ul`
max-height: 59vh;
overflow-x: auto;

`

const ButtonStack=styled.span`

`



export const Conversation=({deleteHandler,showDetailHandler})=>{
  const theme=useTheme()
    const props=useLocation()
    const  messages=props.state.messages && Object.values(props.state.messages)
    const userDetails=props.state.userDetails && props.state.userDetails

  


    return(
        <>
        
       
        <ConversationTitle>
        <ProfilePicture
         src="/picture.png"
          alt="icon" data-testid="user-icon-testid"
          /> 
         <h3>{userDetails.name}</h3>
         
         </ConversationTitle>
<ScollbarWrapper>
         <ThreadListContainer>
        {messages && messages.map((msg,index)=>{
          console.log(msg)
            return (

                <AlignmentContainer key={index}>
                <ConversationThreadItem  $incomming={msg.incomming}  >
                
                {msg.text}
                <ButtonStack data-testid="button">
                <ConversationButton onClick={()=>showDetailHandler(msg)}
                 data-testid={`show-detail-button-${msg.id}`}  
               >
                
                <FontAwesomeIcon  icon={faCircleInfo} />
                </ConversationButton>
                <ConversationButton onClick={()=>deleteHandler(msg.id)}  $error
                  data-testid={`delete-button-${msg.id}`}
                 >
                
                <FontAwesomeIcon   icon={faTrash} />
                
                </ConversationButton>
                
                </ButtonStack>
                </ConversationThreadItem>
                </AlignmentContainer>
                    
                 )
        })}
       
        </ThreadListContainer>
        </ScollbarWrapper>

        </>
    )
}