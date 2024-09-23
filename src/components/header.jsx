import React from "react";
import "./header.css";

const Header = ({ onPdfClick, onLoginClick }) => {
  return (
    <div className="header-container">
      <header className="header">
        <a href="home">
          <img className="logo-pic" src="./src/img/logo.png" alt="logo" />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              {/* Clicking this will trigger the Login popup */}
              <a href="#1" className="header-links" onClick={onLoginClick}>
                Bliv Medlem
              </a>
            </li>
            <li className="nav-item">
              {/* Clicking this will trigger the Login popup */}
              <a className="header-links" onClick={onPdfClick}>
               Forældre info
              </a>
            </li>
          </ul>
        </nav>
        {/* Clicking this will trigger the Parentinfo popup */}
      </header>
    </div>
  );
};

export default Header;
