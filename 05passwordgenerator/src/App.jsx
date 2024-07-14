import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState('');
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numAllowed)str+='0123456789';
    if(charAllowed)str+='!@#$%^&*-_+~`';
    for(let i=0;i<length;i++){
      let char=str[Math.floor(Math.random()*str.length)];
      pass+=char;
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])
  const copy=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  },[password]);
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])
  return (
    <>
    <div>
      <h1 className='text-white text-4xl text-center'>Password Generator</h1>
    <div className='flex flex-col content-center bg-gray-500 rounded-xl self-center  justify-center'>
      <div className='flex justify-center p-2  content-center ' >
      <input className='w-4/5 rounded-xl px-2'
      value={password}
      readOnly
      ref={passwordRef}/>
      <button className='text-white' onClick={copy}>Copy</button>
      </div>
      <div className='flex justify-center text-white'>
      <input 
      type="range"
      min={8}
      max={50}
      value={length}
      onChange={(e)=>{
        setLength(e.target.value)
      }}
      />
      <label>Length: {length}</label>
      <input 
      type='checkbox'
      onChange={()=>{
        setNumAllowed(prev=>!prev);
      }}
      /><label>Numbers</label>
      <input 
      type="checkbox"
      onChange={()=>{
        setCharAllowed(prev=>!prev);
      }}
      /><label>Characters</label>
      </div>
    </div>  
    </div>
    </>
  )
}

export default App
