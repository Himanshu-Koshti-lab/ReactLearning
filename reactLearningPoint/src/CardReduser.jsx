import React, { useEffect, useReducer, useRef } from "react";

const ACTION = {
  INCREASE: "add",
  DECREASE: "sub",
};

export default function CardReduser() {


  const [stateMeansCollOfObj, joMethodCallKrneUseHo] = useReducer(joMethodHai, {
//    Initial Values 
    count: 0,
    operationPerform: 0,
  });

  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1;
  });

  
  const increment  = () => joMethodCallKrneUseHo({ type: ACTION.INCREASE })
  const decrement  = () => joMethodCallKrneUseHo({ type: ACTION.DECREASE})

  return (
    <div>
      <h2>Count: {stateMeansCollOfObj.count}</h2>
      <h2>Total Operations : {count.current}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => joMethodCallKrneUseHo({ type: "reset" })}>Reset</button>
    </div>
  );
}

function joMethodHai(joCurrentStateHObjectKi, krnaKyaH) {
  switch (krnaKyaH.type) {
    case ACTION.INCREASE:
      return {
        count: joCurrentStateHObjectKi.count + 1,
        operationPerform: joCurrentStateHObjectKi.operationPerform + 1,
      };
    case ACTION.DECREASE:
      return {
        count: joCurrentStateHObjectKi.count - 1,
        operationPerform: joCurrentStateHObjectKi.operationPerform + 1,
      };
    case "reset":
      return { count: 0, operationPerform: 0 };
    default:
      throw new Error("Unknown action type");
  }
}
