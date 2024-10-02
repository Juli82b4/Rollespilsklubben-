/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import walkingman from "../img/walkingman.png";
import walkingmanOpp from "../img/walkingman-opp.png";
import "./walkingman.css";

const Walkingman = () => {
  // Define the array of image sources
  const imageArr = [
    walkingman,
    walkingmanOpp,
  ];

  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const intervalId = setInterval(() => {
      const currentScrollPosition = window.scrollY;
      setAnimationFrame((prevFrame) => {
        const newFrame = currentScrollPosition > previousScrollPosition
          ? (prevFrame + 1) % imageArr.length
          : (prevFrame - 1 + imageArr.length) % imageArr.length;
        previousScrollPosition = currentScrollPosition;
        return newFrame;
      });
    }, 100); // Adjust the interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [imageArr.length]);

  return (
    <>
      <img
        src={imageArr[animationFrame]}
        alt="Walking Man"
        className="centered-image walk"
      />
    </>
  );
};

export default Walkingman;