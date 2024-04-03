import { useState } from "react";
import { styled } from "styled-components";

export const CenteredContent=styled.span`
text-align: center;
`

export const FlexEnd = styled.div`

  display: flex;
  justify-content: flex-end;
`;

export const makeComponentTogglable=Komponent=>
props=>{
  const [on,setOn]=useState(true)
  const handler=()=>{
    setOn(!on)
   
  }
  return<>
    {on && <Komponent  {...props}  onClick={handler}/>}
  </>
}

export const LayoutGrid=styled.div`
width: 100%;
/* background-color: red; */
justify-content: center;
display: grid;
grid-template-rows: auto ;
grid-template-columns: auto;
grid-template-areas: 
"explainer explainer"
"search search"
"list list";
`;