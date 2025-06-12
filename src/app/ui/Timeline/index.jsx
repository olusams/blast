import React from 'react';
import Div from '../Div';

export default function Timeline({ columnData }) {
  return (
    <Div className="cs-time_line cs-style1">
      <h3 className="cs-accent_color">{columnData.title}</h3>
      <p>{columnData.text}</p>
    </Div>
  );
}
