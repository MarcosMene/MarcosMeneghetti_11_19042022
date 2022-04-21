import React from "react";
import "../styles/generalstyle.css";
import UpArrow from "../assets/VectorUp.png";
import DownArrow from "../assets/VectorDown.png";

function Accordion({ title, active, setActive, text, police }) {
  return (
    <div className="accordion">
      <div className="accordingHeading">
        <div className="according-container">
          <h3>{title}</h3>
          <span
            onClick={() => {
              setActive(active === title ? "" : title);
            }}
          >
            {active === title ? (
              <img src={UpArrow} alt="uparrow" />
            ) : (
              <img src={DownArrow} alt="uparrow" />
            )}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + " accordingContent"}>
        <div className={police}>{text}</div>
      </div>
    </div>
  );
}

export default Accordion;
