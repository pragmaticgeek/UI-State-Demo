import { useWhatChanged } from "@simbathesailor/use-what-changed";
import React, { useCallback, useMemo, useReducer } from "react";
import FishComponent from "../common/FishComponent";
import HamsterComponent from "../common/HamsterComponent";
import SumComponent from "../common/SumComponent";
import TypeComponent from "../common/TypeComponent";

const actions = {
  FISH_INCREMENT: "FISH_INCREMENT",
  HAMSTERS_INCREMENT: "HAMSTERS_INCREMENT",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.HAMSTERS_INCREMENT:
      return { ...state, hamsters: state.hamsters + 1 };
    case actions.FISH_INCREMENT:
      return { ...state, fish: state.fish + 1 };
    default:
      return state;
  }
};

const UseReducerComponent = ({ initValues }) => {
  const [uiState, dispatch] = useReducer(reducer, initValues);
  const sum = useMemo(
    () => uiState?.fish + uiState?.hamsters,
    [uiState.fish, uiState.hamsters]
  );
  const STATE_TYPE = "React useReducer";

  const incrementFish = useCallback(() => {
    dispatch({ type: actions.FISH_INCREMENT });
  }, [dispatch]);
  const incrementHamsters = useCallback(() => {
    dispatch({ type: actions.HAMSTERS_INCREMENT });
  }, [dispatch]);

  useWhatChanged(
    [uiState, uiState.hamsters, uiState.fish, STATE_TYPE, sum],
    "uiState,uiState.hamsters,uiState.fish,STATE_TYPE,sum"
  );

  return (
    <div>
      <TypeComponent type={STATE_TYPE} />
      <SumComponent sum={sum} type={STATE_TYPE} />
      <FishComponent
        fish={uiState.fish}
        onClick={incrementFish}
        type={STATE_TYPE}
      />
      <br />
      <HamsterComponent
        hamsters={uiState.hamsters}
        onClick={incrementHamsters}
        type={STATE_TYPE}
      />
    </div>
  );
};

export default UseReducerComponent;
