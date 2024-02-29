import { Routes, Route, useRoutes } from 'react-router-dom';
import App, { handleOnDelete, handleOnShowDetail } from "../App"
import { ThreadList } from "./ThreadList"
import { Conversation } from "./Conversation"

export const AppRoutes=()=>{

    const routes=useRoutes(
        [
            {
                path:"/*",
                element: <App/>
            }
        ]
    )
    return (
       
        routes
    )
}