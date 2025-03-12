import React from "react";
import { Link } from "react-router-dom";

import Decoration from "../Assets/Decoration.svg";
import Tshirt from "../Assets/Icon-1.svg";
import ShoppingBag from "../Assets/Icon-2.svg";
import MagnifingGlass from "../Assets/Icon-3.svg";
import Recycling from "../Assets/Icon-4.svg";

const Steps = () => {
  return (
    <section id="Steps" className="steps-container">
      <div>
        <h2 className="steps-heading">Just 4 easy steps</h2>
        <img src={Decoration} alt="Decoration" />
      </div>

      <div className="steps-instruction">
        <div>
          <img src={Tshirt} alt="T-shirt" />
          <p>Pick stuff</p>
          <p>Clothing, toys, equipment & other</p>
        </div>

        <div>
          <img src={ShoppingBag} alt="Shopping bag" />
          <p>Pack them</p>
          <p>Use garbage bag</p>
        </div>

        <div>
          <img src={MagnifingGlass} alt="Magnifing glass" />
          <p>Decide who to help</p>
          <p>Chose a trusted location</p>
        </div>

        <div>
          <img src={Recycling} alt="Recycle icon" />
          <p>Order pickup</p>
          <p>Pickup will arrive on schedule</p>
        </div>
      </div>

      <Link to="/Login" className="action-button">
        Donate gifts
      </Link>
    </section>
  );
};

export default Steps;
