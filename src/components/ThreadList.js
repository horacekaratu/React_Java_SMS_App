import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ThreadItem = styled.li`
  /* box model styling--basic */

  max-width: 30%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;

  cursor: pointer;

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

  /* list speciific styling  */
  list-style-position: inside;
`;

const ThreadTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary.base};
`;
const ThreadSubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary.base};
`;

const LoadingMessage = styled.div``;
// redplace with error boundary
export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.contextual.error};
`;

export const ThreadList = ({ handleOnClick }) => {
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [_, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
     
        await fetch("https://api.example.com/users").then((res) => {
          if (!res.ok) {
            setError(() => {
              throw new Error("Network Error");
            });
          }
          return res.json();
        }).then(data=>{
          setMessages(data);
          setIsLoading(false);
        }).catch((error)=>{
          setIsLoading(false);
        })
      }

    fetchData();
  }, []); 
  return (
    <div data-testid="thread-list">
      <ThreadTitle>Message Threads</ThreadTitle>
      {isLoading && <LoadingMessage>Message Threads Loading ...</LoadingMessage>}
      {!isLoading &&  (
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
