import { useState } from "react";
import useTodo from "../context/Todo"

export default function TodoElement({todoObject}){
  const {updateTodo,deleteTodo,toggleTodo}=useTodo();
  const[edit,setEdit]=useState(false);
  const[todoMsg,setTodoMsg]=useState(todoObject.todo);
  const editTodo=()=>{
    updateTodo(todoObject.id,todoMsg);
    setEdit(false);
  }
  return(
    <div className="flex">
      <input type="checkbox"
      checked={todoObject.completed}
      onChange={()=>toggleTodo(todoObject.id)}
      />
      <input type="text"
      value={todoMsg}
      onChange={(e)=>setTodoMsg(e.target.value)}
      readOnly={!edit}
      className={`${todoObject.completed?'bg-green-500 line-through':'bg-red-500 text-white'}`}
      />
      <button 
        onClick={()=>{
          if(edit){
            editTodo();
          }else{
            setEdit((prev)=>!prev);
          }
        }}
        disabled={todoObject.completed}
      >{edit?'Save':'Edit'}</button>
      <button
        onClick={()=>deleteTodo(todoObject.id)}
      >Delete</button>
    </div>
  )
}