import React from "react";
import { UseFetch } from "../tools/Services";
import Card from "./Card";
import styled from "styled-components";

const Gallery = () => {
  const { data } = UseFetch("/data.json");

  return (
    <GallerySectionStyle>
      {data &&
        data.map((location, index) => (
          <Card
            key={`${location.title}-${index}`}
            title={location.title}
            id={location.id}
            cover={location.cover}
          />
        ))}
    </GallerySectionStyle>
  );
};

const GallerySectionStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  padding: 56px 0;
  background-color: #f6f6f6;
  border-radius: 25px;
  grid-gap: 0.2rem;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    background-color: transparent;
  }
`;

export default Gallery;
