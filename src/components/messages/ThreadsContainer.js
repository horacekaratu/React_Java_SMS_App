// src/App.js
import React, { useState} from "react";
import {  ThreadList } from "../../components/messages/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import { Conversation } from "../../components/messages/Conversation";
import { Outlet,  useNavigate, useRoutes } from "react-router-dom";
import { ErrorFallback } from "../../components/error-handling/ErrorFallBack";
import { LeftScreenContainer, RightScreenContainer, SplitScreenContainer } from "../../components/styled/SplitScreen";
import { googleFontsUrl } from "../../Theme";



export const handleOnDelete=(id)=>{
console.log("deleting "+id)
}
export const handleOnShowDetail=(message)=>{
  console.log("showing detail ")
  console.log(message)
}
function ThreadsContainer(props) {

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
  const navigate=useNavigate()
  
  const handleOnClick = (id) => {
    
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
    <LeftScreenContainer>
      <link rel="stylesheet" href={googleFontsUrl} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThreadList handleOnClick={handleOnClick} />
      </ErrorBoundary>
      </LeftScreenContainer>
      <RightScreenContainer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      
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