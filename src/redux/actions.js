export const fishIncrement = (number) => {
  return {
    type: "FISH_INCREASE",
    payload: number,
  };
};

export const hamsterIncrement = (number) => {
  return {
    type: "HAMSTER_INCREASE",
    payload: number,
  };
};
