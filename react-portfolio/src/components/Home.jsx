import React from "react";
import HomeMain from "./HomeMain";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Steps from "./Steps";
import About from "./About";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeMain />
      <ThreeColumns />
      <Steps />
      <About />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
