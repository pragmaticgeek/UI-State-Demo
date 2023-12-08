import React, { useCallback } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import reducers from "../redux/reducer";
import TypeComponent from "../common/TypeComponent";
import { fishIncrement, hamsterIncrement } from "../redux/actions";
import { useWhatChanged } from "@simbathesailor/use-what-changed";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxFishComponent = ({ increment, type }) => {
  const fishCount = useSelector((state) => state.fish);

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

const ReduxHamsterComponent = ({ increment, type }) => {
  const hamsterCount = useSelector((state) => state.hamsters);

  useWhatChanged(
    [increment, hamsterCount, type],
    "increment,hamsterCount,type"
  );
  console.log(
    `[rendered] - [type: ${type} ] - [hamster component: value: ${hamsterCount}]`
  );

  return (
    <div>
      Update Hamsters: <button onClick={increment}>+1</button> ({hamsterCount})
    </div>
  );
};

const ReduxSumComponent = ({ type }) => {
  const sum = useSelector((state) => state.fish + state.hamsters);

  // useWhatChanged([sum, type], "sum,type");
  console.log(`[rendered] - [type: ${type} ] - [sum component: value: ${sum}]`);

  return <h2>Sum: {sum}</h2>;
};

export const ReduxComponentHOC = () => (
  <Provider store={store}>
    <ReduxComponent />
  </Provider>
);

export const ReduxComponent = () => {
  const dispatch = useDispatch();
  const incrementHamsters = useCallback(
    () => dispatch(hamsterIncrement()),
    [dispatch]
  );
  const incrementFish = useCallback(
    () => dispatch(fishIncrement()),
    [dispatch]
  );

  const STATE_TYPE = "Redux";
  return (
    <div>
      <TypeComponent type={STATE_TYPE} />
      <ReduxSumComponent type={STATE_TYPE} />
      <ReduxFishComponent increment={incrementFish} type={STATE_TYPE} />
      <br />
      <ReduxHamsterComponent increment={incrementHamsters} type={STATE_TYPE} />
    </div>
  );
};

export default ReduxComponentHOC;
