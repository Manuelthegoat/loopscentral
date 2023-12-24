import React from 'react'
import HeaderLogo from '../../Assets/header-logo.png'
import './NormalNav.css'

const Normalnav = () => {
  return (
    <>
    <div className="navbar2">
    <div className="navlogo2">
        <img src={HeaderLogo} alt="" />
    </div>
    <div className="navlist2">
        <a className="nav-item2 " href='/'>Home</a>
        <a className="nav-item2 tab-active" href='/about'>About</a>
        <a className="nav-item2">Explore</a>
        <a className="nav-item2">Pricing</a>
        <a className="nav-item2">Login</a>
    </div>
    <div className="nav-btn2">
        <button className="navbtn2">Try Free <i className="fas fa-caret-right"></i></button>
    </div>
  </div>
    </>
  )
}

export default Normalnav