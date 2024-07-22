import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={todos:[],update:{
    todo:{
      id:1,
      text:'',
      completed:false
    },
    istrue:false
  }}
export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const todo={
        id:nanoid(),
        text:action.payload,
        completed:false
      }
      state.todos.push(todo);
      console.log(state.todos.length);
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>action.payload!==todo.id);
      console.log(state.todos.length);
    },
    toggleTodo:(state,action)=>{
      state.todos.forEach((todo)=>{
        if(action.payload===todo.id){
          todo.completed=!todo.completed;
        }
      })
    },
    editTodo:(state,action)=>{
        if(state.update.todo.id===action.payload){
          state.update.istrue=false;
          state.update.todo={};
        }else{
          state.todos.forEach((todo)=>{
          if(todo.id===action.payload){
            state.update.istrue=true;
            state.update.todo=todo;
          }});
        }{
        }
    },
    updateTodo:(state,action)=>{
      state.todos.forEach((todo)=>{
          if(todo.id===state.update.todo.id){
            todo.text=action.payload;
          }});
          state.update.istrue=false;
          state.update.todo={};
    }
  }
})

export const {addTodo,removeTodo,toggleTodo,editTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;