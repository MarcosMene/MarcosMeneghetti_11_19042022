import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  max-width: 1440px;
  width: 100%;
  margin-top: 10px;

  img {
    width: 200px;
  }
`;

const NavStyle = styled.nav`
  display: flex;
  width: 200px;
  justify-content: space-between;

  a {
    margin-left: 16px;
    text-decoration: none;
    color: #ff6060;
    font-weight: 500;
  }
`;

export default Navbar;
