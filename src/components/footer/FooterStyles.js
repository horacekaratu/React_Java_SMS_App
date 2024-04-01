import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMeadiaContainer=styled.ul`
display: flex;
justify-content: space-evenly;

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
`
export const FooterBrand=styled.div`
 color: ${props => props.theme.colors.neutrals.white};
`

export const FooterContacts=styled.div`
 color: ${props => props.theme.colors.neutrals.white};

`

export const FooterContactItem=styled.p`
  color: ${props => props.theme.colors.neutrals.lightGrey};

`


export const BrandImage=styled.img`
width: 128px;


`

export const Slogan=styled.h6`
margin-top: 0;
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
