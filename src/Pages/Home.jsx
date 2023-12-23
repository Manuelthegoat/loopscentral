import React from "react";
import BreakLine from "../Components/BreakLine/BreakLine";
import Fresh from "../Components/Fresh/Fresh";
import DiscoverMore from "../Components/DiscoverMore/DiscoverMore";
import BigLeague from "../Components/BigLeague/BigLeague";
import SupportedDaws from "../Components/SupportedDaws/SupportedDaws";
import Pricing from "../Components/Pricing/Pricing";
import BecomeCreator from "../Components/BecomeCreator/BecomeCreator";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="header-hero-container">
        <Navbar />
        <Hero />
      </div>
      <BreakLine />
      <Fresh />
      <DiscoverMore />
      <BigLeague />
      <SupportedDaws />
      <BreakLine />
      <Pricing />
      <BecomeCreator />
    </>
  );
};

export default Home;
