import React from "react";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

const TypeComponent = ({ type }) => {
  console.log(
    `[rendered] - [type: ${type} ] - [type component: value: ${type}]`
  );
  useWhatChanged([type], "type");

  return <h1>Derived State: {type}</h1>;
};

export default TypeComponent;
