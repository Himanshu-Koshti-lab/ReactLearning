import React, { useReducer } from "react";

const ACTION = {
  INCREASE: "add",
  DECREASE: "sub",
};

export default function CardReduser() {
  const [state, doOperation] = useReducer(operation, {
    count: 0,
    operationPerform: 0,
  });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Total Operations : {state.operationPerform}</h2>
      <button onClick={() => doOperation({ type: ACTION.INCREASE })}>+</button>
      <button onClick={() => doOperation({ type: ACTION.DECREASE })}>-</button>
      <button onClick={() => doOperation({ type: "reset" })}>Reset</button>
    </div>
  );
}

function operation(state, action) {
  switch (action.type) {
    case ACTION.INCREASE:
      return {
        count: state.count + 1,
        operationPerform: state.operationPerform + 1,
      };
    case ACTION.DECREASE:
      return {
        count: state.count - 1,
        operationPerform: state.operationPerform + 1,
      };
    case "reset":
      return { count: 0, operationPerform: 0 };
    default:
      throw new Error("Unknown action type");
  }
}
