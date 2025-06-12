'use client';

import React from 'react';
import { DynamicBgProvider, useDynamicBg } from '@/app/context/DynamicBgContext';
import CustomCursor from '@/app/ui/CustomCursor';
import Div from '@/app/ui/Div';
import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';

const DynamicBackground = () => {
  const { background } = useDynamicBg();
  if (!background) return null;

  return (
    <Div 
      className="cs-fixed_bg cs-dynamic_bg" 
      style={{
        backgroundImage: `url(${background})`
      }} 
    />
  );
};

const AppWrapper = ({ children }) => {
  return (
    <DynamicBgProvider>
      <DynamicBackground />
      <Header />
      <CustomCursor />
      <Div className="cs-main_content_wrap">{children}</Div>
      <Footer />
    </DynamicBgProvider>
  );
};

export default AppWrapper; 