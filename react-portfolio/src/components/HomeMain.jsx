import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../Assets/Decoration.svg";

const HomeMain = () => {
  return (
    <section id="HomeMain" className="home-main-container">
      <h1>Start helping!</h1>
      <h2>Give back unwanted stuff in trusted hands</h2>
      <img src={Decoration} alt="Decoration" />
      <Link to="/Login">
        <button>Give back</button>
      </Link>
      <Link to="/Login">
        <button>Organise collection</button>
      </Link>
    </section>
  );
};

export default HomeMain;
