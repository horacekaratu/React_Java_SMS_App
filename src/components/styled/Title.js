import { styled } from "styled-components";

export const Title=styled.div`
margin-bottom: calc(var(--base-point)*2);
display: flex;
justify-content: space-between;
/* background-color:  ${(props) => props.theme.colors.neutrals.lightGrey}; */
border-radius:${(prop) => prop.theme.sizes.borderRadius.normal};
padding: 16px;

`