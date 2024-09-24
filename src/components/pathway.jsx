import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./pathway.css";

const Pathway = () => {
  return (
    <div className="container-background">
    <div className="pathway-container">
      <div className="signboard">
        <Link to="/events">
          <div className="signboard-one" />
        </Link>

        <Link to="/galleri">
          <div className="signboard-two" />
        </Link>

        <Link to="/kontakt">
          <div className="signboard-three" />
        </Link>

        <Link to="/nyheder">
          <div className="signboard-four" />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Pathway;
