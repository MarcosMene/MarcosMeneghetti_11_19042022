import React from "react";

import Carousel from "../components/Carousel";
import LogementDescription from "../components/LogementDescription";

const Logements = () => {
  return (
    <main className="main">
      <section className="container">
        <Carousel />
        <LogementDescription />
      </section>
    </main>
  );
};

export default Logements;
