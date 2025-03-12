import React from "react";
import { Link } from "react-router-dom";

import Decoration from "../Assets/Decoration.svg";

const HomeMain = () => {
  return (
    <section id="HomeMain" className="home-main-container">
      <h1>Start helping!</h1>
      <h2>Give back unwanted stuff in trusted hands</h2>
      <img src={Decoration} alt="Decoration" />
      <div className="home-main-button-container">
        <Link to="/Login">
          <button className="action-button">Give back</button>
        </Link>
        <Link to="/Login">
          <button className="action-button">Organise collection</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeMain;
