import React from "react";
import "./BigLeague.css";

const BigLeague = () => {
  return (
    <>
      <div className="bigmaindiv">
        <div className="bigtitlediv">
          <div className="bigtitle">
            Join the <span>big</span> league
          </div>
          <div className="bigtext">
            Get paid doing what you love the most. We make sample search easy,
            Get paid everytime you make a sale, we make sale and its as easy as
            3 simple steps.
          </div>
        </div>
        <div className="bignextdiv">
          <div className="bignextleft">
            <div className="bignextlefttitle">1. Get a certified profile</div>
            <div className="bignextlefttext">
              With our upload option for creators, you can customize your
              products and make it available for purchase.
            </div>
          </div>
          <div className="bignextright">
            <div className="bignextlefttitle">3. Get Paid</div>
            <div className="bignextlefttext">
              Our revenues are always available for collection; we pay you as
              soon as a sale is made.
            </div>
          </div>
        </div>
        <div className="bignextdiv2">
          <div className="bignextlefttitle">
            2. Share your loop kits with our Community{" "}
          </div>
          <div className="bignextlefttext">
            We streamline the selling process by providing beats,
            <br /> unique services, loop kits, and much more.
          </div>
          <button className="navbtn">
            Learn More <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default BigLeague;
