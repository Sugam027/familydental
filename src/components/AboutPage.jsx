import React from 'react'
import CoverSection from './CoverSection'

const About = () => {
  const data = {
      name: 'aboutpage',
      info: 'Get to Know Us',
      title: 'Hi! We’re Family Dental…',
      slogan: 'Local dentists who love to make you smile. Join our family of patients for life.',
      descrip : 'Let us brighten your smile!',
      }
  return (
    <>
      <CoverSection {...data} />
    </>
  )
}

export default About