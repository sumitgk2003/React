import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo,updateTodo } from "../features/todoSlice.js";
import { useUpdate } from "../features/useUpadate.js";
import { useText } from "../features/useText.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TodoForm(){
  const [todo,setTodo]=useState('');
  const update=useSelector(state=>state.update);
  const dispatch=useDispatch();
  // const{update,setUpdate}=useUpdate();
  // const{text,setText}=useText();
  const add=(e)=>{
      e.preventDefault();
      if(update.istrue){
        dispatch(updateTodo(todo));
      }else{
        console.log(update);
        dispatch(addTodo(todo));
        setTodo('');
      }
      
    
  }
  useEffect(()=>{
    if(update.istrue){
      setTodo(update.todo.text);
    }else{
      setTodo('');
    }
    
  },[update])
  // useEffect(()=>{
  //   if(update){
  //     setTodo(text);
  //   }else{
  //     setTodo('');
  //   }
  //   console.log('update');
  //   console.log(text);
  // },[up])
  return(
    <form onSubmit={add}>
      <input type="text" placeholder="add todo"
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button type='submit' >{update.istrue?'Update':'Add'}</button>
    </form>
  )
}