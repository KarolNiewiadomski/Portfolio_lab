import React, { useState } from "react";
import Decoration from "../Assets/Decoration.svg";

const WhoWeHelp = () => {
  const [activeCategory, setActiveCategory] = useState("Charities");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const data = {
    Charities: [
      {
        name: "Lorem ipsum dolor",
        mission: "Help people in need",
        items: "clothes, food, toys",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Help kids from poor families",
        items: "clothes, toys",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Help the homeless",
        items: "clothes, food, blankets",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support education",
        items: "books, school supplies",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Help people in need",
        items: "clothes, food, toys",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Help kids from poor families",
        items: "clothes, toys",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Help the homeless",
        items: "clothes, food, blankets",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support education",
        items: "books, school supplies",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support education",
        items: "books, school supplies",
      },
    ],

    "Non-profit": [
      {
        name: "Lorem ipsum dolor",
        mission: "Environmental Protection",
        items: "eco products, funds",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Medical aid",
        items: "medicine, funding",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Animal welfare",
        items: "food, shelter supplies",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
    ],

    Local: [
      {
        name: "Lorem ipsum dolor",
        mission: "Elderly care",
        items: "home visits, medical aid",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Fight hunger",
        items: "food donations",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support young people",
        items: "education, mentorship",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Promote art",
        items: "art supplies, workshops",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Lorem ipsum dolor",
        mission: "Support local communities",
        items: "clothing, food",
      },
    ],
  };

  const categoryData = data[activeCategory] || [];
  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  // Get items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = categoryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section id="FO" className="who-we-help">
      <div>
        <span>Who we help?</span>
        <img src={Decoration} alt="fancy underline" />
      </div>

      {/* Category Buttons */}
      <div>
        <div className="button-group">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset to first page on category change
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Short description To be ADDED*/}

        {/* List Display */}
        <ul className="category-list">
          {displayedItems.map((item, index) => (
            <li
              key={index}
              className={`category-item ${activeCategory.toLowerCase()}`}
            >
              <div className="left-content">
                <h2>{item.name}</h2>
                <p>Goal and mission: {item.mission}</p>
              </div>
              <div className="right-content">
                <p>{item.items}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination Buttons */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                className={currentPage === pageNum ? "active" : ""}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
