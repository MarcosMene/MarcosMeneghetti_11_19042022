import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { UseFetch } from "../tools/Services";
import FullStar from "../assets/full-star.png";
import EmptyStar from "../assets/empty-star.png";
import styled from "styled-components";

const LogementRating = ({ sellerName, sellerImage }) => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data?.filter((data) => data.id === urlParams.id);

  if (housingData === null) {
    return <Navigate to="/404" />;
  }
  const allStars = [1, 2, 3, 4, 5];
  return (
    <LogRating>
      <LogSeller>
        <p>{sellerName}</p>
        <img src={sellerImage} alt={sellerName} />
      </LogSeller>

      <Stars>
        {housingData.map((star, index) =>
          allStars.map((stars) =>
            star.rating <= stars - 1 ? (
              <img src={EmptyStar} alt="empty-star" key={`${index}-${stars}`} />
            ) : (
              <img src={FullStar} alt="full-star" />
            )
          )
        )}
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
