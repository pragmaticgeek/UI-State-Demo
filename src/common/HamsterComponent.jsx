import React from "react";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

const HamsterComponent = ({ onClick, hamsters, type }) => {
  useWhatChanged([onClick, hamsters, type], "onClick,hamsters,type");
  console.log(
    `[rendered] - [type: ${type} ] - [hamster component: value: ${hamsters}]`
  );

  return (
    <div>
      Update Hamsters: <button onClick={onClick}>+1</button> ({hamsters})
    </div>
  );
};

export default HamsterComponent;
