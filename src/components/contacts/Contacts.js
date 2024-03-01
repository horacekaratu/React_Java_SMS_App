import { useEffect, useState } from "react";
import { LoadingMessage } from "../styled/LoadingStateMessage";
import { SideBarThreadsContainer } from "../styled/ListContainer";
import { ThreadItem } from "../styled/ThreadItem";
import { DisappearingButton } from "../error-handling/ErrorFallBack";
import { Input } from "../styled/Input";

export const ContactList = ({ onDeleteHandler, onShowDetailHandler }) => {
  const [contacts, setContacts] = useState();
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(true);
  const [_, setError] = useState();

  useEffect(() => {
    fetch("https://api.example.com/contacts")
      .then((response) => {
        if (!response.ok)
          setError(() => {
            throw new Error("Network Error");
          });
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      });
  }, []);
  const filteredContacts = contacts?.filter((element) => {
    if (search === "") return true;
    return element.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredContacts);
  return (
    <>
      <Input
        type="text"
        placeholder="Enter contact name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {Loading && <LoadingMessage>Loading ...</LoadingMessage>}
      <SideBarThreadsContainer>
        {!Loading &&
          filteredContacts.map((contact) => {
            return (
              <ThreadItem key={contact.id}>
                <span>
                  <span>{contact.name} </span>

                  <span style={{ display: "none" }}>{contact.number}</span>
                </span>
                <span>
                  <DisappearingButton
                    $light
                    data-testid={`delete-button-${contact.id}`}
                    onClick={() => onDeleteHandler(contact.id)}
                  >
                    Delete
                  </DisappearingButton>
                  <DisappearingButton
                    $light
                    data-testid={`show-detail-button-${contact.id}`}
                    onClick={() => onShowDetailHandler(contact.id)}
                  >
                    View Detail
                  </DisappearingButton>
                </span>
              </ThreadItem>
            );
          })}
      </SideBarThreadsContainer>
    </>
  );
};
