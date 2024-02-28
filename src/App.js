// src/App.js
import React, { useState, useEffect } from "react";
import { ErrorMessage, ThreadList } from "./components/ThreadList";
import { ErrorBoundary } from "react-error-boundary";
import { styled } from "styled-components";
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

const ErrorButton=styled.button`
padding: calc(var(--base-point)* 2) var(--base-point);
color: ${(props)=>props.theme.colors.lightNeutral.light};
background-color: ${(props)=>props.theme.colors.primary.base};
border-radius: calc(var(--base-point) *0.5);
border: none;
cursor: pointer;
`;
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
  const handleOnClick = (id) => {
    console.log(id);
  };
  return (
    <>
      <link rel="stylesheet" href={googleFontsUrl} />
      <ErrorBoundary FallbackComponent={MessageThreadListErrorFallback}>
        <ThreadList handleOnClick={handleOnClick} />
      </ErrorBoundary>
    </>
  );
}

export default App;
