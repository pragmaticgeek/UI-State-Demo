import { useWhatChanged } from "@simbathesailor/use-what-changed";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import FishComponent from "../common/FishComponent";
import HamsterComponent from "../common/HamsterComponent";
import SumComponent from "../common/SumComponent";
import TypeComponent from "../common/TypeComponent";

const UiStateContext = createContext();

const ContextComponent = () => {
  const {
    type,
    sum,
    handlers,
    state: { fish, hamsters },
  } = useContext(UiStateContext);

  useWhatChanged([hamsters, fish, type, sum], "hamsters,fish,type,sum");

  return (
    <div>
      <TypeComponent type={type} />
      <SumComponent sum={sum} type={type} />
      <FishComponent fish={fish} onClick={handlers.incrementFish} type={type} />
      <br />
      <HamsterComponent
        hamsters={hamsters}
        onClick={handlers.incrementHamster}
        type={type}
      />
    </div>
  );
};

const UseContextComponent = ({ initValues }) => {
  const [uiState, setUiState] = useState(initValues);

  const incrementHamster = useCallback(() => {
    setUiState({ ...uiState, hamsters: uiState.hamsters + 1 });
  }, [uiState]);

  const incrementFish = useCallback(() => {
    setUiState({ ...uiState, fish: uiState.fish + 1 });
  }, [uiState]);

  const sum = useMemo(
    () => uiState?.fish + uiState?.hamsters,
    [uiState?.fish, uiState?.hamsters]
  );

  const STATE_TYPE = "React useContext with useState";

  return (
    <UiStateContext.Provider
      value={{
        type: STATE_TYPE,
        sum: sum,
        state: uiState,
        handlers: { incrementFish, incrementHamster },
      }}
    >
      <ContextComponent />
    </UiStateContext.Provider>
  );
};

export default UseContextComponent;
