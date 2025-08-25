import React, { use } from "react";
import "./App.css";

export default function MyButton() {
  let name = "Himanshu Koshti";

  const user = {
    name: "Himanshu Koshti",
    exp: "5+",
    age: 27,
  };

  function showAlert() {
    alert("You clicked me...");
  }

  return (
    <>
      <button className="avatarButton"> My name is {user.name} </button>
      <p>
        Experience is {user.exp} and age is {user.age}
      </p>
      <button onClick={showAlert}>Dare Click me...</button>
    </>
  );
}
