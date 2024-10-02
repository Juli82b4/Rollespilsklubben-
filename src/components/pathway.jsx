import React from "react";
import "./pathway.css";

const Pathway = () => {
  return (
    <div className="container-background">
      <div className="pathway-container">
        <div className="signboard">
          <a href="/events">
            <div className="signboard-one" />
          </a>

          <a href="/nyheder">
            <div className="signboard-two" />
          </a>

          <a href="/kontakt">
            <div className="signboard-three" />
          </a>

          <a href="/galleri">
            <div className="signboard-four" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pathway;
