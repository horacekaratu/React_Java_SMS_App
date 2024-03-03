import { useState } from "react"
import { Outlet, useNavigate, useRoutes } from "react-router-dom"
import {ContactList} from "./Contacts"
import {ContactItem} from "./ContactItem"
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../styled/SplitScreen"
const handleOnDelete=(id)=>{
    console.log(id)
}
const handleOnShowDetail=(id)=>{
    console.log(id)
}

const handleOnDeleteContact=(id)=>{
    console.log(id)
}
const handleOnUpdateContact=(contact)=>{
    console.log(contact)
}

export const ContactContainer=()=>{
    const [selectedContact, setSelectedContact]=useState()
    const navigate=useNavigate()
const routes=useRoutes([
    {
        path:":id",
        element:<ContactItem 
         handleUpdate={handleOnUpdateContact} 
         handleDelete={handleOnDeleteContact} contact={selectedContact} />
      }
      
])

    const handleSelectContact=(contact)=>{
        console.log(contact)
   setSelectedContact(contact)
    navigate( `/contacts/${contact.id}`)
    }

    return(<>
     <SplitScreenContainer>
      <LeftScreenContainer style={{margin : "0px 16px" }}>
<ContactList  
        handleSelectContact={handleSelectContact}
        onDeleteHandler={handleOnDelete} 
        onShowDetailHandler={handleOnShowDetail} />
         </LeftScreenContainer>
      <RightScreenContainer>
      {routes}
        <Outlet/>
      </RightScreenContainer>
      </SplitScreenContainer>
      
        </>)
    
}