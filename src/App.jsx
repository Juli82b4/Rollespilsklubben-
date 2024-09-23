import React, { useState } from "react";
import Header from "./components/Header"; // Ensure correct case
import Walkingman from "./components/Walkingman";
import Cover from "./components/Cover";
import Info from "./components/info"; // Correct component import
import Parentinfo from "./components/Parentinfo";
import Login from "./components/Login"; // Ensure correct case
import Footer from "./components/footer";
import Pathway from "./components/pathway"; // Ensure correct case
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
      
      {/* Pass toggleLogin to Info component */}
      <Info onLoginClick={toggleLogin} />

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
