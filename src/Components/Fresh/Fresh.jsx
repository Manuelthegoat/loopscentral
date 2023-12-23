import React from "react";
import "./Fresh.css";
import FreshCards from "../FreshCards/FreshCards";

const Fresh = () => {
  return (
    <>
      <div className="freshdiv">
        <p className="freshtitle">Fresh from our Creators</p>
        <p className="freshtext">
          Surf through our sample vault curated just for you.
        </p>
        <button className="freshbtn">Discover More</button>
      </div>
      <div className="parent-of-freshcardsdiv">
        <FreshCards />
      </div>
    </>
  );
};

export default Fresh;
