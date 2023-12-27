import React from "react";
import Pricing from "../Components/Pricing/Pricing";
import Pricingnav from "../Components/PricingNav/Pricingnav";


const PricingPage = () => {
  return (
    <>
      <Pricingnav />
      <div className="pricingpagediv">
        <div className="pricingpagetitle">
          Loopscentral’s got the Best plan for you!
        </div>
        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
