/* eslint-disable no-unused-vars */
import Rgiteact, { useState } from "react";
import Header from "./components/Header";
import Walkingman from "./components/Walkingman";
import Cover from "./components/Cover";
import Parentinfo from "./components/Parentinfo";
import Pathway from "./components/pathway";
import "./App.css";

function App() {
  const [isParentInfoVisible, setParentInfoVisible] = useState(false);

  const toggleParentInfo = () => {
    setParentInfoVisible(!isParentInfoVisible);
  };

  return (
    <>
      <Header onPdfClick={toggleParentInfo} />
      <Cover />
      <Walkingman src="/src/img/knight.png" alt="Walking Man" />
      <Pathway />
      {isParentInfoVisible && <Parentinfo onClose={toggleParentInfo} />}
    </>
  );
}

export default App;
