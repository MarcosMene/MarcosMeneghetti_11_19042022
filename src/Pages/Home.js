import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";

import styled from "styled-components";
import homeImage from "../assets/chezvous.png";

const Home = () => {
  return (
    <main className="main">
      <SectionStyleHome className="container">
        <Section
          text={`Chez vous, partout et ailleurs`}
          classname={`section`}
        />
        <Gallery />
      </SectionStyleHome>
    </main>
  );
};

const SectionStyleHome = styled.div`
  .section {
    background-image: url(${homeImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    border-radius: 25px;
  }
`;

export default Home;
