'use client';

import { DynamicBgProvider, useDynamicBg } from '../context/DynamicBgContext';
import CustomCursor from '../ui/CustomCursor';
import Div from '../ui/Div';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

function DynamicBackground() {
  const { background } = useDynamicBg();
  if (!background) return null;

  return (
    <Div 
      className="cs-fixed_bg cs-dynamic_bg" 
      style={{
        backgroundImage: `url(${background})`
      }} 
    />
  )
}

export default function AppWrapper({ children }) {
  return (
    <DynamicBgProvider>
      <DynamicBackground />
      <Header />
      <CustomCursor />
      <Div className="cs-main_content_wrap">{children}</Div>
      <Footer />
    </DynamicBgProvider>
  );
} 