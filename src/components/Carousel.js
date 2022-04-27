import React from "react";
import { useState } from "react";
import styled from "styled-components";
import LeftArrow from "../assets/arrow-left.png";
import RightArrow from "../assets/arrow-right.png";
import { useParams, Navigate } from "react-router-dom";
import { UseFetch } from "../tools/Services";

const Carousel = (id) => {
  const [current, setCurrent] = useState(0);

  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data?.filter((data) => data.id === urlParams.id);

  const lengthArray = housingData.map((data) => data.pictures.length);

  if (housingData === null) {
    return <Navigate to="/*" />;
  }

  const nextSlide = () => {
    setCurrent(current === lengthArray - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lengthArray - 1 : current - 1);
  };

  return (
    <>
      {housingData &&
        housingData.map((location, index, id) => (
          <CarouselContainer key={`${index}-${location.id}`}>
            <div className="carousel">
              {location.pictures.map((picture, index) => (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="imageCarousel"
                      src={picture}
                      alt={location.title}
                      key={`${index}-${id}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <img
              className={lengthArray > 1 ? "arrow-left" : "hide"}
              src={LeftArrow}
              alt="left arrow"
              key={`${index}-${id}-arrow-left`}
              onClick={prevSlide}
            />

            <img
              className={lengthArray > 1 ? "arrow-right" : "hide"}
              src={RightArrow}
              alt="right arrow"
              key={`${index}-${id}-arrow-right`}
              onClick={nextSlide}
            />

            <div className="pagination">
              {current + 1}/{lengthArray}
            </div>
          </CarouselContainer>
        ))}
    </>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  margin-top: 20px;

  max-height: 400px;

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 40%;
    cursor: pointer;
    min-width: 20px;
    max-width: 5%;

    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .arrow-left {
    left: 10px;
  }
  .arrow-right {
    right: 10px;
  }

  .slide {
    opacity: 0;

    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transform: scale(1);
    transition-duration: 1s;

    .imageCarousel {
      width: 100%;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
    }
  }

  .pagination {
    position: absolute;
    bottom: 33px;
    left: 49%;
    font-size: 1.125rem;
    font-weight: 500;
    color: white;
  }

  .hide {
    display: none;
  }
`;

export default Carousel;
