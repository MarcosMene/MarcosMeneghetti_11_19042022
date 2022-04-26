import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { UseFetch } from "../tools/Services";

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
  grid-template-columns: repeat(3, 33%);
  justify-items: center;
  padding: 56px 0;
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-bottom: 50px;
`;

export default Gallery;
