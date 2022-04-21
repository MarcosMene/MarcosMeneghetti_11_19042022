import React from "react";
import styled from "styled-components";

const Tag = () => {
  return (
    <TagStyle>
      <p>tag-name</p>
    </TagStyle>
  );
};

const TagStyle = styled.div`
  width: 115px;
  height: 25px;
  background-color: #ff6060;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
`;

export default Tag;
