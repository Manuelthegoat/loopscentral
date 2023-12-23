import React from "react";
import Fullwhite from "../../Assets/loopfullwhite.png";
import social1 from "../../Assets/Socials/1.png";
import social2 from "../../Assets/Socials/2.png";
import social3 from "../../Assets/Socials/3.png";
import social4 from "../../Assets/Socials/4.png";
import dot from '../../Assets/dot.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footerdiv">
        <div className="footdiv1">
          <img src={Fullwhite} alt="" />
          <p className="foottexttext">It’s all about good music...</p>
          <div className="footsocials">
            <img src={social1} alt="" />
            <img src={social2} alt="" />
            <img src={social3} alt="" />
            <img src={social4} alt="" />
          </div>
        </div>
        <div className="footdiv2">
          <p className="foottitle1">Music</p>

          <div className="footlist">
            <p>Loops</p>
            <p>Loop kit</p>
            <p>Vault</p>
            <p>Free Loops</p>
            <p>Creators</p>
          </div>
        </div>
        <div className="footdiv3">
          {" "}
          <p className="foottitle1">Accounts</p>
          <div className="footlist">
            <p>Subscribe</p>
            <p>Self loops</p>
            <p>Free loops</p>
            <p>Downloads</p>
          </div>
        </div>
        <div className="footdiv4">
          {" "}
          <p className="foottitle1">Support</p>
          <div className="footlist">
            <p>Help</p>
            <p>Contact Support</p>
            <p>Terms of Usage</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="footdiv5">
          {" "}
          <p className="foottitle1">Newsletter</p>
          <div className="footlist">
            <p>Fill in the space provided to recieve newsletters from Loopscentral</p>
           <div className="newsletter">
            <input type="email" placeholder="Email" />
            <button>Sign up</button>
           </div>
          </div>
        </div>
      </div>
      <div className="finalfooter">
        <p className="finalfoot1">2022  Loopscentral-All rights Reserved</p>
        <img src={dot} alt="" />
        <p className="finalfoot2">contact@loopscentral.com</p>
        <img src={dot} alt="" />
      </div>
    </>
  );
};

export default Footer;
