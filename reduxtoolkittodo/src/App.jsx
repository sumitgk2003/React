import { useSelector } from "react-redux"
import TodoElement from "./components/TodoElement"
import TodoForm from "./components/TodoForm"


function App() {
  const todos=useSelector(state=>state.todos);
  return (
    <>
      <h1 className='text-3xl'>Redux Toolkit</h1>
      <TodoForm/>
      <ul>
      {todos.map((todo)=><TodoElement key={todo.id} todo={todo}/>)}
      </ul>
      
    </>
  )
}

export default App
