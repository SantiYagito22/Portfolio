import React, { createContext, useState } from 'react';

export const CurrentIndexContext = createContext();

export const CurrentIndexProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <CurrentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </CurrentIndexContext.Provider>
  );
};