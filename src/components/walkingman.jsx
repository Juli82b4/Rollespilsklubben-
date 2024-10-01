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
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setAnimationFrame((prevFrame) => {
        const newFrame = currentScrollPosition > previousScrollPosition
          ? (prevFrame + 1) % imageArr.length
          : (prevFrame - 1 + imageArr.length) % imageArr.length;
        previousScrollPosition = currentScrollPosition;
        return newFrame;
      });
    };

    let previousScrollPosition = window.scrollY;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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