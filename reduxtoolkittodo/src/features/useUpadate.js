import { useState } from "react";
export const useUpdate=()=>{
  const [update,setUpdate]=useState(false);
  return {update,setUpdate};
}