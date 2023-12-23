import React from "react";
import "./Pricing.css";
import Switch from "../../Assets/switch.png";

const Pricing = () => {
  return (
    <>
      <div className="pricingmaindiv">
        <div className="pricinghead">
          <p className="pricingheadtitle">Subscribe</p>
          <p className="pricingheadsubtext">Lets get you ready!</p>
          <p className="pricingheadsubtext2">
            Get full access free for the first 7 days. No charges applied until
            after trial period.
          </p>
          <div className="priceswitch">
            <p className="switchfirsttext">Monthly billing</p>
            <img src={Switch} alt="" />
            <p className="switchsecondtext">Annual billing</p>
          </div>
        </div>
        <div className="pricingbody">
          <div className="price1">
            <div className="price1toptext">
              <p className="tt1tt">Standard</p>
              <p className="tt2tt">30</p>
              <p className="tt3tt">Loop coins</p>
            </div>
            <div className="price1text2">
              <p className="pt1pt">Free Play Listing</p>
              <p className="pt1pt">30 downloads per month</p>
            </div>
            <div className="price1text3">
              <p>$9.99 / month</p>
            </div>
          </div>

          <div className="price2">
            <div className="price2toptext">
              <p className="ttp1ttp">RECOMMENDED</p>
            </div>
            <div className="price2secondtext">
              <div className="pricepro">PRO</div>
              <div className="price50">50</div>
              <div className="tt3tt">loop coins</div>
            </div>
            <div className="price2thirdtext">
              <p className="tt31tt">Certification</p>
              <p className="tt31tt">Free Play Listing</p>
              <p className="tt31tt">Unlimited Uploads</p>
              <p className="tt31tt">Access To Loopshare</p>
              <p className="tt31tt">100% revenue for sellers</p>
              <p className="tt31tt">50 downloads per month</p>
            </div>
            <div className="price1text3">
              <p>$14.99 / month</p>
            </div>
          </div>
          <div className="price1">
            <div className="price1toptext">
              <p className="tt1tt">Standard</p>
              <p className="tt2tt">30</p>
              <p className="tt3tt">Loop coins</p>
            </div>
            <div className="price1text2">
              <p className="pt1pt">Free Play Listing</p>
              <p className="pt1pt">30 downloads per month</p>
            </div>
            <div className="price1text3">
              <p>$9.99 / month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tryfree">
        <button className="navbtn">
          Learn More <i className="fas fa-caret-right"></i>
        </button><br/><br/>
        <a href="">Enquire More?</a>
      </div>
    </>
  );
};

export default Pricing;
