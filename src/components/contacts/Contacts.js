import { useEffect, useState } from "react";
import { LoadingMessage } from "../styled/LoadingStateMessage";
import { SideBarThreadsContainer } from "../styled/ListContainer";
import { ThreadItem } from "../styled/ThreadItem";
import { DisappearingButton } from "../styled/ErrorFallBack";
import { Input } from "../styled/Input";
import { Outlet } from "react-router-dom";
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../styled/SplitScreen";
import { ThreadTitle } from "../messages/ThreadList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

export const ContactList = ({ onDeleteHandler, onShowDetailHandler, handleSelectContact,handleAddContact }) => {
  const [contacts, setContacts] = useState();
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(true);
  const [_, setError] = useState();
  const theme=useTheme()
  useEffect(() => {
    console.log("contact list reload")
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
  
  return (
    <>
  
      <FontAwesomeIcon color={
                         theme.colors.primary.base
                    } size="6x" data-testid="add-contact" icon={faPlus} 
                onClick={()=>
                handleAddContact()}
            />
     <ThreadTitle>Contacts</ThreadTitle>
    
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
              <ThreadItem key={contact.id} onClick={()=>handleSelectContact(contact)}>
                <span>
                  <span>{contact.name} </span>

                  <span style={{ display: "none" }}>{contact.number}</span>
                </span>
                <span  style={{ display: "none" }}>
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
