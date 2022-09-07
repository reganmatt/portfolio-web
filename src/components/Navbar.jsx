import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to ='/'>About</Link>
      <Link to ='/'>Projects</Link>
      <Link to ='/'>Third</Link>
    </nav>
  )
}

export default Navbar
