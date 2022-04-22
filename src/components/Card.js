import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ title, id, cover }) => {
  return (
    <Link to={`housing/${id}`}>
      <GalleryImageStyle>
        <img src={cover} alt="" />
        <div className="gradient"></div>
        <p>{title}</p>
      </GalleryImageStyle>
    </Link>
  );
};

const GalleryImageStyle = styled.div`
  width: 340px;
  height: 340px;
  margin: 25px 10px 25px 10px;
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
    background: rgb(255, 97, 97);
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0.2),
      rgba(139, 56, 56, 0.2)
    );
    border-radius: 25px;
  }

  &:hover .gradient {
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0),
      rgba(139, 56, 56, 0)
    );
  }

  p {
    position: absolute;
    font-size: 1.125rem;
    color: #fff;
    left: 20px;
    bottom: 23px;
    font-weight: 500;
    width: 90%;
  }
`;

export default Card;
