import { useState,useContext } from "react";
import UserContext from '../context/UserContext.js';

function Login(){
  const [username,Setusername]=useState('');
  const [password,Setpassword]=useState('');

  const {setUser}=useContext(UserContext);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password});
  }


  return(
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username"
      value={username}
      onChange={(e)=>Setusername(e.target.value)}
      />
      <input type="password" placeholder="password"
      value={password}
      onChange={(e)=>Setpassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>

  )
}
export default Login;