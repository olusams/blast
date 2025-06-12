'use client'
import React from 'react';

export default function Map({ center }) {
  const latitude = center?.lat || 53.79193;
  const longitude = center?.lng || -1.59918;
  
  return (
    <iframe 
      src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      height="100%" 
      width="100%" 
      title="Google Map"
      allowFullScreen="" 
      loading="lazy"
    />
  );
} 