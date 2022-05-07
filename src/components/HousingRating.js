import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { UseFetch } from "../tools/Services";
import styled from "styled-components";
import fullStar from "../assets/full-star.png";
import emptyStar from "../assets/empty-star.png";

const LogementRating = ({ sellerName, sellerImage }) => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data.filter((data) => data.id === urlParams.id);

  if (housingData === []) {
    return <Navigate to="/error" />;
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
              <img src={emptyStar} alt="empty-star" key={`${index}-${stars}`} />
            ) : (
              <img src={fullStar} alt="full-star" key={`${index}-${stars}`} />
            )
          )
        )}
      </Stars>
    </LogRating>
  );
};

const LogRating = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogSeller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
  width: 210px;

  img {
    border-radius: 100%;
    width: 65px;
    height: 65px;
  }

  p {
    width: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 10px;
    text-align: end;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    width: 160px;
    padding: 0;
    margin: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px;

    p {
      font-size: 1rem;
    }
  }
`;

const Stars = styled.div`
  img {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    img {
      width: 25px;
      margin: 0;
      margin-right: 5px;
    }
  }
  @media (max-width: 485px) {
    img {
      width: 18px;
    }
  }
`;
export default LogementRating;
