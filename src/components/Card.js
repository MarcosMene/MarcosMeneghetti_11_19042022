import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ title, id, cover }) => {
  return (
    <NavLink to={`housing/${id}`}>
      <GalleryImageStyle>
        <img src={cover} alt={title} />
        <div className="gradient"></div>
        <p>{title}</p>
      </GalleryImageStyle>
    </NavLink>
  );
};

const NavLink = styled(Link)`
  width: 340px;
  height: 340px;
  margin: 0;
  padding: 0;
  margin-bottom: 45px;

  @media (max-width: 820px) {
    width: 335px;
    height: 335px;
  }

  @media (max-width: 485px) {
    width: 100%;
    height: 100%;
  }
`;

const GalleryImageStyle = styled.div`
  width: 340px;
  height: 340px;
  position: relative;

  &:hover .gradient {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(70%, rgba(255, 97, 97, 0)),
      to(rgba(139, 56, 56, 0.6))
    );
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0) 70%,
      rgba(139, 56, 56, 0.6)
    );
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 25px;
  }
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(20%, rgba(255, 97, 97, 0.2)),
      to(rgba(139, 56, 56, 0.8))
    );
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0.2) 20%,
      rgba(139, 56, 56, 0.8) 100%
    );
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 25px;
    z-index: 1;
  }

  p {
    position: absolute;
    font-size: 1.125rem;
    color: #fff;
    left: 20px;
    bottom: 23px;
    font-weight: 600;
    width: 90%;
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
  }
`;

export default Card;
