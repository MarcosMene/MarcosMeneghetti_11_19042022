import React from "react";
import styled from "styled-components";

const Tag = ({ tagTitle }) => {
  return (
    <TagStyle>
      <p>{tagTitle}</p>
    </TagStyle>
  );
};

const TagStyle = styled.div`
  width: auto;
  max-width: 200px;
  height: 25px;
  background-color: #ff6060;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
  padding: 15px;
  margin-top: 10px;

  p {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    padding: 2px 10px;

    p {
      font-size: 0.725rem;
    }
  }
`;

export default Tag;
