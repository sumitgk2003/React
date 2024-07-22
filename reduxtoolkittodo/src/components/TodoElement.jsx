import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo,toggleTodo,editTodo } from "../features/todoSlice.js";
import { useUpdate } from "../features/useUpadate.js";
import { useText } from "../features/useText.js";
export default function TodoElement({todo}){
  const dispatch=useDispatch();
  const update=useSelector(state=>state.update);
  const[edit,setEdit]=useState(false);
  const[todoMsg,setTodoMsg]=useState(todo.text);
  // const{update,setUpdate}=useUpdate();
  // const{text,setText}=useText();
  return(
      <li key={todo.id}>
        <div className="flex">
        <input type="checkbox"
        checked={todo.completed}
        onChange={()=>dispatch(toggleTodo(todo.id))}
        />
        <input type="text"
        value={todo.text}
        onChange={(e)=>setTodoMsg(e.target.value)}
        readOnly={true}
        className={`${todo.completed?'bg-green-500 line-through':'bg-red-500 text-white'}`}
        />
        <button 
          onClick={()=>{
              setEdit((prev)=>!prev);
              dispatch(editTodo(todo.id));
            }
          }
          
          disabled={todo.completed}
        >{update.todo.id===todo.id?'Cancel':'Edit'}</button>
        <button
          onClick={()=>dispatch(removeTodo(todo.id))}
        >Delete</button>
        </div>
      </li>
  )
}