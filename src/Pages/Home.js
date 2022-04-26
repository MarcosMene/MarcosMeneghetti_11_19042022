import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";

const Home = () => {
  return (
    <main className="main">
      <section className="container">
        <Section
          text={`Chez vous, partout et ailleurs`}
          classname={`section`}
        />
        <Gallery />
      </section>
    </main>
  );
};

export default Home;
