import { useState } from "react";

import MyButton from "./MyButton";
import AdminCard from "./AdminCard";
import UserCard from "./UserCard";

function App() {
  const [count, setCount] = useState(0);

  let isAdmin = false;

  let showCard = <UserCard />;

  if (isAdmin) showCard = <AdminCard />;

  return (
    <div className="card">
      <p>Hello React {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click Here</button>
      <br />
      <MyButton />
      <br />
      {showCard}
    </div>
  );
}

export default App;
