import React from "react";
import styled from "styled-components";
const HomeSection = ({ text, classname }) => {
  return (
    <SectionStyle className={classname}>
      <h1>{text}</h1>
    </SectionStyle>
  );
};

const SectionStyle = styled.div`
  & {
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
    /* height: 220px; */

    & h1 {
      position: relative;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
      z-index: 1;
    }

    /*MEDIA QUERIES */
    @media (max-width: 820px) {
      & {
        padding: 30px 10px;
        /* height: 180px; */
      }

      & h1 {
        font-size: 2.5rem;
        text-align: left;
      }
    }

    @media (max-width: 576px) {
      & {
        padding: 25px 10px;
        /* height: 150px; */
      }

      & h1 {
        font-size: 2rem;
      }
    }

    @media (max-width: 485px) {
      & {
        padding: 20px 80px 20px 20px;
        margin: 10px 0;
        /* max-height: 110px; */
      }

      & h1 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 320px) {
      & {
        padding: 20px 20px 20px 20px;
      }
    }
  }

  .section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(../assets/chezvous.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
    border-radius: 25px;

    /*MEDIA QUERIES */
    @media (max-width: 576px) {
      .section::before {
        border-radius: 2px;
      }
    }
  }

  /* .apropos-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(../assets/apropos.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
    border-radius: 25px;
  } */
`;

export default HomeSection;
