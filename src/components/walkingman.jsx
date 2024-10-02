import React, { useEffect, useState } from "react";
import walkingman from "../img/walkingman.png";
import walkingmanOpp from "../img/walkingman-opp.png";
import "./walkingman.css";

const Walkingman = () => {
  const [animationFrame, setAnimationFrame] = useState(0);
  const imageArr = [walkingman, walkingmanOpp];

  useEffect(() => {
    let intervalId;
    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        if (intervalId) {
          clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
          setAnimationFrame((prevFrame) => (prevFrame === 0 ? 1 : 0));
        }, 100);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

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
