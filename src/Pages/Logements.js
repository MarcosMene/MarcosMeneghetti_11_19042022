import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { UseFetch } from "../tools/Services";
import Carousel from "../components/Carousel";
import LogementDescription from "../components/LogementDescription";

const Logements = () => {
  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data?.filter((data) => data.id === urlParams.id);

 

  if (housingData === null) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="main main-logements">
      {housingData.map((location, index) => (
        <section className="container" key={index}>
          <Carousel key="carousel" />
          <LogementDescription
            key={location.title}
            title={location.title}
            location={location.location}
          />
        </section>
      ))}
    </main>
  );
};

export default Logements;
