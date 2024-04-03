import { Input, InputLabel } from "../styled/Input";
import { Button } from "../styled/Buttons";
import { useEffect, useState } from "react";
import { CloseInputContainer, InputContainer, InputGroup } from "../styled/FormElements";
import {  FlexEnd } from "../styled/Layout";
export const ContactItem = ({ contact, handleUpdate, handleDelete }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [contactObject, setContactObject] = useState(contact);

  useEffect(()=>{
    setContactObject(contact)
  },[contact])
  return (
    <>
     <InputGroup>
      <InputContainer>
        <InputLabel htmlFor="name">Name : </InputLabel >
        <Input
          value={contactObject?.name}
          readOnly={readOnly}
          onChange={(event) =>
            setContactObject((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="number">Number : </InputLabel >
        <Input
          value={contactObject?.number}
          readOnly={readOnly}
          onChange={(event) =>
            setContactObject((prev) => ({
              ...prev,
              number: event.target.value,
            }))
          }
        />
      </InputContainer>
      <InputContainer>
        <InputLabel  htmlFor="country">Country : </InputLabel >
        <Input
          value={contactObject?.country}
          readOnly={readOnly}
          onChange={(event) =>
            setContactObject((prev) => ({
              ...prev,
              country: event.target.value,
            }))
          }
        />
      </InputContainer>
</InputGroup>
<InputGroup>
       <InputContainer type={"checkbox"}>
       <InputLabel htmlFor="Edit">Edit</InputLabel>

<Input
  type="checkbox"
  id="Edit"
  onChange={() => {
    setReadOnly(!readOnly);
  }}
/>
</InputContainer>
</InputGroup>
      {/* <FlexEnd> */}
      <InputGroup>
      <InputContainer>
       

       
        <Button
          onClick={() => {
            handleUpdate(contactObject);
          }}
        >
          Update
        </Button>

        <Button style={{marginRight:0}} $error
          onClick={() => {
            handleDelete(contactObject.id);
          }}
        >
          Delete
        </Button>
        
      </InputContainer>
      </InputGroup>
      {/* </FlexEnd> */}
    </>
  );
};
