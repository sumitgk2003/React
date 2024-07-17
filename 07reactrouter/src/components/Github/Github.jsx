import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

  const data=useLoaderData();
  // const [data,setData]=useState();
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/sumitgk2003').then(res=>res.json()).then(res=>{
  //     console.log(res);
  //     setData(res);
  //   })
  // },[]);
  return(
    <>
    <img src={data.avatar_url} width='300'/>
    <h1>Github Login: {data.login}</h1>
    </>
  )
}