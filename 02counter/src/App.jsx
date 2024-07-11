import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  function addCount(){
    if(counter<20)
    counter++;
    console.log(counter);
    setCounter(counter);
  }
  function removeCount(){
    if(counter>0)
    counter--;
    console.log(counter);
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addCount}>Add {counter}</button>
      <br />
      <button onClick={removeCount}>Remove {counter}</button>
    </>
  )
}

export default App
