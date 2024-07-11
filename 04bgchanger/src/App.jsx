import { useState } from 'react';
function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap content-between bg-white p-5 rounded-3xl gap-5 shadow-lg'>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'red'}}
          onClick={()=>
          setColor('red')}>Red</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'green'}}
          onClick={()=>
          setColor('green')}>Green</button>
        <button className='p-2 rounded-2xl shadow-lg text-white' 
          style={{backgroundColor:'blue'}}
          onClick={()=>
          setColor('blue')}>Blue</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'grey'}}onClick={()=>
          setColor('grey')}>Grey</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'Yellow'}}   onClick={()=>
          setColor('Yellow')}>Yellow</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'Pink'}} onClick={()=>
          setColor('Pink')}>Pink</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'Purple'}}onClick={()=>
          setColor('Purple')}>Purple</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'Lavender'}}onClick={()=>
          setColor('Lavender')}>Lavender</button>
        <button className='p-2 rounded-2xl shadow-lg' 
          style={{backgroundColor:'White'}}onClick={()=>
          setColor('White')}>White</button>
        <button className='p-2 rounded-2xl shadow-lg text-white' 
          style={{backgroundColor:'black'}}onClick={()=>
          setColor('black')}>Black</button>  
        </div>          
      </div>
    </div>
  )
}

export default App
