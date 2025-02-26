import React from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section>
      <h1>Start helping!</h1>
      <h2>Give back unwanted stuff in trusted hands</h2>
      <Link to="/Login">
        <button>Give back</button>
      </Link>
      <Link to="/Login">
        <button>Organise collection</button>
      </Link>
    </section>
  );
};

export default MainSection;
