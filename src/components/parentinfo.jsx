import React from "react";
import "./Parentinfo.css";

const Parentinfo = ({ onClose }) => {
  return (
    <div className="parent-popup-overlay" onClick={onClose}>
      <div className="parent-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Info til forældre!</h3>
        <p>
          Rollespils klubben er kun tilegnet folk over 18 år eller som er
          ledsaget af en forældrer.
        </p>
        {/* Close button inside the popup */}
        <button className="close-popup-btn" onClick={onClose}>
          Accepter
        </button>
      </div>
    </div>
  );
};

export default Parentinfo;
