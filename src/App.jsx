login
import React, { useState } from "react";
import Header from "./components/header";

/* eslint-disable no-unused-vars */
import Rgiteact, { useState } from "react";
import Header from "./components/Header";

main
import Walkingman from "./components/Walkingman";
import Cover from "./components/Cover";
import Parentinfo from "./components/Parentinfo";
import Login from "./components/login"; // Added the Login component
import Pathway from "./components/pathway";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isParentInfoVisible, setParentInfoVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false); // Added state for Login popup

  // Toggle Parentinfo popup
  const toggleParentInfo = () => {
    setParentInfoVisible(!isParentInfoVisible);
  };

  // Toggle Login popup
  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <>
      {/* Pass both toggle functions to Header */}
      <Header onPdfClick={toggleParentInfo} onLoginClick={toggleLogin} />
      <Cover />
      <Walkingman src="/src/img/knight.png" alt="Walking Man" />
      <Pathway />

      {/* Render Parentinfo popup */}
      {isParentInfoVisible && <Parentinfo onClose={toggleParentInfo} />}

      {/* Render Login popup */}
      {isLoginVisible && <Login onClose={toggleLogin} />}

      <Footer />
    </>
  );
}

export default App;
