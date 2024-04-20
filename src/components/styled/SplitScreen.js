import { styled } from "styled-components"

export const SplitScreenContainer=styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

@media (min-width: 769px) {
    flex-direction: row;
}

`

export  const LeftScreenContainer=styled.span`
position: absolute;
width: 80%;
height: 100%;
left: 0;
top: 20px;
background-color: ${props=>props.theme.colors.primary.base} ;
order: 2;
@media (min-width: 768px) {
   
    width: 40%;
    order: inherit;
}
@media (min-width: 1024px) {
  position: relative;
  display: block;
    width: 30%;
    height: 80vh;
    order: inherit;
}

`
export const RightScreenContainer=styled.span`
padding:  16px;
width: 77%;



@media (max-width: 768px) {
    order: 1;
    width: auto;
    padding: 8;
}
`
