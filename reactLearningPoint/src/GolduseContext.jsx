import { createContext, useContext, useState } from "react";

export default function GolduseContext() {
  return (
    <Village>
      <House />
      <House />
      <House />
    </Village>
  );
}

const Bank = createContext();

function Village({ children }) {
  const [gold, setGold] = useState("💰 100 ");

  return <Bank.Provider value={gold}>{children}</Bank.Provider>;
}

function House() {
  const myGold = useContext(Bank);
  return <h2>Chilled Child have :  {myGold}</h2>;
}