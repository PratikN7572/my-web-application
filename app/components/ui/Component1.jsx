"use client";

import React, { useContext, useState } from "react";
import Button from "./Button";
import Component2 from "./Component2";
import { CounterContext } from "@/app/context/counterContext";

const Component1 = () => {
  const {state, dispatch} = useContext(CounterContext)
  const increment = () => {
    dispatch({
      type: "INCREMENT_COUNT",
      payload: state.count
    })
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT_COUNT",
      payload: state.count
    })
  };

  return (
    <div>
      <Button onClick={() => increment()} label="increment +" />
      <br />
      {state.count}
      <br />
      <Button onClick={() => decrement()} label="decrement -" />
    </div>
  );
};

export default Component1;
