import React from 'react'
import CoverSection from './CoverSection'

const Home = () => {
  const data ={
    name: 'homepage',
    title: 'Welcome to Best Dental Care In Your City',
    slogan: 'We’re your dental defenders.',
  }

  let cards = [
    {title: 'Opening Hour', image: '../images/clock.png', description: 'Sunday - Friday 12:00 pm - 8:00 pm', moreBtn: '', link: '#'},
    {title: 'Appointment', image: '../images/appointment.png', description: 'At Family Dental Care, we\'re here when you need us most. That\'s why we\'re bringing you more ways to get the care you need than ever before.', moreBtn: 'Requests', link: '#appointment-table'},
    {title: 'Urgent Care', image: '../images/dentist.png', description: 'Search for a care facility near you to find the shortest wait and get in line ahead of time.', moreBtn: 'Search', link: '#'},
    {title: 'Find Location', image: '../images/location.png', description: 'We’re located in the heart of the beautiful Hattigauda area.', moreBtn: 'Visits', link: './contact.html#map'},
  ]
  return (
    <>
    <section class="background">
            <img src="../images/brushing.webp" />
    </section>

    <CoverSection {...data}/>

    {/* table section starts  */}

    <section className="table-background">
        <div className="container">
            <div className="table">
              {cards && cards.map((card, index) =>{
                return(
                  <>
                    <div className="card first">
                        <div className="card-header">
                            <h3 className="card-title">{card.title}</h3>
                            <img src={card.image} alt=""/>
                        </div>
                        <p>{card.description}</p>
                        <a class="learn-more" href={card.link}>{card.moreBtn}</a>
                    </div>

                  </>
                )
              })}
                
                
                
            </div>
        </div>
    </section>

    {/* table section ends  */}
    </>
  )
}

export default Home