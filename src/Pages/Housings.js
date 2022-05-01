import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { UseFetch } from "../tools/Services";
import Carousel from "../components/Carousel";
import HousingDescription from "../components/HousingDescription";
import "../styles/Housings.css";
import styled from "styled-components";

const Housings = () => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data.filter((data) => data.id === urlParams.id);

  if (housingData === []) {
    console.log("vide");
    return <Navigate to="/error" />;
  }

  return (
    <MainStyle className="main main-Housings">
      {housingData.map((location, index) => (
        <section className="container" key={index}>
          <Carousel key="carousel" />
          <HousingDescription
            key={location.title}
            title={location.title}
            location={location.location}
          />
        </section>
      ))}
    </MainStyle>
  );
};

const MainStyle = styled.main`
  margin-bottom: 100px;
`;

export default Housings;
