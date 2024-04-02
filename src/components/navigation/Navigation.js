import { useEffect, useState } from "react";
import { Link, NavLink as NavLinkDefault } from "react-router-dom";
import { styled, css } from "styled-components";
import { makeComponentTogglable } from "../styled/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const CloseIcon=styled(FontAwesomeIcon)`
position: absolute;
left: var(--base-point);
top: var(--base-point);
`
const HumburgerIcon=styled.div`

text-align: end;
margin-bottom:calc(var(--base-point) * 2);
cursor: pointer;
@media (min-width:768px) {
display: none;
}
`;

const StatefulHumbergerMenu=
makeComponentTogglable(HumburgerIcon)
  
 
const NavWrapper = styled.nav`
  background-color: ${(prop) => prop.theme.colors.primary.base};
  padding: calc(var(--base-point) * 2);
  position: absolute;
  max-width: 120px;
  left: 0;
  top: 0;
  height: 100vh;
  /* display: none; */
  margin-bottom: calc(var(--base-point) * 3);
  @media (min-width:768px) {
    position: relative;
  max-width: none;
  left: 0;
  top: 0;
  height: inherit;
  /* display: none; */
  
  }

`;
const StyleLessList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
`;
const NavListItem = styled.li`
  display: inline-block;
  margin-right: var(--base-point);
  padding: 8px;
  border-radius: ${(prop) => prop.theme.sizes.borderRadius.normal};
  &:hover {
    outline: 2px solid ${(prop) => prop.theme.colors.neutrals.white};
  }
  &:active {
    background-color: ${(prop) => prop.theme.colors.neutrals.lightGrey};
    & > a {
      color: ${(prop) => prop.theme.colors.neutrals.darkGrey};
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
    width:90%;
  @media (min-width: 768px) {
    display: inline;
    
  }
`;
const NavLink = styled(NavLinkDefault)`
  color: ${(prop) => prop.theme.colors.lightNeutral.light};
  text-decoration: none;
`;
export const NavigationComponent = () => {
  const [on,setOn]=useState(false)
  const handler=()=>{
    setOn(!on)
   
  }
  const [active, setActive] = useState(1);

useEffect(()=>{
const handleResize=()=>{
  if(window.innerWidth>=768){
    setOn(true)
  }else{
    setOn(false)
  }

}

window.addEventListener("resize",handleResize)

return ()=>{
  window.removeEventListener("resize",handleResize)
}
},[])

  const handleOnClick = (event, id) => {
    setActive(id);
    const navlink = event.currentTarget.querySelector("a");
    if (navlink) {
      navlink.click();
    }
  };
  return (
   
    
    <>
    {on ?
      <NavWrapper onClick={()=>console.log("tro")}>
        <StyleLessList>
        <HumburgerIcon  onClick={handler}><FontAwesomeIcon icon={faTimes}/></HumburgerIcon>
          <NavListItem
            active={active == 1}
            onClick={(event) => {
              handleOnClick(event, 1);
            }}
          >
            <NavLink to="/home">Home</NavLink>
          </NavListItem>
          <NavListItem
            active={active == 2}
            onClick={(event) => {
              handleOnClick(event, 2);
            }}
          >
            {" "}
            <NavLink to="/threads">Messages</NavLink>
          </NavListItem>
          <NavListItem
            active={active == 3}
            onClick={(event) => {
              handleOnClick(event, 3);
            }}
          >
            <NavLink to="/contacts">Contacts</NavLink>
          </NavListItem>
          {/* <Li><NavLink to="/logout">Logout</NavLink></Li>  */}

        </StyleLessList>
      </NavWrapper>
      :
      <>  
          <CloseIcon  icon={faBars} onClick={handler}/>
          </>
    }
    </>
  );
};
