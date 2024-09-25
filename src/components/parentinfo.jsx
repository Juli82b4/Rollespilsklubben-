import React from "react";
import { useNavigate } from "react-router-dom";
import "./Parentinfo.css";

const Parentinfo = ({ onClose }) => {
  const navigate = useNavigate();

  const handleAccept = () => {
    onClose();
    navigate("/parents-info");
  };

  return (
    <div className="parent-popup-overlay" onClick={onClose}>
      <div className="parent-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Info til forældre!</h3>
        <p>
          Rollespils klubben er kun tilegnet folk over 18 år eller som er
          ledsaget af en forældrer.
        </p>
        <button className="close-popup-btn" onClick={handleAccept}>
          Accepter
        </button>
      </div>
    </div>
  );
};

export default Parentinfo;
