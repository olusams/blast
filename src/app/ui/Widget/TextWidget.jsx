import React from 'react'
import Div from '@/app/ui/Div'
import Image from 'next/image'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <Image src={logoSrc} alt={logoAlt} width={150} height={50} />
      <p>{text}</p>
    </Div>
  )
}
