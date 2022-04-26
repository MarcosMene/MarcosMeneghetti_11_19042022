import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ title, id, cover }) => {
  return (
    <NavLink to={`housing/${id}`}>
      <GalleryImageStyle>
        <img src={cover} alt="" />
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
`;

const GalleryImageStyle = styled.div`
  width: 340px;
  height: 340px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
    /* background: rgb(255, 97, 97); */
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0.6) 20%,
      rgba(139, 56, 56, 0.9) 100%
    );
    transition: all 0.3s ease-in-out;
    border-radius: 25px;
  }

  &:hover .gradient {
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0) 70%,
      rgba(139, 56, 56, 0.6)
    );
  }

  p {
    position: absolute;
    font-size: 1.125rem;
    color: #fff;
    left: 20px;
    bottom: 23px;
    font-weight: 600;
    width: 90%;
  }
`;

export default Card;
