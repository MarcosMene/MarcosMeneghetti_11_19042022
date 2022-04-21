import React from "react";
import HomeGallery from "../components/HomeGallery";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <main className="main">
      <section className="container">
        <HomeSection />
        <HomeGallery />
      </section>
    </main>
  );
};

export default Home;
