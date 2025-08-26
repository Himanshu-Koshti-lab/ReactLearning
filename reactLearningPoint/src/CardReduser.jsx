import React, { useReducer } from 'react'

export default function CardReduser() {

    const [state , doOperation] = useReducer(operation, {count : 0, operationPerform : 0});

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Total Operations : {state.operationPerform}</h2>
      <button onClick={() => doOperation({ type: "add" })}>+</button>
      <button onClick={() => doOperation({ type: "sub" })}>-</button>
      <button onClick={() => doOperation({ type: "reset" })}>Reset</button>
    </div>
  )
}

function operation(state, action){
    switch (action.type){
        case "add" :
            return { count: state.count + 1,
                operationPerform: state.operationPerform + 1
             };
        case "sub" :
            return { count: state.count - 1 ,
                operationPerform: state.operationPerform + 1
            };
        case "reset" :
            return { count: 0 ,
                operationPerform: 0};
        default:
            throw new Error("Unknown action type");
    }
}
