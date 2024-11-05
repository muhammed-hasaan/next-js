// context/DropdownContext.js
"use client";

import { createContext, useState, useContext } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ dropdownOpen, setDropdownOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
};
