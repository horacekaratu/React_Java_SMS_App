import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

export const LargeFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.theme.icons.sizes.extraLarge};
  &:active{
    color: ${(props) => props.theme.colors.primary.desaturated};
  }
  &:hover{
    /* color: ${(props) => props.theme.colors.primary.light}; */

  }
  
 
`;
