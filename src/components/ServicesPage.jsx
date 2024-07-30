import React from 'react'
import CoverSection from './CoverSection'
import ServiceComponent from './ServiceComponent'

const Services = () => {
  const data = {
    name: 'servicespage',
    slogan: 'You are only a click away from the most amazing smile',
    descrip : 'Special People For Special Smiles',
  }
  return (
    <>
      <CoverSection {...data} />
      <ServiceComponent />
    </>
  )
}

export default Services