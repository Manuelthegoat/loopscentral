import React from "react";
import WizkidImg from "../../Assets/wizkid.png";
import DavidoImg from "../../Assets/davido.png";
import DrakeImg from "../../Assets/drake.png";
import AfroImg from "../../Assets/afro.png";
import TemsImg from "../../Assets/tems.png";
import RemaImg from "../../Assets/rema.png";
import AmaImg from "../../Assets/amapiano.png";
import StreetImg from "../../Assets/street.png";
import Loops from "../../Assets/loop.png";
import "./FreshCards.css";

const FreshCards = () => {
  return (
    <>
      <div className="freshcardsdiv">
        <div className="freshcard">
          <img src={WizkidImg} alt="" />
          <p className="freshcardtitle">Wizkid Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={DavidoImg} alt="" />
          <p className="freshcardtitle">Davido Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={DrakeImg} alt="" />
          <p className="freshcardtitle">Drake Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={AfroImg} alt="" />
          <p className="freshcardtitle">Afro Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={TemsImg} alt="" />
          <p className="freshcardtitle">Tems Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={RemaImg} alt="" />
          <p className="freshcardtitle">Rema Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={AmaImg} alt="" />
          <p className="freshcardtitle">Amapiano Essentials</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
        <div className="freshcard">
          <img src={StreetImg} alt="" />
          <p className="freshcardtitle">Street Riddims</p>
          <div className="loopsandtext">
            <img src={Loops} alt="" />
            <p className="freshcardtitle">20</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreshCards;
