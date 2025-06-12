'use client';
import React, { createContext, useState, useContext } from 'react';

const DynamicBgContext = createContext();

export const useDynamicBg = () => useContext(DynamicBgContext);

export const DynamicBgProvider = ({ children }) => {
  const [background, setBackground] = useState('');
  const [heroImage, setHeroImage] = useState('');

  const value = {
    background,
    setBackground,
    heroImage,
    setHeroImage,
  };

  return (
    <DynamicBgContext.Provider value={value}>
      {children}
    </DynamicBgContext.Provider>
  );
}; 