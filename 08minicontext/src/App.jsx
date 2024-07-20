import UserContextProvider from './context/UserContext.jsx'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
