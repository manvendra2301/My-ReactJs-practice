import React from "react";
import { counterContextvar } from "../context/Context";
import { useContext } from "react";

function Counter() {
  const CounterContext = useContext(counterContextvar);
  return (
    <div>
      <button onClick={() => CounterContext.setCount(CounterContext.count + 1)}>
        Increment
      </button>
      <button onClick={() => CounterContext.setCount(CounterContext.count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
