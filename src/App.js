import { Outlet, useRoutes } from "react-router-dom";
import ThreadsContainer from "./components/messages/ThreadsContainer";
import { ContactContainer } from "./components/contacts/ContactContainer";
import { NavigationComponent } from "./components/navigation/Navigation";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { AuthContext } from "./components/Auth/AuthContext";
import { useContext } from "react";
export const App = () => {
 
  const {login, logout}=useContext(AuthContext)
  
  const routes = useRoutes([
  
    {
      path: "home",
      element: <Home />,
    },

    {
      path: "threads/*",
      element: <ThreadsContainer />,
    },

    {
      path: "contacts/*",
      element: <ContactContainer />,
    },
    
  ]);
  return (
   <div>
  
  
    <NavigationComponent />
   
    <div style={{display:"flex",flexDirection:"column", minHeight:"100vh"}}>
    <div  style={{flex:1 ,minHeight:"100vh"}} >
    {routes}
    </div>
    <div style={{ width:"100%"}}>
    <Footer />
    </div>
    </div>

  </div> 
   
  );
};

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
    incomming: false,
    sender: "Topalov",
    text: "aghainst fischer",
  },
  4: {
    id: 4,
    incomming: false,
    sender: "Topalov",
    text: "topolov",
  },
  5: {
    id: 5,
    incomming: true,
    sender: "Topalov",
    text: "hello ",
  },
  6: {
    id: 6,
    incomming: false,
    sender: "Topalov",
    text: "engima doctrine",
  },
  7: {
    id: 7,
    incomming: false,
    sender: "Topalov",
    text: "need a visa",
  },
  8: {
    id: 8,
    incomming: true,
    sender: "Topalov",
    text: "hey there",
  },
  9: {
    id: 9,
    incomming: false,
    sender: "Topalov",
    text: "type quick",
  },
};

export const userDetails = {
  name: "Alexander Alekhine",
  icon: "file:///home/hashicorp/Downloads/d8b291c607044d0985f97f41a9ca27a9.png",
};

export const Testimonials = {
  0: {
    id: 0,
    name: "John Doe",
    message: "Testimonial 1 message",
    image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
    position: "HR / Seamless Cloud Inc",
  },
  1: {
    id: 1,
    name: "Nita rusa",
    message: "Testimonial 2 message",
    image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
    position: "Developer / Seamless Cloud Inc",
  },
  2: {
    id: 2,
    name: "Mery Li",
    message: "Testimonial 3 message",
    image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
    position: "Cloud Engineer / Seamless Cloud Inc",
  },
};

export const Features = {
  Fast: {
    id: 0,
    name: "Fast",
    message: "Enable users to communicate with each other in real-time.1",
    icon: "faBoltLightning",
  },
  "User Authentication": {
    id: 1,
    name: "User Authentication",
    message: "Enable users to communicate with each other in real-time.2",
    icon: "faLock",
  },
  "Real-time Chat": {
    id: 2,
    name: "Real-time Chat",
    message: "Enable users to communicate with each other in real-time.3",
    icon: "faMessage",
  },
  "Search Functionality": {
    id: 3,
    name: "Search Functionality",
    message: "Enable users to communicate with each other in real-time.4",
    icon: "faSearch",
  },
  Notifications: {
    id: 4,
    name: "Notifications",
    message: "Enable users to communicate with each other in real-time.5",
    icon: "faBell",
  },
};


export const GetStartedData={
  "Send SMS":{
    id:1,buttonText: "Send SMS", Message:"Explore sending sms in an easy intuitive way."
  },
  "View Threads":{
    id:2,buttonText: "View Threads", Message:"Explore your threads and conversations."
  },
  "View Contacts":{
    id:3,buttonText: "View Contacts", Message:"Explore your searchable contacts."
  },
}
