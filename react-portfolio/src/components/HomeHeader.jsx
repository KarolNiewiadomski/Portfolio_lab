import React from "react";
import { Link } from "react-router-dom"; // Link to change path
import { Link as ScrollLink } from "react-scroll"; // Link to scroll
import HomeHeaderImg from "../Assets/Home-Hero-Image.jpg";

const HomeHeader = () => {
  return (
    <header id="HomeHeader" className="home-header-container">
      <div className="header-left">
        <img
          src={HomeHeaderImg}
          alt="Gifts to Charity"
          className="home-header-image"
        />
      </div>
      <div className="header-right">
        {/* Upper menu */}
        <nav className="upper-nav">
          <Link to="/Login">Log in</Link>
          <Link to="/Register">Register</Link>
        </nav>

        {/* Lower menu */}
        <nav className="lower-nav">
          <ScrollLink to="Start" smooth={true} duration={500}>
            Start
          </ScrollLink>

          <ScrollLink to="Steps" smooth={true} duration={500}>
            Steps
          </ScrollLink>

          <ScrollLink to="AboutUs" smooth={true} duration={500}>
            About us
          </ScrollLink>

          <ScrollLink to="FO" smooth={true} duration={500}>
            Foundation & organisation {/* WhoWeHelp */}
          </ScrollLink>

          <ScrollLink to="Contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
