import {Link,NavLink} from 'react-router-dom'

function Header(){
  return(
    <>
    <div className='flex justify-evenly shadow-lg py-3'>
      <Link to='/'>Logo</Link>
      <ul className='flex gap-5'>
        <NavLink to='/' className={({isActive})=>
          `${isActive?'text-green-500':'text-gray-500'}`
        }>Home</NavLink>
        <NavLink to='/about' className={(props)=>
          `${props.isActive?'text-green-500':'text-gray-500'}`
        }>About</NavLink>
        <NavLink to='/contact' className={({isActive})=>
          `${isActive?'text-green-500':'text-gray-500'}`
        }>Contact</NavLink>
        <NavLink to='/github' className={({isActive})=>
          `${isActive?'text-green-500':'text-gray-500'}`
        }>Github</NavLink>
      </ul>
      <ul className='flex gap-5'>
        <li>Log in</li>
        <li>Get Started</li>
      </ul>
    </div>
    </>
  )
}
export default Header;