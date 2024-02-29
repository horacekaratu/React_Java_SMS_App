// src/App.js
import React, { useState, useEffect } from "react";
import { ErrorMessage, ThreadList } from "./components/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import { styled } from "styled-components";
import { Conversation } from "./components/Conversation";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AppContainer=styled.div`
display: flex;
justify-content: space-between;
`
const ThreadsContainer=styled.span`
width: 33%;
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
margin-left: var(--base-point)
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



function App() {
  const[selectedThread,setSelectedThread]=useState()
  const navigate=useNavigate()
  const handleOnClick = (id) => {
    /* setSelectedThread(messages) */
    navigate(`/conversations/${id}`,{state:{messages:messages, userDetails:userDetails}})
    
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
      <Outlet/>
      </AppContainer>
                                                                                                              
    </>
  );
}

export default App;
// implement auth hookk to get User Details

export const messages = {
  1: {
    id: 1,
    receipient: 1,
    sender: "alexander alekhine",
    text: "wanna play some chess",
  },
  2: { id: 2, receipient: 1, sender: "Bortvinnick", text: "Nyet" },
  3: {
    id: 3,
    receipient: 1,
    sender: "Topalov",
    text: "I just won a world championship",
  },
};

export const userDetails = {
  name: "Davis Shuma",
  icon: "file:///home/hashicorp/Downloads/d8b291c607044d0985f97f41a9ca27a9.png",
};