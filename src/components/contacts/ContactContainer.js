import { useContext, useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate, useRoutes, redirect } from "react-router-dom"
import {ContactList} from "./Contacts"
import {ContactItem} from "./ContactItem"
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../styled/SplitScreen"
import { useAuth } from "../Auth/useAuth"
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
    console.log("ContactCOntainer reload")
    // const {isLoggedIn}=useContext(AuthContext)
    useAuth(window.location.pathname)
    const navigate=useNavigate()
    
   
    const location=useLocation()
    const [selectedContact, setSelectedContact]=useState()
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