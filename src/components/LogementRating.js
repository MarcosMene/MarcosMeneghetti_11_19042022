import React from "react";
import Seller from "../assets/seller.jpg";
import FullStar from "../assets/full-star.png";
import EmptyStar from "../assets/empty-star.png";
import styled from "styled-components";

const LogementRating = () => {
  return (
    <LogRating>
      <LogSeller>
        <p>Alexandre Dumas</p>
        <img src={Seller} alt="seller" />
      </LogSeller>

      <Stars>
        <img src={FullStar} alt="fullstar" />
        <img src={FullStar} alt="fullstar" />
        <img src={FullStar} alt="fullstar" />
        <img src={EmptyStar} alt="emptystar" />
        <img src={EmptyStar} alt="emptystar" />
      </Stars>
    </LogRating>
  );
};

const LogRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const LogSeller = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  img {
    border-radius: 100%;
    width: 65px;
    height: 65px;
  }

  p {
    width: 100px;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    text-align: end;
  }
`;

const Stars = styled.div`
  img {
    margin-left: 10px;
  }
`;
export default LogementRating;
