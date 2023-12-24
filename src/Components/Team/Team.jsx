import React from 'react'
import './Team.css'
import social1 from "../../Assets/Socials/1.png";
import social2 from "../../Assets/Socials/2.png";
import social3 from "../../Assets/Socials/3.png";
import social4 from "../../Assets/Socials/4.png";
import Teamimg from '../../Assets/teamimg.png'
import Teamimg2 from '../../Assets/teamimg2.png'
import Teamimg3 from '../../Assets/teamimg3.png'
import underline from '../../Assets/underline.png'
const Team = () => {
  return (
    <>
        <div className="teammaindiv">
            <div className="teamtitle">
                <p>Meet our Team</p>
            </div>
            <div className="teambody">
                <div className="singleteam">
                    <img src={Teamimg} alt="" />
                    <p className="teamname">Joshua Jeremiah</p>
                    <img src={underline} alt="" />
                    <p className="teamrole">CEO/Founder</p>
                    <div className="teamsocials">
                        <img src={social1} alt="" />
                        <img src={social2} alt="" />
                        <img src={social3} alt="" />
                        <img src={social4} alt="" />
                    </div>
                </div>
                <div className="singleteam">
                    <img src={Teamimg2} alt="" />
                    <p className="teamname">Martins Madami</p>
                    <img src={underline} alt="" />
                    <p className="teamrole">Head of Design</p>
                    <div className="teamsocials">
                        <img src={social1} alt="" />
                        <img src={social2} alt="" />
                        <img src={social3} alt="" />
                        <img src={social4} alt="" />
                    </div>
                </div>
                <div className="singleteam">
                    <img src={Teamimg3} alt="" />
                    <p className="teamname">DR. Olatunde Bello</p>
                    <img src={underline} alt="" />
                    <p className="teamrole">Community Manager</p>
                    <div className="teamsocials">
                        <img src={social1} alt="" />
                        <img src={social2} alt="" />
                        <img src={social3} alt="" />
                        <img src={social4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team