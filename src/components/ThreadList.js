import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import { styled } from "styled-components";
export const BaseThreadItem = styled.li`
  /* box model styling--basic */
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;

  cursor: pointer;
  /* list speciific styling  */
  list-style-position: inside;
`;
export const ThreadItem = styled(BaseThreadItem)`


  /* state css */
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.saturated};
    color: ${(props) => props.theme.colors.lightNeutral.light};
  }

  &:active {
    transform: scale(0.95);
    background-color: ${(props) => props.theme.colors.primary.base};
  }

  /* transitions */
  transition: background-color 0.3s ease;
`;
export const ConversationThreadItem=styled(BaseThreadItem)`
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: 100%;

`
const ThreadTitle = styled.h2`
`;
const ThreadSubTitle = styled.h3`
`;

const LoadingMessage = styled.div``;
// redplace with error boundary
export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.contextual.error};
`;

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

          <ul>
            {messages.map((msg) => (
              <ThreadItem key={msg.id} onClick={() => handleOnClick(msg.id)}>
                {msg.message}
              </ThreadItem>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
