import {createContext,useContext} from 'react';

export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:'msg',
      completed:false
    }
  ],
  addTodo:(id)=>{},
  updateTodo:(id,todo)=>{},
  toggleTodo:(id)=>{},
  deleteTodo:(id)=>{}
});

export default function useTodo(){
  return useContext(TodoContext);
}