import { useEffect, useState } from "react";
import { styled} from "styled-components";
import {  ThreadListContainer } from "./Conversation";
import { BaseThreadItem } from "./styled/ThreadItem";
const ThreadsContainer=styled(props => <ThreadListContainer {...props}/>)`
box-shadow: 4px 0px 0px ${props=>props.theme.colors.primary.desaturated} ;

/* text-align: center; */
`

export const ThreadItem = styled(BaseThreadItem)`


  /* state css */
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.saturated};
    color: ${(props) => props.theme.colors.lightNeutral.light};
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.95);
    background-color: ${(props) => props.theme.colors.primary.base};
  }

  /* transitions */
  transition: background-color 0.3s ease;
`;

const ThreadTitle = styled.h2`
`;
const ThreadSubTitle = styled.h3`
`;

const LoadingMessage = styled.div``;
// redplace with error boundary

export const ThreadList = ({ handleOnClick }) => {
  console.log()
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [_, setError] = useState(false);

  useEffect(() => {
   
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
          console.log(data)
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

    
    <div data-testid="thread-list" style={{margin : "0px 16px" }}>

   


      <ThreadTitle>Message Threads</ThreadTitle>
      {isLoading && (
        <LoadingMessage>Message Threads Loading ...</LoadingMessage>
      )}
      {!isLoading && (
        <>
          <ThreadSubTitle>Threads</ThreadSubTitle>

          <ThreadsContainer>
            {messages.map((msg, index) => (
              <ThreadItem key={index} onClick={() => handleOnClick(msg.id)}>
                {msg.message}
              </ThreadItem>
            ))}
            </ThreadsContainer>
        </>
      )}
    </div>
  );
};
