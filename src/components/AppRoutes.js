import { Routes, Route, useRoutes } from 'react-router-dom';
import App, { handleOnDelete, handleOnShowDetail } from "../App"
import { ThreadList } from "./messages/ThreadList"
import { Conversation } from "./messages/Conversation"
import { ContactList } from './contacts/Contacts';

export const AppRoutes=()=>{

    const routes=useRoutes(
        [
            {
                path:"/*",
                element: <App/>
            },
            
            {
                path:"/contacts",
                element:<ContactList/>
              }
        ]
    )
    return (
       
        routes
    )
}