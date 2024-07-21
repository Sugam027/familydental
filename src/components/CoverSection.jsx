import React from 'react'

const CoverSection = (props) => {
  return (
    <>
        <section class={`coverSection ${props.name}-background`}>
          {/* <img src="./images/coverSection/homepage.webp" alt="" /> */}
            <div class="container">
                <div class="coverpage">
                  <div>
                    <p>{props.info}</p>
                    <h3>{props.title}</h3>
                    <p class="slogan">{props.slogan}</p>
                    <p>{props.descrip}</p>
                    <div>
                      <a href="#appointment-table" class="btn btn-transparent">Appointment</a>
                      <a href="#" class="btn">Call or text +977 9823454159</a>
                    </div>
                  </div>
                </div>
            </div>
         </section>
    </>

  )
}

export default CoverSection