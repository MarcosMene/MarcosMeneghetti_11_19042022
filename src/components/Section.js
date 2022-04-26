import React from "react";

const HomeSection = ({ text, classname }) => {
  return (
    <div className={classname}>
      <h1>{text}</h1>
    </div>
  );
};

export default HomeSection;
