import React, { useState } from "react";

export default function UseHooks() {
  const [counter, setCounter] = useState(0);
  const [textVal, setTextVal] = useState("User");


  const [details, setDetails] = useState({counter : 0, textVal: 'User'})

 function increaseCounter(){
    setDetails((prev) => ({
        ...prev,
        counter: prev.counter + 1,
    }))
 }


  function updateText(textValue){
    setDetails((prev) => ({
        ...prev,
        textVal: textValue,
    }))
 }

  return (
    <>
    <div>
        <h1>By Direct values</h1>
            <input
        type="text"
        onChange={(e) => setTextVal(e.target.value)}
        placeholder={textVal}
      ></input>
      <h2>
        {" "}
        {textVal} has clicked {counter} times.
      </h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    
    </div>
    <h1>By Using Objects</h1>
      <input
        type="text"
        onChange={(e) => updateText(e.target.value)}
        placeholder={details.textVal}
      ></input>
      <h2>
        {" "}
        {details.textVal} has clicked {details.counter} times.
      </h2>
      <button onClick={increaseCounter}>Increase</button>
    </>
  );
}
