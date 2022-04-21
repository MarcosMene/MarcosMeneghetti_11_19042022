import React from "react";
import Carouselimage from "../assets/carousel.png";
import styled from "styled-components";
import LeftArrow from "../assets/arrow-left.png";
import RightArrow from "../assets/arrow-right.png";

const Carousel = () => {
  return (
    <CarouselContainer>
      <div className="carousel">
        <img src={Carouselimage} alt="" />
      </div>
      <div>
        <img className="arrow-left" src={LeftArrow} alt="" />
        <img className="arrow-right" src={RightArrow} alt="" />
      </div>
      <div className="pagination">1/4</div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  img {
    width: 100%;
    border-radius: 25px;
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 165px;
    cursor: pointer;
    width: 100px;
  }

  .arrow-left {
    left: 0;
  }
  .arrow-right {
    right: 0;
  }

  .pagination {
    position: absolute;
    bottom: 33px;
    left: 49%;
    font-size: 1.125rem;
    font-weight: 500;
    color: white;
  }
`;

export default Carousel;
