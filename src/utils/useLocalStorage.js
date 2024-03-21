import { useState } from "react";
import { json } from "react-router-dom";

export const useLocalStorage = (key, initialValue=false, expirationTimeInMinutes=30) => {
// attempt to get the value
  const storedValue = localStorage.getItem(key);

  // object to store the parsed value
  let initialValueJSON = null
  // store the key if there is a value with unused key
  if (!storedValue ) {
   
    localStorage.setItem(key,JSON.stringify({ value:initialValue, expiration: Date.now()}));
    initialValueJSON = initialValue;
  }

  // remove if time has elapsed
  if(storedValue  ){
   const parsedValue=JSON.parse(storedValue)
   initialValueJSON = JSON.parse(storedValue).value
   const setExpirationTime=parsedValue.expiration+expirationTimeInMinutes*1*1000
   const presentTime=Date.now()
   if(setExpirationTime<presentTime){
    localStorage.removeItem(key)
   }
  }

// store theright value
  const [value, setValue] = useState(initialValueJSON);

  const updateValue=(value)=>{
    value={ value, expiration: Date.now()}
    setValue(value)
    localStorage.setItem(key,JSON.stringify(value))
   
  }

  return [value,updateValue]
};
