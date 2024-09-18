import React from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  return (
    <div className="login-popup-overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Bliv medlem</h3>
        <div className="login-content">
          <div className="login-option">
            <p>Har du allerede en konto?</p>
            <button className="login-btn">Log ind</button>
          </div>
          <div className="signup-option">
            <p>Har du ikke en konto endnu?</p>
            <button className="signup-btn">Opret konto</button>
          </div>
        </div>
        {/* Close button inside the popup */}
        <button className="close-popup-btn" onClick={onClose}>
          Luk
        </button>
      </div>
    </div>
  );
};

export default Login;
