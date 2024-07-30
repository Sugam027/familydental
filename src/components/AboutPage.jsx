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

      {/* about-us-homepage starts */}

      <section className="about-homepage-background">
          <div className="container">
              <div className="about-homepage">
                  <div className="about-homepage-left">
                      <div className="about-homepage-left-detail">
                          <h3>Giving Our Community Another Reason to Smile</h3>
                          <p>Family Dental Care was established to make taking care of your teeth safe, convenient, and enjoyable. You don’t have to drive far for high-quality dental care — everything you need and more is available right here at your local dentist office.<br />
                          We are an especially comfortable and safe environment for families and those with dental anxiety. No white coats, no pressure, and no judgment. Just safe, accessible, and high-quality care when you need it.</p>
                          <p>Call <a href="#">309-396-3123</a> today with questions.</p>
                      </div>
                  </div>

                  <div className="about-homepage-right">
                      <div className="about-homepage-features">
                          <div className="about-homepage-features-title">
                              <img src="images/on-time.png" alt="" />
                              <h4>On Time, every Time</h4>
                          </div>
                          <p>We know how busy your schedule is, so your appointment will always start on time with no waiting.</p>               
                      </div>
                      <div className="about-homepage-features">
                          <div className="about-homepage-features-title">
                              <img src="images/billing.png" alt="" />
                              <h4>Easy to understand billing</h4>
                          </div>
                          <p>Get answers to your questions about insurance or paying for your care. We’ll file all the paperwork and accept most insurances.</p>                        
                      </div>
                      <div className="about-homepage-features">
                          <div className="about-homepage-features-title">
                              <img src="images/smiling.png" alt="" />
                              <h4>Modern care with a smile</h4>
                          </div>
                          <p>You may not get as excited as we do about our CEREC machine and 3D x-rays. But you’ll smile when you see how great you look and feel.</p>                        
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* about-us-homepage ends */}
    </>
  )
}

export default About