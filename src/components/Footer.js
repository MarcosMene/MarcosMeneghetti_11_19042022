import React from "react";
import Logo from "../assets/LOGO-footer.png";
import styled from "styled-components";

const footer = () => {
  return (
    <Footer>
      <img src={Logo} alt="logo" />
      <p>&copy; 2022 Kasa. All rights reserved</p>
    </Footer>
  );
};

const Footer = styled.div`
  width: 100vw;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  margin: auto;
  height: 209px;

  img {
    margin: 10px 0 30px;

    p {
      font-size: 1.5rem;
    }
  }
`;

export default footer;
