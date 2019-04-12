import React from 'react'
import Nav from "./Nav";

import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Nav name="WORK" />
      <Nav name="ABOUT" />
      <Nav name="CONTACT" />
    </div>
  )
}

export default NavBar