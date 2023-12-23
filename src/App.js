import "./App.css";
import BecomeCreator from "./Components/BecomeCreator/BecomeCreator";
import BigLeague from "./Components/BigLeague/BigLeague";
import BreakLine from "./Components/BreakLine/BreakLine";
import DiscoverMore from "./Components/DiscoverMore/DiscoverMore";
import Footer from "./Components/Footer/Footer";
import Fresh from "./Components/Fresh/Fresh";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import SupportedDaws from "./Components/SupportedDaws/SupportedDaws";

function App() {
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
      <Footer />
    </>
  );
}

export default App;
