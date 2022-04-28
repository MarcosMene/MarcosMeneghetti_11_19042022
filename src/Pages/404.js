import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const page404 = () => {
  return (
    <Container404>
      <div className="body-404">
        <h1>404</h1>
        <p>
          <span>Oups! La page que</span> vous demandez n'existe pas.
        </p>
      </div>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
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
    font-size: 13.5rem;
  }
  p {
    font-size: 2.25rem;
  }

  a {
    text-decoration: none;
    color: #ff6060;
    margin-top: 50px;
    font-size: 1.25rem;
    margin-bottom: 35px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 12rem;
    }
    p {
      font-size: 2rem;

      margin: auto;
      display: flex;
      flex-direction: column;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      margin-bottom: 35px;
    }
  }
  @media (max-width: 576px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    height: 100vh;

    h1 {
      font-size: 9rem;
    }
    p {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      margin-bottom: 35px;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 5.1rem;
    }
    p {
      font-size: 1.125rem;
      margin: 0;
      padding: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 0.85rem;
      margin-bottom: 35px;
    }
  }
`;

export default page404;
