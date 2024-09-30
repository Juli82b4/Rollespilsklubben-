/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onClose(); // Close the popup
    navigate("/login"); // Navigate to the login page
  };

  const handleSignUp = () => {
    onClose(); // Close the popup
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="login-popup-overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Bliv medlem</h3>
        <div className="login-content">
          <div className="login-option">
            <p>Har du allerede en konto?</p>
            <button className="login-btn" onClick={handleLogin}>
              Log ind
            </button>
          </div>
          <div className="signup-option">
            <p>Har du ikke en konto endnu?</p>
            <button className="signup-btn" onClick={handleSignUp}>
              Opret konto
            </button>
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

