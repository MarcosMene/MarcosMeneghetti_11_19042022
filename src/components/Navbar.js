import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/LOGO.png";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <header className="header">
      <section className="container">
        <HeaderStyle>
          <NavLink style={navLinkStyles} to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
          <NavStyle>
            <NavLink style={navLinkStyles} to="/">
              Accueil
            </NavLink>
            <NavLink style={navLinkStyles} to="/about">
              A Propos
            </NavLink>
          </NavStyle>
        </HeaderStyle>
      </section>
    </header>
  );
};

const HeaderStyle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 0px;
  max-width: 1440px;
  width: 100%;
  margin-top: 10px;

  img {
    width: 200px;
  }

  @media (max-width: 820px) {
    img {
      width: 200px;
    }
    @media (max-width: 576px) {
      padding: 10px 0;
      img {
        width: 100px;
      }
    }
  }
`;

const NavStyle = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  a {
    margin-left: 40px;
    text-decoration: none;
    color: #ff6060;
    font-weight: 500;
    font-size: 1.3rem;
  }

  @media (max-width: 820px) {
    a {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 576px) {
    a {
      font-size: 1.3rem;
      margin-left: 25px;
    }
  }
  @media (max-width: 485px) {
    a {
      font-size: 1rem;
      margin-left: 15px;
    }
  }
`;

export default Navbar;
