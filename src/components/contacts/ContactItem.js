import { Input } from "../styled/Input";
import { Button } from "../error-handling/ErrorFallBack";
import { useEffect, useState } from "react";
import { CloseInputContainer, InputContainer, InputGroup } from "../styled/FormElements";
import { ButtonStack, FlexEnd } from "../styled/Buttons";
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
        <label htmlFor="name">Name : </label>
        <Input
          value={contactObject.name}
          readOnly={readOnly}
          onChange={(event) =>
            setContactObject((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="number">Number : </label>
        <Input
          value={contactObject.number}
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
        <label htmlFor="country">Country : </label>
        <Input
          value={contactObject.country}
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
       <CloseInputContainer>
       <label htmlFor="Edit">Edit</label>

<input 
  type="checkbox"
  id="Edit"
  onChange={() => {
    setReadOnly(!readOnly);
  }}
/>
</CloseInputContainer>
      <FlexEnd style={{maxWidth:"405px"}}>
        <Button
          onClick={() => {
            handleUpdate(contactObject);
          }}
        >
          Update
        </Button>

        <Button $error
          onClick={() => {
            handleDelete(contactObject.id);
          }}
        >
          Delete
        </Button>
      </FlexEnd>
    </>
  );
};
