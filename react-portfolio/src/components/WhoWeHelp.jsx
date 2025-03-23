import React, { useState } from "react";
import Decoration from "../Assets/Decoration.svg";

const WhoWeHelp = () => {
  const [activeCategory, setActiveCategory] = useState("Charities");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const data = {
    Charities: [
      {
        name: "Charity 'Dbam o zdrowie'",
        mission: "Help people in need",
        items: "clothes, food, toys",
      },
      {
        name: "Charity 'Dla dzieci'",
        mission: "Help kids from poor families",
        items: "clothes, toys",
      },
      {
        name: "Charity 'Bez domu'",
        mission: "Help the homeless",
        items: "clothes, food, blankets",
      },
      {
        name: "Charity 'Education First'",
        mission: "Support education",
        items: "books, school supplies",
      },
      {
        name: "Charity 'Dbam o zdrowie'",
        mission: "Help people in need",
        items: "clothes, food, toys",
      },
      {
        name: "Charity 'Dla dzieci'",
        mission: "Help kids from poor families",
        items: "clothes, toys",
      },
      {
        name: "Charity 'Bez domu'",
        mission: "Help the homeless",
        items: "clothes, food, blankets",
      },
      {
        name: "Charity 'Education First'",
        mission: "Support education",
        items: "books, school supplies",
      },
      {
        name: "Charity 'Education First'",
        mission: "Support education",
        items: "books, school supplies",
      },
    ],

    "Non-profit": [
      {
        name: "Non-profit 'Green World'",
        mission: "Environmental Protection",
        items: "eco products, funds",
      },
      {
        name: "Non-profit 'Health First'",
        mission: "Medical aid",
        items: "medicine, funding",
      },
      {
        name: "Non-profit 'Animal Rescue'",
        mission: "Animal welfare",
        items: "food, shelter supplies",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
    ],

    Local: [
      {
        name: "Local 'Help the Elderly'",
        mission: "Elderly care",
        items: "home visits, medical aid",
      },
      {
        name: "Local 'Food Bank'",
        mission: "Fight hunger",
        items: "food donations",
      },
      {
        name: "Local 'Youth Program'",
        mission: "Support young people",
        items: "education, mentorship",
      },
      {
        name: "Local 'Art for All'",
        mission: "Promote art",
        items: "art supplies, workshops",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
        mission: "Support local communities",
        items: "clothing, food",
      },
      {
        name: "Non-profit 'Community Care'",
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

  // Handle page changes
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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

        {/* List Display */}
        <ul className="category-list">
          {displayedItems.map((item, index) => (
            <li key={index} className={activeCategory.toLowerCase()}>
              <div>
                <h2>{item.name}</h2>
                <p>Goal and mission: {item.mission}</p>
              </div>
              <div>
                <p>{item.items}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoWeHelp;
