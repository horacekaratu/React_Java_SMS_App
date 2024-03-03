import { styled, css } from "styled-components";

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

export const Button=styled.button`
padding: calc(var(--base-point)* 2) var(--base-point);
color: ${(props)=>props.theme.colors.lightNeutral.light};
background-color: ${(props)=>props.theme.colors.primary.base};
border-radius: calc(var(--base-point) *0.5);
margin-right: var(--base-point);
border: none;
cursor: pointer;

`;
export const DisappearingButton=styled(Button)`
margin-left: var(--base-point);
padding: calc(var(--base-point)* 1) var(--base-point);
visibility: hidden;

${props=>props.$error && css`
background-color: ${(props)=>props.theme.colors.contextual.error} ;
`}
${props=>props.$light && css`
background-color: ${(props)=>props.theme.colors.lightNeutral.light} ;
color: ${(props)=>props.theme.colors.darkNeutral.dark} ;

`}

`

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
  