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
width: 100%;
order: 2;
@media (min-width: 769px) {
    width: 33%;
    order: inherit;
}

`
export const RightScreenContainer=styled.span`
padding:  16px;
width: 77%;



@media (max-width: 768px) {
    order: 1;
    width: auto;
}
`
