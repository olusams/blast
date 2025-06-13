import React from 'react'
import Div from '../Div'
import Image from 'next/image'

export default function AuthorWidget({src, name, description}) {
  return (
    <Div className="cs-author_card text-center">
      <Image src={src} alt="Author" width={100} height={100} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Div>
  )
}
