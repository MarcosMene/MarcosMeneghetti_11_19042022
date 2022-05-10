import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import { AboutData } from "../aboutdata/AboutData";
import apropos from "../assets/apropos.png";

const Apropos = () => {
  const [active, setActive] = useState("");

  return (
    <main className="main">
      <Teststyle className="container">
        <Section classname={`apropos-card`} />

        <Accordions>
          {AboutData.map((phrase, index) => (
            <Accordion
              key={`${index}-${phrase.title}`}
              title={phrase.title}
              active={active}
              setActive={setActive}
              text={phrase.text}
            />
          ))}
        </Accordions>
      </Teststyle>
    </main>
  );
};

const Teststyle = styled.div`
  .apropos-card {
    position: relative;
    margin: 50px 0;
    color: #fff;
    padding: 40px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 220px;
    background-image: url(${apropos});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
    border-radius: 25px;
    height: 223px;

    @media (max-width: 576px) {
      border-radius: 10px;
    }
  }
`;

const Accordions = styled.div`
  margin-bottom: 150px;
`;

export default Apropos;
