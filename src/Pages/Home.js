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
    background-image: url(${homeImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    border-radius: 25px;

    & h1 {
      position: relative;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      color: #fff;
    }

    /*MEDIA QUERIES */

    @media (max-width: 820px) {
      & {
        padding: 80px 10px;
        height: 180px;
        margin: 45px 0;
      }

      & h1 {
        font-size: 2.5rem;
        text-align: left;
      }
    }

    @media (max-width: 576px) {
      & {
        height: 110px;
        margin: 35px 0;
      }

      & h1 {
        font-size: 2rem;
      }
    }

    @media (max-width: 485px) {
      & {
        padding: 20px 120px 20px 10px;
        margin: 10px 0;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 375px) {
      & {
        padding: 10px 110px 10px 10px;
        margin: 10px 0;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 320px) {
      & {
        padding: 10px;
        margin: 10px 0;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Home;
