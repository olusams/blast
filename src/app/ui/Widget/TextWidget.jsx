import React from 'react'
import Div from '@/app/ui/Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <img src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  )
}
