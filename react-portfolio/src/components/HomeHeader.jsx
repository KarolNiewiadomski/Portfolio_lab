import React from "react";
import { Link } from "react-router-dom"; // Link to change path
import { Link as ScrollLink } from "react-scroll"; // Link to scroll

const HomeHeader = () => {
  return (
    <header>
      <div>
        <img src="" alt="stuff" />
      </div>
      <div>
        {/* Upper menu */}
        <nav>
          <Link to="/Login">Log in</Link>
          <Link to="/Register">Register</Link>
        </nav>

        {/* Lower menu */}
        <nav>
          <ScrollLink to="Start" smooth={true} duration={500}>
            Start
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={500}>
            About
          </ScrollLink>
          <ScrollLink to="AboutUs" smooth={true} duration={500}>
            About us
          </ScrollLink>
          <ScrollLink to="F&O" smooth={true} duration={500}>
            Foundation & organisation
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
