import React from "react";
import UpArrow from "../assets/VectorUp.png";
import DownArrow from "../assets/VectorDown.png";
import "../styles/accordion.css";
import styled from "styled-components";

function Accordion({ title, active, setActive, text, police }) {
  return (
    <AccordionStyle className="accordion">
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
    </AccordionStyle>
  );
}

const AccordionStyle = styled.div`
  & {
    max-width: 1023px;
    margin: 30px auto;
    color: #fff;

    @media (max-width: 768px) {
      & {
        min-width: 100%;
      }
    }

    @media (max-width: 576px) {
      & {
        min-width: 100%;
      }

      .accordingHeading h3 {
        font-size: 1.2rem;
      }

      .accordingContent div {
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    @media (max-width: 485px) {
      .accordingHeading h3 {
        font-size: 0.8rem;
      }

      .accordingContent div {
        font-size: 0.75rem;
        line-height: 1.6;
      }
    }
  }

  .accordion-text.large {
    font-size: 1.5rem;
    line-height: 1.6;
    color: #ff6060;
    width: 100%;
    margin: 25px 0;
  }

  .accordingHeading {
    background: #ff6060;
    padding: 14px 0;
    border-radius: 5px;
  }

  .accordingHeading .according-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 20px;
  }

  .accordingHeading h3 {
    letter-spacing: 1.2px;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .accordingHeading span {
    cursor: pointer;
  }

  .accordingContent {
    max-height: 0;
    opacity: 0;
    background: #f6f6f6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-transition: all ease-in-out;
    transition: all ease-in-out;
    border-bottom-right-radius: 15px;
  }

  .accordingContent div {
    font-size: 1.125rem;
    line-height: 1.6;
    padding: 5px 20px;
    color: #ff6060;
    width: 100%;
    margin: 25px 0;
  }

  .accordingContent.largePolice div {
    font-size: 1.5rem;
    line-height: 1.6;
    padding: 5px 20px;
    color: #ff6060;
    width: 100%;
    margin: 25px 0;
  }

  .accordingContent.show {
    max-height: 800px;
    opacity: 1;
  }
`;

export default Accordion;
