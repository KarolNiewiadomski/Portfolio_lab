import React from "react";
import { Link } from "react-router-dom"; // Link to change path
import { Link as ScrollLink } from "react-scroll"; // Link to scroll

const HomeHeader = () => {
  return (
    <header id="HomeHeader">
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
        <nav></nav>
      </div>
    </header>
  );
};

export default HomeHeader;
