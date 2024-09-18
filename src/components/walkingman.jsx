/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./walkingman.css";

const Walkingman = ({ src, alt }) => {
  return <img src={src} alt={alt} className="centered-image" />;
};

export default Walkingman;
