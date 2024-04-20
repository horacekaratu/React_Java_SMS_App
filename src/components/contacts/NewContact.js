import { Input } from "../styled/Input";
import { Button } from "../styled/Buttons";
import {  InputContainer, InputGroup } from "../styled/FormElements";
import {  FlexEnd } from "../styled/Layout";
import {  useState } from "react";


export const NewContact=({  handleAddContact })=>{
const [error, setError]=useState(false)
    const [contactObject, setContactObject] = useState({
        name:"",
        number:"",
        country:""
    });

    return( <>
    {error && <p>{error}</p>}
        <InputGroup>
         <InputContainer>
           <label htmlFor="name">Name : </label>
           <Input
           placeholder="Enter name"
             value={contactObject.name}
             onChange={(event) =>{
              
               setContactObject((prev) => ({ ...prev, name: event.target.value }))
             }}
           />
         </InputContainer>
         <InputContainer>
           <label htmlFor="number">Number : </label>
           <Input
           placeholder="Enter number"
             value={contactObject.number}
             onChange={(event) =>{
                setError(false)
               setContactObject((prev) => ({
                 ...prev,
                 number: event.target.value,
               }))
             }}
           />
         </InputContainer>
         <InputContainer>
           <label htmlFor="country">Country : </label>
           <Input
           placeholder="Enter country"
             value={contactObject.country}
             onChange={(event) =>{
             setError(false)
               setContactObject((prev) => ({
                 ...prev,
                 country: event.target.value,
               }))
             }}
           />
         </InputContainer>
   </InputGroup>
         <FlexEnd style={{maxWidth:"405px"}}>
           <Button style={{marginRight:0}}
             onClick={() => {
                const result=handleAddContact(contactObject);
                if(!result===""){
                    setError(result)
                }else{
                    setError("Contact saved")
                }
             }}
           >
             Save
           </Button>
   
           
         </FlexEnd>
       </>)
}