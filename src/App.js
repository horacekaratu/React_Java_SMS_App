// src/App.js
import React, { useState, useEffect } from "react";
import { ErrorMessage, ThreadList } from "./components/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import { css, styled } from "styled-components";
import { Conversation } from "./components/Conversation";
import { Outlet, Route, Routes, useNavigate, useRoutes } from "react-router";
import { Link } from "react-router-dom";

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
const ErrorContainer=styled.div`
padding: calc(var(--base-point ) * 2);
border-radius: var(--base-point);
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ErrorHeading=styled.h2`
color: ${(props)=>props.theme.colors.contextual.error};
`
const ErrorDetail=styled.div`
margin: calc( var(--base-point) *2 );
`; 

export const ErrorButton=styled.button`
padding: calc(var(--base-point)* 2) var(--base-point);
color: ${(props)=>props.theme.colors.lightNeutral.light};
background-color: ${(props)=>props.theme.colors.primary.base};
border-radius: calc(var(--base-point) *0.5);
border: none;
cursor: pointer;

`;
export const ConversationButton=styled(ErrorButton)`
margin-left: var(--base-point);
padding: calc(var(--base-point)* 1) var(--base-point);
visibility: hidden;

${props=>props.$error && css`
background-color: ${(props)=>props.theme.colors.contextual.error} ;
`}




`
const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap";

  const MessageThreadListErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorContainer>
      <ErrorHeading>! Something went wrong</ErrorHeading>
      <ErrorDetail>
        <strong>Error Name : </strong> {error.name}
      </ErrorDetail>
      <ErrorDetail>
        <strong>Error Message : </strong> {error.message}
      </ErrorDetail>
      <ErrorDetail>
        <strong>Error Stacktrace: </strong> {error.stack.toString()}
      </ErrorDetail>
      <ErrorDetail>
      <ErrorButton onClick={resetErrorBoundary}>Try Again</ErrorButton>
      </ErrorDetail>
    </ErrorContainer>
   
  );
};


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
      <ErrorBoundary FallbackComponent={MessageThreadListErrorFallback}>
      <ThreadList handleOnClick={handleOnClick} />
      </ErrorBoundary>
      </ThreadsContainer>
      <ConversationContainer>
      <ErrorBoundary FallbackComponent={MessageThreadListErrorFallback}>
      
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