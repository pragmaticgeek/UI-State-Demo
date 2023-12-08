import React, { useEffect, useRef } from "react";
import { create } from "zustand";
import TypeComponent from "../common/TypeComponent";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

// Zustand states
const usePetStore = create((set, get) => ({
  fish: 0,
  hamsters: 0,
  incrementFish: () => set((state) => ({ fish: state.fish + 1 })),
  incrementHamsters: () => set((state) => ({ hamsters: state.hamsters + 1 })),
  sum: () => get().hamsters + get().fish,
}));

const ZustandSumComponent = ({ type }) => {
  const [sum] = usePetStore(
    (s) => [s.sum],
    (oldSum, newSum) => oldSum === newSum
  );
  useWhatChanged([sum, type], "sum,type");
  console.log(`[rendered] - [type: ${type} ] - [sum component: value: ${sum}]`);

  return <h2>Sum: {sum()}</h2>;
};

const hamstersSelector = (state) => state.hamsters;
const incrementHamsterSelector = (state) => state.incrementHamsters;
const fishSelector = (state) => state.fish;
const incrementFishSelector = (state) => state.incrementFish;

const ZustandHamsterComponent = ({ type }) => {
  const hamsters = usePetStore(hamstersSelector);
  const increment = usePetStore(incrementHamsterSelector);

  useWhatChanged([increment, hamsters, type], "increment,hamsters,type");
  console.log(
    `[rendered] - [type: ${type} ] - [hamsters component: value: ${hamsters}]`
  );

  return (
    <div>
      Update Hamsters: <button onClick={increment}>+1</button> ({hamsters})
    </div>
  );
};

const ZustandFishComponent = ({ type }) => {
  const fish = usePetStore(fishSelector);
  const increment = usePetStore(incrementFishSelector);

  useWhatChanged([increment, fish, type], "increment,fish,type");
  console.log(
    `[rendered] - [type: ${type} ] - [fish component: value: ${fish}]`
  );

  return (
    <div>
      Update Fish: <button onClick={increment}>+1</button> ({fish})
    </div>
  );
};

const ZustandComponent = () => {
  // by zustand
  const STATE_TYPE = "Zustand";

  console.log("Render - ZustandComponent");
  return (
    <div>
      <TypeComponent type={STATE_TYPE} />
      <ZustandSumComponent type={STATE_TYPE} />
      <ZustandFishComponent type={STATE_TYPE} />
      <br />
      <ZustandHamsterComponent type={STATE_TYPE} />
    </div>
  );
};

export default ZustandComponent;
