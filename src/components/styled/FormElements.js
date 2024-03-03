import { styled } from "styled-components";

export const InputContainer=styled.div`
display: flex;
/* justify-content: space-between; */
margin-bottom: var(--base-point);
align-items: center;

label{
    width: 200px
}

`

export const CloseInputContainer=styled.div`
margin-bottom: var(--base-point);
display: flex;
max-width: 56px;
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
margin-bottom: calc(var(--base-point)*2);
`