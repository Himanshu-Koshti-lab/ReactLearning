import React, { use } from "react";
import "./App.css";
import { useState } from "react";

export default function MyButton() {
  let name = "Himanshu Koshti";

  const [clickCount, setClickCount] = useState(0);

  const user = {
    name: "Himanshu Koshti",
    exp: "5+",
    age: 27,
  };

  function showAlert() {
    setClickCount(clickCount + 1);
    alert("You clicked me..." + clickCount);
  }

  return (
    <>
      <button className="avatarButton"> My name is {user.name} </button>
      <p>
        Experience is {user.exp} and age is {user.age}
      </p>
      <button onClick={showAlert}>Dare Click me... {clickCount}</button>
    </>
  );
}
