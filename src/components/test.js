import React from "react";
import useFetch from "../tools/Fetch";

const test = () => {
  const { data } = useFetch;

  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <p>{item.id}</p>)}
    </div>
  );
};

export default test;
