/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css"; // Ensure the CSS file is correctly imported

const Header = ({ onPdfClick }) => {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <header className="header">
        <a href="home">
        <img className="logo-pic" src="./src/img/logo.png" alt="logo" />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#1" className="header-links" onClick={handleScroll}>
                Bliv medlem
              </a>
            </li>
          </ul>
        </nav>
        {/* Clicking this will trigger the Parentinfo popup */}
        <a className="header-links" onClick={onPdfClick}>
          Forældre info
        </a>
      </header>
    </div>
  );
};

export default Header;
