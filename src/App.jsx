import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/header"; 
import Walkingman from "./components/walkingman";
import Cover from "./components/cover";
import Info from "./components/info";
import Parentinfo from "./components/parentinfo";
import Login from "./components/login"; 
import Footer from "./components/footer";
import Pathway from "./components/pathway";

// Page imports
import Events from "./pages/events";
import Galleri from "./pages/galleri";
import Kontakt from "./pages/kontakt";
import Nyheder from "./pages/nyheder";

function App() {

  const [isParentInfoVisible, setParentInfoVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleParentInfo = () => {
    setParentInfoVisible(!isParentInfoVisible);
  };



  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  

  return (
    <Router>
      <>
        <Header onPdfClick={toggleParentInfo} onLoginClick={toggleLogin} />
        <Cover />
        <Info onLoginClick={toggleLogin} />
        <Walkingman src="/src/img/knight.png" alt="Walking Man" />

        <Routes>
          <Route path="/" element={<Pathway />} />
          <Route path="/events" element={<Events />} />
          <Route path="/galleri" element={<Galleri />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/nyheder" element={<Nyheder />} />
        </Routes>

        {isParentInfoVisible && <Parentinfo onClose={toggleParentInfo} />}
        {isLoginVisible && <Login onClose={toggleLogin} />}

        <Footer />
      </>
    </Router>
  );
}

export default App;
