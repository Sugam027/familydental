import React from 'react'
import CoverSection from './CoverSection'

const Contact = () => {
  const data = {
    name: 'contactpage',
    slogan: 'We help you to smile with confidence',
    descrip : 'We\'ll do our best to deliver the best possible healthcare and customer service to you!',
  }
  return (
    <>
      <CoverSection {...data} />
    </>
  )
}

export default Contact