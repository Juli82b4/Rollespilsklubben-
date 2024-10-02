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
import MemberInfo from "./pages/memberInfo";
import ParentsInfo from "./pages/parentsinfo";
import Loginpage from "./pages/login";

function App() {
  const [isParentInfoVisible, setParentInfoVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const pathname = window.location.pathname;
  const isRootPage = pathname === "/" || pathname === "";

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
        {isRootPage && <Cover />}
        {isRootPage && <Info onLoginClick={toggleLogin} />}
        {isRootPage && <Walkingman />}

        <Routes>
          <Route path="/" element={<Pathway />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/galleri" element={<Galleri />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/nyheder" element={<Nyheder />} />
          <Route path="/member-info" element={<MemberInfo />} />
          <Route path="/parents-info" element={<ParentsInfo />} />
        </Routes>

        {isParentInfoVisible && <Parentinfo onClose={toggleParentInfo} />}
        {isLoginVisible && <Login onClose={toggleLogin} />}

        <Footer />
      </>
    </Router>
  );
}

export default App;
