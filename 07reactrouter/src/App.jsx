import Header from "./components/Header/Header.jsx"
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <h1 className="bg-green-400 text-center">React Router</h1>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
