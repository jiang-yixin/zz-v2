import React from 'react'
import Logo from "./Logo";
import NavBar from "./NavBar";

import './Header.css'

const header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  )
}

export default header
