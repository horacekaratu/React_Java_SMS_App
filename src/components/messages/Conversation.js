import { css, styled, useTheme } from "styled-components"
import { useLocation } from "react-router"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons"
import { BaseThreadItem } from "../styled/ThreadItem"
import { ScollbarWrapper } from "../styled/ScrollBarWrapper"
import { Title } from "../styled/Title"
import { ProfilePicture } from "../styled/ProfilePicture"
import { DisappearingButton } from "../styled/ErrorFallBack"
import { CreateMessage } from "./CreateMessage"


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
padding: calc(var(--base-point )*1);
margin-bottom: calc(var(--base-point)*1);

h3{
    color:  ${(props) => props.theme.colors.primary.base};
}
`


export const ConversationThreadListContainer=styled.ul`
max-height: 54vh;
overflow-x: auto;

`

const ButtonStack=styled.span`

`



export const Conversation=({deleteHandler,showDetailHandler})=>{

  const theme=useTheme()
    const props=useLocation()
    const  messages=props.state.messages && Object.values(props.state.messages)
    const userDetails=props.state.userDetails && props.state.userDetails
    console.log("conversation reload")
  


    return(
        <>
        {/* should be on the right bottom
         and the messages shouldnt go below it. style it aprt like the other inputs */}
        
        {/* <CreateMessage/> */}

        <ConversationTitle>
        <ProfilePicture
         src="/picture.png"
          alt="icon" data-testid="user-icon-testid"
          /> 
         <h3>{userDetails.name}</h3>
         
         </ConversationTitle>
<ScollbarWrapper>
         <ConversationThreadListContainer>
        {messages && messages.map((msg,index)=>{
        
            return (

                <AlignmentContainer key={index}>
                <ConversationThreadItem  $incomming={msg.incomming}  >
                
                {msg.text}
                <ButtonStack data-testid="button">
                <DisappearingButton  onClick={()=>showDetailHandler(msg)}
                 data-testid={`show-detail-button-${msg.id}`}  
               >
                
                <FontAwesomeIcon  icon={faCircleInfo} />
                </DisappearingButton>
                <DisappearingButton  onClick={()=>deleteHandler(msg.id)}  $error
                  data-testid={`delete-button-${msg.id}`}
                 >
                
                <FontAwesomeIcon   icon={faTrash} />
                
                </DisappearingButton >
                
                </ButtonStack>
                </ConversationThreadItem>
                </AlignmentContainer>
                    
                 )
        })}
       
        </ConversationThreadListContainer>
       
         <div  style={{
          width:"259px",
          marginLeft:"auto"
        }}>
        <CreateMessage />
        </div>
        </ScollbarWrapper>
        </>
    )
}