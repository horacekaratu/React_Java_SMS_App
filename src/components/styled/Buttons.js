import { styled, useTheme } from "styled-components";
import { useState } from "react";
import { LargeFontAwesomeIcon } from "./Icons";

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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
