import { css, styled } from "styled-components";

export const InputContainer=styled.div`
/* background-color: red; */
display: flex;
margin-bottom: var(--base-point);
${props=>props.type==="checkbox"?css`
/* margin-right: 170px; */
`:""    }
@media (min-width: 768px){
    align-items: flex-end;
justify-content: flex-end;
}



`

export const CloseInputContainer=styled.div`
background-color: red;
margin-bottom: var(--base-point);
display: flex;
max-width: inherit;
justify-content: space-between;
align-items: center;

`
export const FormContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-content: flex-start;
`
export const InputGroup=styled.div`
width: 410px;

margin-bottom: calc(var(--base-point)*2);
`