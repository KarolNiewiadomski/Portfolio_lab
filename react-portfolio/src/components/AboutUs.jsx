import React from "react";
import Team from "../Assets/People.jpg";
import Signature from "../Assets/Signature.svg";
import Decoration from "../Assets/Decoration.svg";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="about-us">
      <div className="about-us-left">
        <h2>About us</h2>
        <img src={Decoration} alt="Decoration" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={Signature} alt="signature" />
      </div>
      <div className="about-us-right">
        <img src={Team} alt="Group of people" />
      </div>
    </div>
  );
};

export default AboutUs;
