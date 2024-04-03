import { styled } from "styled-components"

export const SideBarListContainer=styled.ul`
max-width: 400px;

@media (min-width: 769px){
    box-shadow: 3px 0px 0px ${props=>props.theme.colors.primary.desaturated} ;
}
/* background-color: red; */

`
