import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Normalnav from "../Components/NormalNav/Normalnav";
import AboutHero from "../Components/AboutHero/AboutHero";
import AboutSteps from "../Components/AboutSteps/AboutSteps";
import Team from "../Components/Team/Team";
import Pricing from "../Components/Pricing/Pricing";
import SupportedDaws from "../Components/SupportedDaws/SupportedDaws";

const AboutPage = () => {
  return (
    <>
      <div className="header-hero-container2">
        <Normalnav />
        <AboutHero />
      </div>
      <AboutSteps />
      <Team />
      <Pricing />
      <SupportedDaws />
    </>
  );
};

export default AboutPage;
