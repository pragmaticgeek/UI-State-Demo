import React from "react";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

const FishComponent = ({ onClick, fish, type }) => {
  useWhatChanged([onClick, fish, type], "onClick,fish,type");
  console.log(
    `[rendered] - [type: ${type} ] - [fish component: value: ${fish}]`
  );

  return (
    <div>
      Update Fish: <button onClick={onClick}>+1</button> ({fish})
    </div>
  );
};

export default FishComponent;
