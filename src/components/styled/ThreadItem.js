import { styled } from "styled-components";

export const BaseThreadItem = styled.li`
  /* box model styling--basic */
  border-radius: var(--base-point);
  background-color: ${props=>props.theme.colors.primary.base} ;
  color: ${props=>props.theme.colors.lightNeutral.light} ;
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: unset 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  margin-left: 16px;
  margin-right: 16px ;

  cursor: pointer;
  /* list speciific styling  */
  list-style-position: inside;
`;

