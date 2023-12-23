import React from "react";
import "./DiscoverMore.css";
import Disimg from '../../Assets/matt-moloney-5kYKzH5Gwgk-unsplash (1).png'

const DiscoverMore = () => {
  return (
    <>
      <div className="dismaindiv">
        <div className="disleft">
          <h3 className="distitle">Loopscentral</h3>
          <p className="distext">
            We provide flexible download options, provide our creators the
            chance to earn a passive income by uploading samples, and provide
            access to a wealth of content for your musical journey.
          </p>
          <button className="disbtn">Discover More</button>
        </div>
        <div className="disright">
          <img src={Disimg} />
        </div>
      </div>
    </>
  );
};

export default DiscoverMore;
