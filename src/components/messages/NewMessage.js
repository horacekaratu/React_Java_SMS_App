import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContactList } from "../contacts/Contacts"
import { useState } from "react"
import { CustomIcon } from "../home/Home"
import { useTheme } from "styled-components"

export const NewMessage=({toggle, setToggle, handleSelectContact})=>{
    const theme=useTheme()
    return(
        <>
        
                    <FontAwesomeIcon color={
                        toggle? theme.colors.primary.dark:theme.colors.primary.base
                    } size="6x" data-testid="add-convo" icon={faPlus} 
                onClick={()=>
                setToggle(!toggle)}
            />
           {toggle &&  <ContactList handleSelectContact={handleSelectContact}/> }
        </>
    )
}