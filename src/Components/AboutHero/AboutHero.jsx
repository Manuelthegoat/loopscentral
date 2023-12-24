import React from 'react'
import './AboutHero.css'
import Playbtn from '../../Assets/play.png'

const AboutHero = () => {
  return (
    <>
    <div className="hero2">
    <div className="hero-content2">
       <img src={Playbtn} alt="" />
       <h3 className="abouttitle">About us</h3>
       <p className="abouttext">Now Playing</p>
    </div>
  </div>
    </>
  )
}

export default AboutHero