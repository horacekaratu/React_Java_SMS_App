import { useState } from "react";
import { Link, NavLink as NavLinkDefault } from "react-router-dom";
import { styled, css } from "styled-components";
const NavWrapper = styled.nav`
/* position: fixed; */
/* width: 100%; */
  background-color: ${(prop) => prop.theme.colors.primary.base};
  padding: calc(var(--base-point) * 2);
  margin-bottom: calc(var(--base-point) * 3);
 
`;
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  display: inline;
  margin-right: var(--base-point);
  padding: 8px;
  border-radius: ${(prop) => prop.theme.sizes.borderRadius.normal};
  &:hover {
    outline: 2px solid ${(prop) => prop.theme.colors.neutrals.white};
    /* background-color: ${(prop) => prop.theme.colors.neutrals.white}; */
    & > a {
      /* color: ${(prop) => prop.theme.colors.neutrals.black}; */
    }
  }
  &:active {
    background-color: ${(prop) => prop.theme.colors.neutrals.lightGrey};
    & > a {
      color: ${(prop) => prop.theme.colors.neutrals.darkGrey};
      /* font-size: 0.9em; */
    }
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${(prop) => prop.theme.colors.neutrals.white};
      & > a {
        color: ${(prop) => prop.theme.colors.neutrals.black};
      }
    `}
`;
const NavLink = styled(NavLinkDefault)`
  color: ${(prop) => prop.theme.colors.lightNeutral.light};
  text-decoration: none;

  &.active {
    /* color:red; */
  }

  &.active & {
    background-color: pink;
  }
`;
export const NavigationComponent = () => {
  const [active, setActive] = useState(1);
  const handleOnClick = (event,id) => {
    setActive(id);
    const navlink = event.currentTarget.querySelector("a");
    if (navlink) {
      navlink.click();
    }
  };
  return (
    <>
      <NavWrapper>
        <Ul>
          <Li
            active={active == 1}
            onClick={(event) => {
             handleOnClick(event,1)
            }}
          >
            <NavLink to="/home">Home</NavLink>
          </Li>
          <Li
            active={active == 2}
            onClick={(event) => {
              handleOnClick(event,2)
            }}
          >
            {" "}
            <NavLink to="/threads">Messages</NavLink>
          </Li>
          <Li
            active={active == 3}
            onClick={(event) => {
              handleOnClick(event,3)
            }}
          >
            <NavLink to="/contacts">Contacts</NavLink>
          </Li>
          {/* <Li><NavLink to="/logout">Logout</NavLink></Li>  */}
        </Ul>
      </NavWrapper>
    </>
  );
};
