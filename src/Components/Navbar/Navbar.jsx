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
            <p className="nav-item tab-active">Home</p>
            <p className="nav-item">About</p>
            <p className="nav-item">Explore</p>
            <p className="nav-item">Pricing</p>
            <p className="nav-item">Login</p>
        </div>
        <div className="nav-btn">
            <button className="navbtn">Try Free <i className="fas fa-caret-right"></i></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
