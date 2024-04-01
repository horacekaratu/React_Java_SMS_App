import { css,styled, useTheme } from "styled-components";
import { useState } from "react";
import { LargeFontAwesomeIcon } from "./Icons";

export const Button=styled.button`
padding: calc(var(--base-point)* 2) var(--base-point);
color: ${(props)=>props.theme.colors.lightNeutral.light};
background-color: ${(props)=>props.theme.colors.primary.base};
border-radius: ${(prop) => prop.theme.sizes.borderRadius.normal};
margin-right: var(--base-point);
border: none;
cursor: pointer;

&:hover{
  background-color:  ${(props)=>props.theme.colors.primary.light};
}
&:active{
  background-color:  ${(props)=>props.theme.colors.primary.dark};
}
`;
export const DisappearingButton=styled(Button)`
margin-left: var(--base-point);
padding: calc(var(--base-point)* 1) var(--base-point);
visibility: hidden;

${props=>props.$error && css`
background-color: ${(props)=>props.theme.colors.contextual.error} ;
`}
${props=>props.$light && css`
background-color: ${(props)=>props.theme.colors.lightNeutral.light} ;
color: ${(props)=>props.theme.colors.darkNeutral.dark} ;

`}

`



export const makeIconStatefulHoc = (Component) => {
  return (props) => {
    const [toggle, setToggle] = useState(false);
    const theme = useTheme();
    const handleClick = () => {
      console.log("togging");
      setToggle(!toggle);
     props.handler()
    };
    return (
      <Component
        color={toggle ? theme.colors.primary.dark : theme.colors.primary.base}
        {...props}
        onClick={handleClick}
      />
    );
  };
};
export const LargeFontAwesomeIconStateful =
  makeIconStatefulHoc(LargeFontAwesomeIcon);
