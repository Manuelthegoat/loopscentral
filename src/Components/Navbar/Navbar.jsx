import React from 'react'
import HeaderLogo from '../../Assets/header-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navlogo">
            <img src={HeaderLogo} alt="" />
        </div>
        <div className="navlist">
            <a className="nav-item tab-active" href='/'>Home</a>
            <a className="nav-item" href='/about'>About</a>
            <a className="nav-item">Explore</a>
            <a className="nav-item">Pricing</a>
            <a className="nav-item">Login</a>
        </div>
        <div className="nav-btn">
            <button className="navbtn">Try Free <i className="fas fa-caret-right"></i></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
