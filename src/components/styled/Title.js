import { styled } from "styled-components";

export const TitleBox=styled.div`
margin-bottom: calc(var(--base-point)*2);
display: flex;
justify-content: space-between;
border-radius:${(prop) => prop.theme.sizes.borderRadius.normal};
padding: 16px;

`