import React from "react";
import "./BecomeCreator.css";
import Creator from "../../Assets/creator.png";

const BecomeCreator = () => {
  return (
    <>
      <div className="becomemaindiv">
        <div className="become-left">
          <p className="become-first-text">Lets pay you</p>
          <h3 className="become-second-text">Become a creator</h3>
          <p className="become-third-text">
            Join our community, upload your ideas, and earn money by motivating
            other creatives. We don't charge CREATORS any money, but before
            approving an application, it must pass quality check.
          </p>
          <div className="creatorbtndivs">
            <button className="navbtn">
              Apply Now
            </button>
            <button className="crtbtn">Learn more</button>
          </div>
        </div>
        <div className="become-right">
          <img src={Creator} alt="" />
        </div>
      </div>
    </>
  );
};

export default BecomeCreator;
