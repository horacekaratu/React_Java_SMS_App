import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { ContactList } from "../contacts/Contacts"
import { LargeFontAwesomeIconStateful } from "../styled/Buttons"

export const NewMessage=({toggle, setToggle, handleSelectContact})=>{
 
    return(
        <>
       {/* <LargeFontAwesomeIcon /> */}
       <LargeFontAwesomeIconStateful  
        icon={faPlus}
        handler={()=>
                setToggle(!toggle)} 

                testid={"add-convo"}
                />
           {toggle &&  <ContactList handleSelectContact={handleSelectContact}/> }
        </>
    )
}