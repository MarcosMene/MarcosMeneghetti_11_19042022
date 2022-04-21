import React from "react";

import Carousel from "../components/Carousel";
import LogementDescription from "../components/LogementDescription";
import Test from "../components/test";

const Logements = () => {
  return (
    <main className="main">
      <section className="container">
        <Carousel />
        <LogementDescription />
        <Test />
      </section>
    </main>
  );
};

export default Logements;
