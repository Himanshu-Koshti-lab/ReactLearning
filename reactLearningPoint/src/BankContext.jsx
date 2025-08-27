import React, { createContext, useState } from "react";

// Create context
export const Bank = createContext();

//Provider
const BankContextProvider = ({ children }) => {
  const gold = 100;
  return (
    <Bank.Provider value={gold}>
      {children}
    </Bank.Provider>
  );
};

export default BankContextProvider;
