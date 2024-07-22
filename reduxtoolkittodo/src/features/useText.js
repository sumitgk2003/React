import { useState } from "react";
export const useText=()=>{
  const[text,setText]=useState('');
  return{text,setText};
}