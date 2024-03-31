import { css, styled} from "styled-components"
import { useLocation } from "react-router"
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
box-shadow: 1px 2px 5px ${props=>props.theme.colors.neutrals.lightGrey};


&:hover{
  button{
    visibility: visible;
  }
}

${props=>props.$incomming && css`
margin-left: ${props => props.$incomming ? 'auto' : '50%'};

background-color: ${(props) => props.theme.colors.neutrals.lightGrey}; 
/* color: ${(props) => props.theme.colors.neutrals.darkGrey};  */


`}




`

const AlignmentContainer=styled.div`
`
const ConversationTitle=styled(Title)`
/* box-shadow: 0px 4px 4px  ${(props) => props.theme.colors.neutrals.darkGrey};  */
border-bottom:3px solid ${(props) => props.theme.colors.neutrals.darkGrey}; 
/* border-top:3px solid ${(props) => props.theme.colors.neutrals.darkGrey};  */
/* background-color: ${(props) => props.theme.colors.neutrals.lightGrey};  */
padding: calc(var(--base-point )*1);
margin-bottom: calc(var(--base-point)*1);

h3{
    color:  ${(props) => props.theme.colors.neutrals.black};
}
`


export const ConversationThreadListContainer=styled.ul`
max-height: 54vh;
overflow-x: auto;
--u: 10px;
	--c1: #f7f5f5;
	--c2: #f0eded;
	--c3: #f0eded;
	--gp: 50%/ calc(var(--u) * 16.9) calc(var(--u) * 5.8);
	background: 
		conic-gradient(from 122deg at 50% 85.15%, var(--c2) 0 58deg, var(--c3) 0 116deg, #fff0 0 100%) var(--gp),
		conic-gradient(from 122deg at 50% 72.5%, var(--c1) 0 116deg, #fff0 0 100%) var(--gp),
		conic-gradient(from 58deg at 82.85% 50%, var(--c3) 0 64deg, #fff0 0 100%) var(--gp),
		conic-gradient(from 58deg at 66.87% 50%, var(--c1) 0 64deg, var(--c2) 0 130deg, #fff0 0 100%) var(--gp),
		conic-gradient(from 238deg at 17.15% 50%, var(--c2) 0 64deg, #fff0 0 100%) var(--gp),
		conic-gradient(from 172deg at 33.13% 50%, var(--c3) 0 66deg, var(--c1) 0 130deg, #fff0 0 100%) var(--gp),
		linear-gradient(98deg, var(--c3) 0 15%, #fff0 calc(15% + 1px) 100%) var(--gp),
		linear-gradient(-98deg, var(--c2) 0 15%, #fff0 calc(15% + 1px) 100%) var(--gp),
		conic-gradient(from -58deg at 50.25% 14.85%, var(--c3) 0 58deg, var(--c2) 0 116deg, #fff0 0 100%) var(--gp),
		conic-gradient(from -58deg at 50% 28.125%, var(--c1) 0 116deg, #fff0 0 100%) var(--gp),
		linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);

`
const ButtonStack=styled.span`

`



export const Conversation=({deleteHandler,showDetailHandler})=>{

    const props=useLocation()
    const  messages=props.state.messages && Object.values(props.state.messages)
    const userDetails=props.state.userDetails && props.state.userDetails

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
        <CreateMessage  conversationid={messages[0].sender} sender={userDetails.name} />
        </div>
        </ScollbarWrapper>
        </>
    )
}