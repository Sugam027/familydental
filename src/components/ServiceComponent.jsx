import React from 'react'
import { Link } from 'react-router-dom'
import services from '../datas/ServiceHomeData'

function ServiceComponent() {
  return (
    <>
    <section className="services-help-background">
        <div className="container">
            <div className="services-help">
                <div className="services-help-title">
                    <h1>How can we help you today?</h1>
                </div>
                <div className="services-help-content">
                    {services.map((service, index) =>{
                        return(
                            <div className="services-help-item" key={index}>
                                <Link to={`/${service.slug}`}>
                                <div className="hovereffect">
                                    <div className="services-help-images">
                                        <img src={service.image} alt={service.title} width="100%" />
                                    </div>
                                    <div className="services-help-description">
                                        <h3>{service.title}</h3>
                                        <Link to={`/${service.slug}`} className="info">{service.description}</Link>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServiceComponent