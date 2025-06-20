'use client';
import React, { createContext, useState, useContext } from 'react';

const DynamicBgContext = createContext(null);

export const useDynamicBg = () => {
  const context = useContext(DynamicBgContext);
  if (!context) {
    throw new Error('useDynamicBg must be used within a DynamicBgProvider');
  }
  return context;
};

export const DynamicBgProvider = ({ children }) => {
  const [background, setBackground] = useState('/images/hero_bg.jpeg');
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