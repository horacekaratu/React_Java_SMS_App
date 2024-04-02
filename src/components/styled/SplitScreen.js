import { styled } from "styled-components"

export const SplitScreenContainer=styled.div`
display: flex;
justify-content: space-between;
`
export  const LeftScreenContainer=styled.span`
width: 33%;
@media (max-width: 768px) {
    width: 33%;
}

`
export const RightScreenContainer=styled.span`

/* margin-top: 72px; */
padding:  16px;
width: 77%;

@media (max-width: 768px) {
    width: 100%;
    padding:  0px;
}
`
