// src/App.js
import React, { useState} from "react";
import {  ThreadList } from "./components/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import {  styled } from "styled-components";
import { Conversation } from "./components/Conversation";
import { Outlet,  useNavigate, useRoutes } from "react-router";
import { ErrorFallback } from "./components/error-handling/ErrorFallBack";
import { googleFontsUrl } from "./Theme";

const AppContainer=styled.div`
display: flex;
justify-content: space-between;
`
const ThreadsContainer=styled.span`
width: 33%;
`
const ConversationContainer=styled.span`
margin-top: 72px;
padding:  16px;
width: 77%;
`


export const handleOnDelete=(id)=>{
console.log("deleting "+id)
}
export const handleOnShowDetail=(message)=>{
  console.log("showing detail ")
  console.log(message)
}
function App(props) {

const routes=useRoutes([
  // {index:true,path:"/", element:()=>(<>No messages selected</>)},
{
  path:"conversations/:id",
  element: <Conversation
  showDetailHandler={handleOnShowDetail}
   deleteHandler={handleOnDelete}  />
}
])
  const[selectedThread,setSelectedThread]=useState()
  const navigate=useNavigate()
  
  const handleOnClick = (id) => {
    
    navigate(`/conversations/${id}`, {
      
      state: {
        messages,
        userDetails,
      },
    });
    
  };
  return (
    <>
    
    <AppContainer>
    <ThreadsContainer>
      <link rel="stylesheet" href={googleFontsUrl} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThreadList handleOnClick={handleOnClick} />
      </ErrorBoundary>
      </ThreadsContainer>
      <ConversationContainer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      
      <Outlet/>
      {routes}
      </ErrorBoundary>
      </ConversationContainer>
      
      </AppContainer>
                                                                                                              
    </>
  );
}

export default App;
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