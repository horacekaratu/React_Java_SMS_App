import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMeadiaContainer=styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
@media (min-width: 321px) {
  flex-direction: row;
}
/* gap: calc(5*var(--base-point)); */

`
export const SocialMeadiaHandle=styled.li`
display: inline;
color: ${props => props.theme.colors.neutrals.white};




`

export const CopyWrite=styled.p`
text-align: center;
color: ${props => props.theme.colors.neutrals.mediumGrey};


`
export const FooterSubSection=styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

/* margin-bottom: var(--base-point); */
`
export const FooterBrand=styled.div`
 color: ${props => props.theme.colors.neutrals.white};


`

export const FooterContacts=styled.div`
margin: 0 calc(2*var(--base-point));
 color: ${props => props.theme.colors.neutrals.white};

`

export const FooterContactItem=styled.p`
  color: ${props => props.theme.colors.neutrals.lightGrey};

`


export const BrandImage=styled.img`
width: 100px;
margin-left: 50%;
transform: translateX(-50%);
margin-bottom: var(--base-point);



`

export const Slogan=styled.h6`
margin-top: 0;
text-align: center;
color: ${props => props.theme.colors.neutrals.white};
`

export const FooterSection=styled.div`
 /* margin-top: auto; */
 padding: 16px;
 background-color:  ${props=>props.theme.colors.neutrals.darkGrey};;

`

export const CustomIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.neutrals.white};

`;
