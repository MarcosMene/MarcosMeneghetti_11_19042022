import React from "react";
import { useParams } from "react-router-dom";
import { UseFetch } from "../tools/Services";
import Carousel from "../components/Carousel";
import HousingDescription from "../components/HousingDescription";
import Page404 from "../Pages/Page404";

import styled from "styled-components";

const Housings = () => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data.filter((data) => data.id === urlParams.id);

  if (housingData[0] !== undefined) {
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
  } else {
    return (
      <main>
        <Page404 />
      </main>
    );
  }
};

const MainStyle = styled.main`
  margin-bottom: 100px;
`;

export default Housings;
