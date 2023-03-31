import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <AppContext.Provider value={{ expandMenu, setExpandMenu }}>
      {children}
    </AppContext.Provider>
  );
};
