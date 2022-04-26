import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const page404 = () => {
  const LinkStyle = () => {
    return {
      textDecoration: "none",
      color: "#FF6060",
      marginTop: "50px",
      fontSize: "1.25rem",
      marginBottom: "35px",
    };
  };

  return (
    <Container404>
      <div className="body-404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <NavLink style={LinkStyle} to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </Container404>
  );
};

const Container404 = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  height: 90vh;

  h1 {
    font-size: 18rem;
  }
  p {
    font-size: 2.25rem;
  }
`;

export default page404;
