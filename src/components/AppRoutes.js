import { Routes, Route, useRoutes, useNavigate } from 'react-router-dom';
import App from "../App"
import { ThreadList } from "./messages/ThreadList"
import { Conversation } from "./messages/Conversation"
import { ContactList } from './contacts/Contacts';
import { ContactItem } from './contacts/ContactItem';
import { useState } from 'react';
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



export const AppRoutes=()=>{
    const [selectedContact, setSelectedContact]=useState()
    const navigate=useNavigate()
    const handleSelectContact=(contact)=>{
   setSelectedContact(contact)
    navigate( `contacts/${contact.id}`)
    }
    const routes=useRoutes(
        [
            {
                path:"/*",
                element: <App/>
            },
            
            {
                path:"/contacts",
                element:<ContactList  handleSelectContact={handleSelectContact} onDeleteHandler={handleOnDelete} onShowDetailHandler={handleOnShowDetail} />,
                children:[
                    {
                        path:":id",
                        element:<ContactItem 
                         handleUpdate={handleOnUpdateContact} 
                         handleDelete={handleOnDeleteContact} contact={selectedContact} />
                      }
                ]
                
            
            },
              
        ]
    )
    return (
       
        routes
    )
}