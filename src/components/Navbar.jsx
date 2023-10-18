import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to ='/'>Home</Link>
      <Link to ='/about'>About</Link>
      <Link to ='/experience'>Experience</Link>
      <Link to ='/CV'>CV</Link>
      <Link to ='/Contact'>Contact</Link>
    </nav>
  )
}

export default Navbar
