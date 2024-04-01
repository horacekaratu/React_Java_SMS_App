import { useEffect, useState } from "react";
import { SideBarListItem } from "../../styled/ListItem";
import { SideBarListContainer } from "../../styled/ListContainer";
import { useAuth } from "../../Auth/useAuth"
import { Input } from "../../styled/Input";


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

   



      <h2>Threads</h2>
      <Input
        type="text"
        placeholder="Enter contact name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {isLoading && (
        <div>Loading ...</div>
      )}
      {!isLoading && (
        <>
       
          <SideBarListContainer>
            {filteredMessages.map((msg, index) => (
              <SideBarListItem key={index} onClick={() => handleOnClick(msg.id)}>
                {msg.message}
              </SideBarListItem>
            ))}
            </SideBarListContainer>
        </>
      )}
    </div>
  );
};
