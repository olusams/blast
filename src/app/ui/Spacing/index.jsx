import React from 'react';
import Div from '@ui/Div';

export default function Spacing({ lg, md }) {
  return <Div className={`cs-height_${lg} cs-height_lg_${md}`}></Div>;
}
