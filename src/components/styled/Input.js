import { styled } from "styled-components";

export const Input=styled.input`

padding: var(--base-point);
outline: none;
border: 2px solid ${props=>props.theme.colors.neutrals.lightGrey};
border-radius: 5px;
height: calc(var(--base-point)*2.6);
max-width: 280px;
&:focus{
    border-color:   ${props=>props.theme.colors.neutrals.darkGrey};
}

`
export const InputLabel=styled.label`
min-width: 60px;
width: 60px;

`;
