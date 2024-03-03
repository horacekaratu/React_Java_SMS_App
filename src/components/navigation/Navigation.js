import { Link } from "react-router-dom";
import { styled } from "styled-components";
const NavWrapper=styled.nav`
background-color: ${prop=>prop.theme.colors.primary.base};
padding:calc(var(--base-point)*2);
margin-bottom: calc(var(--base-point)*3);
`
const Ul=styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`
const Li=styled.li`
display: inline;
margin-right: var(--base-point);
`
const NavLink=styled(Link)`
color: ${prop=>prop.theme.colors.lightNeutral.light};
text-decoration: none;
`
export const NavigationComponent = () => {
  return (
    <>
    <NavWrapper>
    <Ul>
    <Li> <NavLink to="/threads">Messages</NavLink></Li> 
     <Li><NavLink to="/contacts">Contacts</NavLink></Li> 
     </Ul>
      </NavWrapper>
    </>
  );
};
