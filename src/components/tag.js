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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
  padding: 15px;

  p {
    font-size: 0.85rem;
  }

  @media (max-width: 576px) {
    padding: 2px 4px;

    p {
      font-size: 0.625rem;
    }
  }
`;

export default Tag;
