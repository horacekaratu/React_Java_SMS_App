import { useEffect, useState } from "react";
import { styled} from "styled-components";
import {  ConversationThreadListContainer } from "./Conversation";
import { BaseThreadItem, ThreadItem } from "../styled/ThreadItem";
import { LoadingMessage } from "../styled/LoadingStateMessage";
import { SideBarThreadsContainer } from "../styled/ListContainer";
import { useAuth } from "../Auth/useAuth"


const ThreadTitle = styled.h2`
`;
const ThreadSubTitle = styled.h3`
`;


// redplace with error boundary

export const ThreadList = ({ handleOnClick }) => {
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [_, setError] = useState(false);
  useAuth(window.location.pathname)

  useEffect(() => {
    console.log("Threadlist reload")
    const fetchData = async () => {
      await fetch("https://api.example.com/users")
        .then((res) => {
          
          if (!res.ok) {
            setError(() => {
              throw new Error("Network Error");
            });
          }
          return res.json();
        })
        .then((data) => {
          setMessages(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);
  return (

    
    <div data-testid="thread-list" style={{margin : "0px 16px",  }}>

   


      {/* <ThreadTitle>Message Threads</ThreadTitle> */}
      {isLoading && (
        <LoadingMessage>Message Threads Loading ...</LoadingMessage>
      )}
      {!isLoading && (
        <>
        <ThreadTitle>Threads</ThreadTitle>
          {/* <ThreadSubTitle>Threads</ThreadSubTitle> */}

          <SideBarThreadsContainer>
            {messages.map((msg, index) => (
              <ThreadItem key={index} onClick={() => handleOnClick(msg.id)}>
                {msg.message}
              </ThreadItem>
            ))}
            </SideBarThreadsContainer>
        </>
      )}
    </div>
  );
};
