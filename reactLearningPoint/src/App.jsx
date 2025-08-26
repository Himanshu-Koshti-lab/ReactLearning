import { useState } from "react";

import MyButton from "./MyButton";
import AdminCard from "./AdminCard";
import UserCard from "./UserCard";
import Game from "./tictactoe";
import Square from "./tictactoe";
import Board from "./tictactoe";

function App() {
  const [count, setCount] = useState(0);

    const user = {
    name: "Himanshu Koshti",
    exp: "5+",
    age: 27,
  };

  let isAdmin = false;

  let showCard = <UserCard />;

  if (isAdmin) showCard = <AdminCard />;

  const [clickCount, setClickCount] = useState(0);

  function showAlert() {
    setClickCount(clickCount + 1);
  }

  return (
    <div className="card">
      {/* <button className="avatarButton"> My name is {user.name} </button>
      <p>
        Experience is {user.exp} and age is {user.age}
      </p>
      <p>Hello React <br /> App level counter {count} <br /> Parent + ChildLevel Counter {clickCount} </p>
      <button onClick={() => setCount((count) => count + 1)}>Click Here</button>
      <br />
      <MyButton count = {clickCount} functionPass={showAlert}/>
      <MyButton count = {clickCount} functionPass={showAlert}/>
      <br />
      {showCard} */}

      <Board />
    </div>
  );
}

export default App;
