import { useEffect, useState } from "react";
import { styled} from "styled-components";
import { ThreadItem } from "../styled/ThreadItem";
import { LoadingMessage } from "../styled/LoadingStateMessage";
import { SideBarThreadsContainer } from "../styled/ListContainer";
import { useAuth } from "../Auth/useAuth"
import { Input } from "../styled/Input";


export const ThreadTitle = styled.h2`
`;


export const ThreadList = ({ handleOnClick }) => {
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(false);
  const [search, setSearch] = useState("");
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
          console.log(data)
        })
        .catch((error) => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [setError]);
  const filteredMessages = messages?.filter((element) => {
    if (search === "") return true;
    return element.message.toLowerCase().includes(search.toLowerCase());
  });
  return (

    
    <div data-testid="thread-list">

   



      <ThreadTitle>Threads</ThreadTitle>
      <Input
        type="text"
        placeholder="Enter contact name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {isLoading && (
        <LoadingMessage>Loading ...</LoadingMessage>
      )}
      {!isLoading && (
        <>
       
          <SideBarThreadsContainer>
            {filteredMessages.map((msg, index) => (
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
