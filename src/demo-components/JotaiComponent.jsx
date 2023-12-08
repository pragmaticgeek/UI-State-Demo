import React, { useCallback } from "react";
import { atom, useAtom, useAtomValue } from "jotai";
import TypeComponent from "../common/TypeComponent";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

// Jotai states
const fishAtom = atom(0);
const hamsterAtom = atom(0);
const addOneJotai = (c) => c + 1;

const JotaiFishComponent = ({ type }) => {
  const [fishCount, setFishCount] = useAtom(fishAtom);

  const increment = useCallback(() => {
    setFishCount(addOneJotai);
  }, []);

  useWhatChanged([increment, fishCount, type], "increment,fishCount,type");
  console.log(
    `[rendered] - [type: ${type} ] - [fish component: value: ${fishCount}]`
  );

  return (
    <div>
      Update Fish: <button onClick={increment}>+1</button> ({fishCount})
    </div>
  );
};

const JotaiHamsterComponent = ({ type }) => {
  const [hamsterCount, setHamsterCount] = useAtom(hamsterAtom);

  const increment = useCallback(() => {
    setHamsterCount(addOneJotai);
  }, []);

  useWhatChanged(
    [increment, hamsterCount, type],
    "increment,hamsterCount,type"
  );
  console.log(
    `[rendered] - [type: ${type} ] - [hamster component: value: ${hamsterCount}]`
  );

  return (
    <div>
      Update Hamster: <button onClick={increment}>+1</button> ({hamsterCount})
    </div>
  );
};

const sumAtom = atom((get) => get(fishAtom) + get(hamsterAtom));

const JotaiSumComponent = ({ type }) => {
  const sum = useAtomValue(sumAtom);
  useWhatChanged([sum], "sum");
  console.log(`[rendered] - [type: ${type} ] - [sum component: value: ${sum}]`);

  return <h2>Sum: {sum}</h2>;
};

const JotComponent = () => {
  // by jotai
  const STATE_TYPE = "Jotai";

  return (
    <div>
      <TypeComponent type={STATE_TYPE} />
      <JotaiSumComponent type={STATE_TYPE} />
      <JotaiFishComponent type={STATE_TYPE} />
      <br />
      <JotaiHamsterComponent type={STATE_TYPE} />
    </div>
  );
};

export default JotComponent;
