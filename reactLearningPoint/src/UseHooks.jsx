import React, { useState } from "react";

export default function UseHooks() {
  const [counter, setCounter] = useState(0);
  const [textVal, setTextVal] = useState("User");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTextVal(e.target.value)}
        placeholder={textVal}
      ></input>
      <h1>
        {" "}
        {textVal} has clicked {counter} times.
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
  );
}
