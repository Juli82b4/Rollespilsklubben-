/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css"; // Ensure the CSS file is correctly imported

const Header = ({ onPdfClick, onLoginClick }) => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="#home">
          <p>LOGO</p>
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              {/* Clicking this will trigger the Login popup */}
              <a href="#1" className="nav-link" onClick={onLoginClick}>
                Bliv medlem
              </a>
            </li>
          </ul>
        </nav>
        {/* Clicking this will trigger the Parentinfo popup */}
        <a className="pdf-button" onClick={onPdfClick}>
          Forældre info
        </a>
      </header>
    </div>
  );
};

export default Header;
