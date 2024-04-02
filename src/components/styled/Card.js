import {  styled } from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: calc(var(--base-point) * 2);
  flex-direction: column;
  width: inherit;
  gap: var(--base-point);
  @media (min-width: 768px){
    flex-direction: row;

  }
`;
export const Card = styled.div`
display: flex;
flex-direction: column;
  position: relative;
  width: inherit;
  
  text-align: center;
  border-radius: ${(prop) => prop.theme.sizes.borderRadius.normal};
  border: 1px solid #ddd;
  padding: 48px 24px 24px;
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.primary.desaturated};
`;
export const CardContent = styled.div`
`;
export const CardContentWithMargins = styled(CardContent)`
  margin-bottom: calc(var(--base-point) * 3);
`;
export const CardImage = styled.div`
  position: absolute;
  top: -6%;
  left: 50%;
  transform: translateY(-6%);
  transform: translateX(-50%);
  img {
    border-radius: 50%;
    width: calc(var(--base-point) * 10);
    height: calc(var(--base-point) * 10);
  }
`;