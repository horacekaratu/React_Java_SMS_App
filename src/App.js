import { useRoutes} from 'react-router-dom';
import ThreadsContainer from './components/messages/ThreadsContainer';
import {ContactContainer} from "./components/contacts/ContactContainer"
import { NavigationComponent } from './components/navigation/Navigation';


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
       <>
       <NavigationComponent/>
        {routes}
        </>
    )
}

export const messages = {
  1: {
    id: 1,
    incomming: false,
    sender: "alexander alekhine",
    text: "wanna play some chess",
  },
  2: { id: 2, incomming: true, sender: "Bortvinnick", text: " alitema moal" },
  3: {
    id: 3,
    incomming:false,
    sender: "Topalov",
    text: "aghainst fischer",
  },
  4: {
    id: 4,
    incomming:false,
    sender: "Topalov",
    text: "topolov",
  },
  5: {
    id: 5,
    incomming:true,
    sender: "Topalov",
    text: "hello ",
  },
  6: {
    id: 6,
    incomming:false,
    sender: "Topalov",
    text: "engima doctrine",
  },
  7: {
    id: 7,
    incomming:false,
    sender: "Topalov",
    text: "need a visa",
  },
  8: {
    id: 8,
    incomming:true,
    sender: "Topalov",
    text: "hey there",
  },
  9: {
    id: 9,
    incomming:false,
    sender: "Topalov",
    text: "type quick",
  },
};

export const userDetails = {
  name: "Alexander Alekhine",
  icon: "file:///home/hashicorp/Downloads/d8b291c607044d0985f97f41a9ca27a9.png",
};