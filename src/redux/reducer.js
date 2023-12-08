import { combineReducers } from "redux";

const fishCounter = (state = 0, action) => {
  switch (action.type) {
    case "FISH_INCREASE":
      return state + action.payload || state + 1;
    default:
      return state;
  }
};

const hamsterCounter = (state = 0, action) => {
  switch (action.type) {
    case "HAMSTER_INCREASE":
      return state + action.payload || state + 1;
    default:
      return state;
  }
};

// This needs to combined into one single object
const reducers = combineReducers({
  fish: fishCounter,
  hamsters: hamsterCounter,
});

export default reducers;
