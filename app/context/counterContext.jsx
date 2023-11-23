'use client';

import { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: action.payload + 1,
      };

    case "DECREMENT_COUNT":
      return {
        ...state,
        count: action.payload - 1,
      };
  }
};

export const CounterContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext)
