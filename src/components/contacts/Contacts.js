import { useEffect, useState } from "react";
import { SideBarListContainer } from "../styled/ListContainer";
import { SideBarListItem } from "../styled/ListItem";
import { DisappearingButton } from "../styled/Buttons";
import { Input } from "../styled/Input";
import { LargeFontAwesomeIconStateful } from "../styled/Buttons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { LayoutGrid } from "../styled/Layout";

export const ContactList = ({
  isMainComponent,
  onDeleteHandler,
  onShowDetailHandler,
  handleSelectContact,
  handleAddContact,
}) => {
  const [contacts, setContacts] = useState();
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(true);
  const [ setError] = useState();
  useEffect(() => {
    console.log("contact list reload");
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
  }, [setError]);
  const filteredContacts = contacts?.filter((element) => {
    if (search === "") return true;
    return element.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    
    <LayoutGrid>
       <div >
        <LargeFontAwesomeIconStateful 
        
         icon={faPlus}
        handler={handleAddContact}
        testid={"add-contact"}
         /></div>
             <h2 >Contacts</h2>
    <h5 >Search by contact name:</h5>
    

      <Input 
        type="text"
        placeholder="Enter contact name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {Loading && <div>Loading ...</div>}
      <SideBarListContainer >
        {!Loading &&
          filteredContacts.map((contact) => {
            return (
              <SideBarListItem
                key={contact.id}
                onClick={() => handleSelectContact(contact)}
              >
                <span>
                  <span>{contact.name} </span>

                  <span style={{ display: "none" }}>{contact.number}</span>
                </span>
                <span style={{ display: "none" }}>
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
              </SideBarListItem>
            );
          })}
      </SideBarListContainer>
    </LayoutGrid>
  );
};
