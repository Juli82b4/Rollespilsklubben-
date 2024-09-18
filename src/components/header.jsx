import React from "react";
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
              <a href="#1" className="nav-link" onClick={onLoginClick}>
                Login
              </a>
            </li>
            <li className="nav-item">
              {/* Clicking this will trigger the Scroll to Main section */}
              <a href="#main" className="header-links">
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