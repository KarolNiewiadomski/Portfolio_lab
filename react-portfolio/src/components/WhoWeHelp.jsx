import React from "react";
import Decoration from "../Assets/Decoration.svg";

const WhoWeHelp = () => {
  return (
    <section id="FO">
      <div>
        <span>Who we help?</span>
        <img src={Decoration} alt="fancy underline" />
      </div>

      <div>
        <nav>
          <button>Charities</button>
          <button>Non-profit</button>
          <button>Local</button>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            optio placeat minus beatae molestiae possimus repellendus. Nihil
            natus soluta a dicta porro nemo ipsam repudiandae veritatis.
          </p>
          <ul>
            <li className="Charities">
              <div>
                <h2>Charity "Dbam o zdrowie"</h2>
                <p>
                  Goal and mission: Help people who are in difficult live
                  situations.
                </p>
              </div>
              <div>
                <p>clothes, food, home appliences, toys</p>
              </div>
            </li>

            <li className="Charities">
              <div>
                <h2>Charity "Dla dzieci"</h2>
                <p>Goal and mission: Help kids from poor families.</p>
              </div>
              <div>
                <p>clothes, home appliences, toys</p>
              </div>
            </li>

            <li className="Charities">
              <div>
                <h2>Charity "Bez domu"</h2>
                <p>Goal and mission: Help People.</p>
              </div>
              <div>
                <p>clothes, home appliences, toys</p>
              </div>
            </li>
          </ul>
          <a href="...">COMPONENT TO BE MADE AND TO PROPEGADE</a>
        </nav>
      </div>
    </section>
  );
};

export default WhoWeHelp;
