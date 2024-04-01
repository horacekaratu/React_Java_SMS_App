import { styled, css } from "styled-components";
import { Button } from "./Buttons";

const ErrorContainer=styled.div`
padding: calc(var(--base-point ) * 2);
border-radius: ${(prop) => prop.theme.sizes.borderRadius.normal};
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ErrorHeading=styled.h2`
color: ${(props)=>props.theme.colors.contextual.error};
`
const ErrorDetail=styled.div`
margin: calc( var(--base-point) *2 );
`; 



export const ErrorFallback = ({ error, resetErrorBoundary }) => {
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
        <Button onClick={resetErrorBoundary}>Try Again</Button>
        </ErrorDetail>
      </ErrorContainer>
     
    );
  };
  