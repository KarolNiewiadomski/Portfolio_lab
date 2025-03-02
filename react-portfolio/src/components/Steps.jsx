import React from "react";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <section id="Steps">
      <div>
        <h2>Just 4 easy steps</h2>
        <img src="" alt="Fancy underline" />
      </div>

      <div>
        <div>
          <img src="" alt="T-shirt" />
          <p>Pick stuff</p>
          <p>Clothing, toys, equipment & other</p>
        </div>

        <div>
          <img src="" alt="Shopping bag" />
          <p>Pack them</p>
          <p>Use garbage bag</p>
        </div>

        <div>
          <img src="" alt="Magnifing glass" />
          <p>Decide who to help</p>
          <p>Chose a trusted location</p>
        </div>

        <div>
          <img src="" alt="Recycle icon" />
          <p>Order pickup</p>
          <p>Pickup will arrive on schedule</p>
        </div>
        <Link to="/Login">Donate gifts</Link>
      </div>
    </section>
  );
};

export default Steps;
