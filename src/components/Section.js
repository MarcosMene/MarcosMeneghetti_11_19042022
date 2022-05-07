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
    height: 220px;

    & h1 {
      position: relative;
      font-weight: normal;
      text-align: center;
      font-size: 3rem;
    }

    /*MEDIA QUERIES */
    @media (max-width: 820px) {
      & {
        padding: 40px 10px;
        height: 150px;
        margin: 45px 0;
      }

      & h1 {
        font-size: 2.5rem;
        text-align: left;
      }
    }

    @media (max-width: 576px) {
      & {
        margin: 35px 0;
        padding: 35px 10px;
      }

      & h1 {
        font-size: 2rem;
      }
    }

    @media (max-width: 485px) {
      & {
        padding: 25px 120px 25px 10px;
        margin: 10px 0;
        height: 111px;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 375px) {
      & {
        padding: 25px 120px 25px 10px;
        margin: 10px 0;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 320px) {
      & {
        padding: 25px 60px 25px 10px;
        margin: 10px 0;
      }

      & h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default HomeSection;
