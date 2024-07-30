import React from 'react'
import { Link, useParams } from 'react-router-dom'
import services from '../datas/ServiceHomeData'
import servicesDetail from '../datas/ServiceDetailData';

function ServicesDetailPage() {
    const { slug } = useParams();
    const servicesDetailData = servicesDetail.find(s => s.slug === slug);

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="services-list">
                    {services.map((service,index)=>{
                        return(
                            <li key={index}>
                                <Link to={`/${service.slug}`}>{service.title}</Link>
                            </li>
                        )
                    })}
                </div>
                <div className="services-detail">
                    <h3>{servicesDetailData.title}</h3>
                    <p>{servicesDetailData.description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServicesDetailPage