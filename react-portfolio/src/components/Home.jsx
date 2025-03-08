import React from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Steps from "./Steps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="Home">
      <div>
        <div>
          <HomeHeader />
          <ThreeColumns />
          <Steps />
          <AboutUs />
          <WhoWeHelp />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
