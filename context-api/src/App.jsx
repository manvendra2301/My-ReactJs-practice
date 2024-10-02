import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { counterContextvar } from "./context/Context";

function App() {
  const counterState = useContext(counterContextvar);
  console.log("context", counterState);
  return (
    <>
      counter is {counterState.count}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
