import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" >Work</Link>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
    </div>
  )
}

export default NavBar