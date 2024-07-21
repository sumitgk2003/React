import { TodoContext } from "./context/Todo";
import {useEffect, useState} from 'react';
import {TodoElement,TodoForm} from './components/index.js'
function App() {

  const [todos,setTodos]=useState([]);
  const addTodo=(todoObject)=>{
    setTodos((prev)=>{
      return ([{id:Date.now(),...todoObject},...prev])
    });
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todoObject)=>todoObject.id!==id))
  }
  const updateTodo=(id,todoMsg)=>{
    setTodos((prev)=>prev.map((todoObject)=>todoObject.id==id?{...todoObject,todo:todoMsg}:todoObject))
  }
  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((todoObject)=>todoObject.id===id?{...todoObject,completed:!todoObject.completed}:todoObject))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'));
    if(todos &&todos.length>0){
      setTodos(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <TodoContext.Provider value={{todos,addTodo,deleteTodo,toggleTodo,updateTodo}}>
      <h2 className='text-3xl bg-blue-500'>Todo with context Api and Local Storage</h2>
      <TodoForm/>
      {todos.map((todoObject)=>(
        <TodoElement key={todoObject.id} todoObject={todoObject}/>
      ))}
    </TodoContext.Provider>
  )
}

export default App
