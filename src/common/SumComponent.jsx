import { useWhatChanged } from "@simbathesailor/use-what-changed";
import React from "react";

const SumComponent = ({ sum, type }) => {
  useWhatChanged([sum, type], "sum,type");
  console.log(`[rendered] - [type: ${type} ] - [sum component: value: ${sum}]`);

  return <h2>Sum: {sum}</h2>;
};

export default SumComponent;
