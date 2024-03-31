import { styled } from "styled-components";

export const Input=styled.input`
padding: var(--base-point);
outline: none;
border: 2px solid ${props=>props.theme.colors.neutrals.lightGrey};
border-radius: 5px;

&:focus{
    border-color:   ${props=>props.theme.colors.neutrals.darkGrey};
}

`
