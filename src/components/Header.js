import React from 'react'

import Logo from './Logo'
import NavBar from './NavBar'

import '../css/Header.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header
