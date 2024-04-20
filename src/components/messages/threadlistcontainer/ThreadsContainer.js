// src/App.js
import React, { useState} from "react";
import {  ThreadList } from "../threadlist/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import { Conversation } from "../conversation/Conversation";
import { Outlet,  useNavigate, useRoutes } from "react-router-dom";
import { ErrorFallback } from "../../styled/ErrorFallBack";
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../../styled/SplitScreen";
import { NewMessage } from "../newmessage/NewMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faComments } from "@fortawesome/free-solid-svg-icons";


export const handleOnDelete=(id)=>{
console.log("deleting "+id)
}

export const handleOnShowDetail=(message)=>{
  console.log("showing detail ")
  console.log(message)
}
function ThreadsContainer(props) {
  const [isOpen, setOpen]=useState(true)
  const navigate=useNavigate()
  const toggleIsOpen=()=>{
    setOpen(!isOpen)
    console.log("changed")
  }
  const handleSelectContact=(contact)=>{
    console.log(contact.id)
    // make redux http req to get the messages of the contact
      // setto
    navigate(`/threads/${contact.id}`, {
       
      state: {
        messages,
        userDetails,
        contactid:contact.id
      },
    });
    }
  console.log("ThreadsContainer reload")
const routes=useRoutes([
  // {index:true,path:"/", element:()=>(<>No messages selected</>)},
{
  path:":id",
  element: <Conversation
  showDetailHandler={handleOnShowDetail}
   deleteHandler={handleOnDelete}  />
},

])
  const[selectedThread,setSelectedThread]=useState()

  
  const handleOnClick = (id) => {
    console.log(id)
    navigate(`/threads/${id}`, {
      
      state: {
        messages,
        userDetails,
      },
    });
    
  };
  return (
    <>
    
    <SplitScreenContainer>
    <LeftScreenContainer  className={isOpen?"display":"hide"}>
<div style={{
  position:"absolute",
  right:"8px",
  top:"8px",
  fontSize:"24px"
}}

onClick={()=>{
toggleIsOpen()
}}
>X</div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
       <NewMessage toggle={selectedThread} setToggle={setSelectedThread} 
       handleSelectContact={handleSelectContact}/>
     {!selectedThread && <ThreadList handleOnClick={handleOnClick} />}
     
      </ErrorBoundary>
      </LeftScreenContainer>
      <RightScreenContainer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div 

onClick={()=>{
toggleIsOpen()
}}
><FontAwesomeIcon className={isOpen?"hide":"display"} style={{position:"absolute",
  left:"8px",
  top:"32px",
  fontSize:"24px"
}} icon={faComments} /></div>

      <Outlet/>
      {routes}
      </ErrorBoundary>
      </RightScreenContainer>
      
      </SplitScreenContainer>
                                                                                                              
    </>
  );
}

export default ThreadsContainer;
// implement auth hookk to get User Details

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