import { useRoutes} from 'react-router-dom';
import ThreadsContainer from './components/messages/ThreadsContainer';
import {ContactContainer} from "./components/contacts/ContactContainer"


export const App=()=>{
   
    const routes=useRoutes(
        [
            {
                path:"/threads/*",
                element: <ThreadsContainer/>
            },
            
            {
                path:"/contacts/*",
                element:
                <ContactContainer/>
            },
              
        ]
    )
    return (
       
        routes
    )
}