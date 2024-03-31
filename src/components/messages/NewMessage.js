import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContactList } from "../contacts/Contacts"
import { useState } from "react"
import { CustomIcon } from "../home/Home"
import { useTheme } from "styled-components"
import { LargeFontAwesomeIconStateful } from "../styled/Buttons"
import { LargeFontAwesomeIcon } from "../styled/Icons"

export const NewMessage=({toggle, setToggle, handleSelectContact})=>{
    const theme=useTheme()
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