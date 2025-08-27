import { useContext } from "react";
import BankContextProvider, { Bank } from "./BankContext";

export default function GolduseContext() {
  return (
    <>
      <BankContextProvider>
        <div>//Gold will share in all component
          <House />
          <House />
          <House />
          <Furniture />
        </div>
      </BankContextProvider>
      <Furniture />//Not in this one
    </>
  );
}

function House() {
  const gold = useContext(Bank);
  return <h2>Chilled Child have : {gold}</h2>;
}

function Furniture() {
  const gold = useContext(Bank);
  return <h2>Chilled Child on Furniture : {gold}</h2>;
}
