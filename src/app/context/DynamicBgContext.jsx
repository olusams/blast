'use client';

import React, { createContext, useContext, useState } from 'react';

const DynamicBgContext = createContext();

export const useDynamicBg = () => {
  const context = useContext(DynamicBgContext);
  if (!context) {
    throw new Error('useDynamicBg must be used within a DynamicBgProvider');
  }
  return context;
};

export const DynamicBgProvider = ({ children }) => {
  const [background, setBackground] = useState(null);

  const value = {
    background,
    setBackground,
  };

  return (
    <DynamicBgContext.Provider value={value}>
      {children}
    </DynamicBgContext.Provider>
  );
}; 