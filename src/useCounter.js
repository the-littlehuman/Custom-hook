import { useReducer } from "react";

const DEFAULT_STATE = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    case "RESET":
      return DEFAULT_STATE;
    case "SET_VALUE":
      return action.value;
    default:
      return state;
  }
};

export default function useCounter() {
  const [count, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const setValue = (value) => {
    dispatch({ type: "SET_VALUE", value });
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}
