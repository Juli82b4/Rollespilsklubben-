import React, { useState } from 'react';
import './styles/login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Switch between Sign In and Sign Up
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Opret konto' : 'Log ind'}</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Indtast din email" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">{isSignUp ? 'Opret adgangskode' : 'Adgangskode'}</label>
          <input
            type="password"
            id="password"
            placeholder={isSignUp ? 'Opret en adgangskode' : 'Indtast din adgangskode'}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {isSignUp ? 'Opret konto' : 'Log ind'}
        </button>
      </form>

      <div className="signup-option">
        <p>
          {isSignUp ? 'Har du allerede en konto? ' : 'Har du ikke en konto? '}
          <span className="toggle-link" onClick={toggleForm}>
            {isSignUp ? 'Log ind' : 'Opret konto'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
