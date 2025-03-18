import React, { useState } from "react";
import Decoration from "../Assets/Decoration.svg";

const WhoWeHelp = () => {
  const [activeCategory, setActiveCategory] = useState("Charities");
  return (
    <section id="FO" className="who-we-help">
      <div>
        <span>Who we help?</span>
        <img src={Decoration} alt="fancy underline" />
      </div>

      <div>
        <div className="button-group">
          {["Charities", "Non-profit", "Local"].map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          optio placeat minus beatae molestiae possimus repellendus. Nihil natus
          soluta a dicta porro nemo ipsam repudiandae veritatis.
        </p>

        <ul className="charity-list">
          <li className="charities">
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

          <li className="charities">
            <div>
              <h2>Charity "Dla dzieci"</h2>
              <p>Goal and mission: Help kids from poor families.</p>
            </div>
            <div>
              <p>clothes, home appliences, toys</p>
            </div>
          </li>

          <li className="charities">
            <div>
              <h2>Charity "Bez domu"</h2>
              <p>Goal and mission: Help people without a home.</p>
            </div>
            <div>
              <p>clothes, food, blankets</p>
            </div>
          </li>

          <li className="charities">
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

          <li className="charities">
            <div>
              <h2>Charity "Dla dzieci"</h2>
              <p>Goal and mission: Help kids from poor families.</p>
            </div>
            <div>
              <p>clothes, home appliences, toys</p>
            </div>
          </li>

          <li className="charities">
            <div>
              <h2>Charity "Bez domu"</h2>
              <p>Goal and mission: Help people without a home.</p>
            </div>
            <div>
              <p>clothes, food, blankets</p>
            </div>
          </li>

          <li className="charities">
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

          <li className="charities">
            <div>
              <h2>Charity "Dla dzieci"</h2>
              <p>Goal and mission: Help kids from poor families.</p>
            </div>
            <div>
              <p>clothes, home appliences, toys</p>
            </div>
          </li>

          <li className="charities">
            <div>
              <h2>Charity "Bez domu"</h2>
              <p>Goal and mission: Help people without a home.</p>
            </div>
            <div>
              <p>clothes, food, blankets</p>
            </div>
          </li>
        </ul>

        <ul className="non-profit-list">
          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="non-profit">
            <div>
              <h2>Non-profit</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>
        </ul>

        <ul className="local-lsit">
          <li className="local">
            <div>
              <h2>Local</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="local">
            <div>
              <h2>Local</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>

          <li className="local">
            <div>
              <h2>Local</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, unde consequatur.
              </p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhoWeHelp;
