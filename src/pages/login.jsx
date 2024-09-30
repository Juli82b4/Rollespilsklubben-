import React, { useState } from 'react';
import './styles/login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Switch between Sign In and Sign Up
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label htmlFor="password">{isSignUp ? 'Create Password' : 'Password'}</label>
          <input
            type="password"
            id="password"
            placeholder={isSignUp ? 'Create a password' : 'Enter your password'}
            required
          />
        </div>

        {/* Removed the Confirm Password field */}
        
        <button type="submit" className="submit-btn">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <div className="signup-option">
        <p>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span className="toggle-link" onClick={toggleForm}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
