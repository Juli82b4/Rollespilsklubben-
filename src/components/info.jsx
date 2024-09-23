import React from "react";
import "./info.css";

const Info = ({ onLoginClick }) => {
  return (
    <div className="info">
      <h1>Bliv medlem af Danmarks bedste rollespilsforening</h1>
      <h2>
        Rollespil handler nemlig om at lege, og gennem legen lære at forstå og
        begejstre hinanden. Om end det er rum-pirater, sump-orker eller
        gymnasie-elever det handler om, så er der altid mulighed for at lære
        noget nyt. Da vi begyndte i 2004 var vi en håndfuld venner. Nu er vi
        omkring 1000 medlemmer. De er kommet til fordi vi gør tingene på en
        ganske særlig måde.
      </h2>
      <a className="signup" href="#" onClick={onLoginClick}>
        Bliv Medlem
      </a>
    </div>
  );
};

export default Info;
