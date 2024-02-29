import { Routes, Route } from 'react-router-dom';
import App from "../App"
import { ThreadList } from "./ThreadList"
import { Conversation } from "./Conversation"

export const AppRoutes=()=>{


    return (
        
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="conversations/:id" element={<Conversation/>}/>
            </Route>
        </Routes>
    )
}