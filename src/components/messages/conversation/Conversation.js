import { css, styled } from "styled-components";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "../../styled/ListItem";
import { ScollbarWrapper } from "../../styled/ScrollBarWrapper";
import { TitleBox } from "../../styled/Title";
import { ProfilePicture } from "../../styled/ProfilePicture";
import { DisappearingButton } from "../../styled/Buttons";
import { CreateMessage } from "../createMessages/CreateMessage";

const ConversationListItem = styled(ListItem)`
padding-left: 0;
margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 90%;
  width: 90%;
  background-color: ${(props) => props.theme.colors.lightNeutral.light};
  color: ${(props) => props.theme.colors.darkNeutral.dark};
  box-shadow: 1px 2px 5px ${(props) => props.theme.colors.neutrals.lightGrey};
  @media (min-width: 768px) {
  max-width: 40%;
}
  &:hover {
    button {
      visibility: visible;
    }
  }

  ${(props) =>
    props.$incomming &&
    css`
    @media (min-width: 768px) {
      margin-left: ${(props) => (props.$incomming ? "auto" : "50%")};
    }
     

      background-color: ${(props) => props.theme.colors.neutrals.lightGrey};
      /* color: ${(props) => props.theme.colors.neutrals.darkGrey};  */
    `}
`;

const ConversationTitle = styled(TitleBox)`
  border-bottom: 3px solid ${(props) => props.theme.colors.neutrals.darkGrey};
  padding: calc(var(--base-point) * 1);
  margin-bottom: calc(var(--base-point) * 1);
  /* margin-left: "32px"; */


  h3 {
    color: ${(props) => props.theme.colors.neutrals.black};
  }
`;

const ConversationListContainer = styled.ul`
margin: 0px;
padding: 8px;
@media (min-width: 768px){
  margin: 8px;
  padding: 8px 16px;
}
  max-height: 54vh;
  overflow-x: auto;
  
  --u: 10px;
  --c1: #f7f5f5;
  --c2: #f0eded;
  --c3: #f0eded;
  --gp: 50% / calc(var(--u) * 16.9) calc(var(--u) * 5.8);
  background: conic-gradient(
        from 122deg at 50% 85.15%,
        var(--c2) 0 58deg,
        var(--c3) 0 116deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from 122deg at 50% 72.5%, var(--c1) 0 116deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 58deg at 82.85% 50%, var(--c3) 0 64deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(
        from 58deg at 66.87% 50%,
        var(--c1) 0 64deg,
        var(--c2) 0 130deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from 238deg at 17.15% 50%, var(--c2) 0 64deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(
        from 172deg at 33.13% 50%,
        var(--c3) 0 66deg,
        var(--c1) 0 130deg,
        #fff0 0 100%
      )
      var(--gp),
    linear-gradient(98deg, var(--c3) 0 15%, #fff0 calc(15% + 1px) 100%)
      var(--gp),
    linear-gradient(-98deg, var(--c2) 0 15%, #fff0 calc(15% + 1px) 100%)
      var(--gp),
    conic-gradient(
        from -58deg at 50.25% 14.85%,
        var(--c3) 0 58deg,
        var(--c2) 0 116deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from -58deg at 50% 28.125%, var(--c1) 0 116deg, #fff0 0 100%)
      var(--gp),
    linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);
`;

export const Conversation = ({ deleteHandler, showDetailHandler }) => {
  const props = useLocation();
  const messages = props.state.messages && Object.values(props.state.messages);
  const userDetails = props.state.userDetails && props.state.userDetails;

  return (
    <>
     
      <ConversationTitle>
        <ProfilePicture
          src="/picture.png"
          alt="icon"
          data-testid="user-icon-testid"
        />
        <h3>{userDetails.name}</h3>
      </ConversationTitle>
      <ScollbarWrapper>
        <ConversationListContainer>
          {messages &&
            messages.map((msg, index) => {
              return (
                <div key={index}>
                  <ConversationListItem $incomming={msg.incomming}>
                    {msg.text}
                    <span data-testid="button">
                      <DisappearingButton
                        onClick={() => showDetailHandler(msg)}
                        data-testid={`show-detail-button-${msg.id}`}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </DisappearingButton>
                      <DisappearingButton
                        onClick={() => deleteHandler(msg.id)}
                        $error
                        data-testid={`delete-button-${msg.id}`}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </DisappearingButton>
                    </span>
                  </ConversationListItem>
                </div>
              );
            })}
        </ConversationListContainer>

        <div
          style={{
            width: "259px",
            marginLeft: "auto",
          }}
        >
          <CreateMessage
            conversationid={messages[0].sender}
            sender={userDetails.name}
          />
        </div>
      </ScollbarWrapper>
    </>
  );
};
