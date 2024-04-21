import { useState } from "react"
import { Outlet, useNavigate, useRoutes} from "react-router-dom"
import {ContactList} from "./Contacts"
import {ContactItem} from "./ContactItem"
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../styled/SplitScreen"
import { useAuth } from "../Auth/useAuth"
import { NewContact } from "./NewContact"
import { LargeFontAwesomeIconStateful } from "../styled/Buttons"
import { faComments, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
    const [toggleNewContact, setToggleNewContact]=useState(false)
    console.log("ContactCOntainer reload")
    // const {isLoggedIn}=useContext(AuthContext)
    useAuth(window.location.pathname)
    const [isOpen, setOpen]=useState(true)
    const navigate=useNavigate()
    const toggleIsOpen=()=>{
        setOpen(!isOpen)
        console.log("changed")
      }
    
    const [selectedContact, setSelectedContact]=useState()
const routes=useRoutes([
    {
        path:":id",
        element:<ContactItem 
         handleUpdate={handleOnUpdateContact} 
         handleDelete={handleOnDeleteContact} contact={selectedContact} />
      }
      
])
const handleAddContact=()=>{
    console.log("togler")
setToggleNewContact(!toggleNewContact)
}
const handleSaveContact=(contact)=>{
    if(!contact.name) return "Name is blank"
    if(!contact.number) return  "Number is blank"
    return ""

}
    const handleSelectContact=(contact)=>{
        setToggleNewContact(false)
        console.log(contact)
   setSelectedContact(contact)
    navigate( `/contacts/${contact.id}`)
    }

    return(<>

     <SplitScreenContainer>
     
      <LeftScreenContainer  className={isOpen?"display":"hide"} >
    
<ContactList  
isOpen={isOpen} toggleIsOpen={toggleIsOpen}
isMainComponent={true}
        handleSelectContact={handleSelectContact}
        onDeleteHandler={handleOnDelete} 
        onShowDetailHandler={handleOnShowDetail}
      handleAddContact={handleAddContact}
     
      

         />
         </LeftScreenContainer>
      <RightScreenContainer >
      
      
   
      <div 

onClick={()=>{
toggleIsOpen()
}}
><FontAwesomeIcon className={isOpen?"hide":"display threads"}   icon={faComments} /></div>
    
      {toggleNewContact &&  <NewContact  handleAddContact={handleSaveContact}/> } 
      {!toggleNewContact && <>{routes} <Outlet/></> } 
      </RightScreenContainer>
      </SplitScreenContainer>
      
        </>)
    
}