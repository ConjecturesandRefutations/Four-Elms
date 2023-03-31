import React, { createContext, useState } from 'react';

export const OpenContext = createContext();

export const OpenContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <OpenContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </OpenContext.Provider>
  );
};