import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" exact className="link" activeClassName="selected" >Work</NavLink>
      <NavLink to="/about" className="link" activeClassName="selected" >About</NavLink>
      <NavLink to="/contact" className="link" activeClassName="selected" >Contact</NavLink>
    </div>
  )
}

export default NavBar