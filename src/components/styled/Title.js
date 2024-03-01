import { styled } from "styled-components";

export const Title=styled.div`
margin-bottom: calc(var(--base-point)*2);
display: flex;
justify-content: space-between;
background-color:  ${(props) => props.theme.colors.primary.background};
border-radius: var(--base-point);
padding: 16px;

`