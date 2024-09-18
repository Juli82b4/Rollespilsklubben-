/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css"; // Ensure the CSS file is correctly imported

const Header = ({ onPdfClick, onLoginClick }) => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="home"></a>
          <img className="logo-pic" src="/src/img/logo.png" alt="logo" />
        <a href="home">
          <img className="logo-pic" src="./src/img/logo.png" alt="logo" />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              {/* Clicking this will trigger the Login popup */}
              <button className="header-links" onClick={onLoginClick}>
                Bliv medlem
              </button>
            </li>
          </ul>
        </nav>
        {/* Clicking this will trigger the Parentinfo popup */}
        <button className="header-links" onClick={onPdfClick}>
          Forældre info
        </button>
      </header>
    </div>
  );
}

export default Header;
