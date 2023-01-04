import React from 'react'
import services1 from '../images/service-icon-01.png'
import services2 from '../images/service-icon-02.png'
import services3 from '../images/service-icon-03.png'

const Service = () => {
  return (
    <>
        <section className='services' id='services'>
            <div className="carousel owl-carousel owl-theme" id="owl-demo">
               <div className="cards">
                  <img src={services1} alt="" />
                  <h5>First Box Service</h5>
                  <p>Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet. 
                    Sed a enim nec eros tempor cursus at id libero.
                  </p>
               </div>

               <div className="cards">
                  <img src={services2} alt="" />
                  <h5>Second Box Title</h5>
                  <p>Pellentesque vitae urna ut nisi viverra tristique quis at dolor. 
                    In non sodales dolor, id egestas quam. 
                    Aliquam erat volutpat. 
                  </p>
               </div>

               <div className="cards">
                  <img src={services3} alt="" />
                  <h5>Third Title Box</h5>
                  <p>Quisque finibus libero augue, in ultrices quam dictum id. 
                    Aliquam quis tellus sit amet urna tincidunt bibendum.
                  </p>
               </div>

               <div className="cards">
                  <img src={services1} alt="" />
                  <h5>Fourth Service Box</h5>
                  <p>Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit nec. 
                    Duis auctor dolor eu scelerisque vestibulum.
                  </p>
               </div>

               <div className="cards">
                  <img src={services2} alt="" />
                  <h5>Fifth Service Title</h5>
                  <p>Curabitur aliquam eget tellus id porta. 
                    Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit.
                  </p>
               </div>

               <div className="cards">
                  <img src={services3} alt="" />
                  <h5>Sixth Box Title</h5>
                  <p>Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae lacus. 
                    Aliquam porttitor urna ut pellentesque.
                  </p>
               </div>

               <div className="cards">
                  <img src={services3} alt="" />
                  <h5>Seventh Title Box</h5>
                  <p>Sed a consequat velit. 
                    Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. 
                    Donec non quam.
                  </p>
               </div>

               <div className="owl-carousel owl-theme owl-loaded">
                  <div className="owl-stage-outer">
                      <div className="owl-stage">
                          <div className="owl-item">...</div>
                          <div className="owl-item">...</div>
                          <div className="owl-item">...</div>
                      </div>
                  </div>
                  <div className="owl-nav">
                      <div className="owl-prev">prev</div>
                      <div className="owl-next">next</div>
                  </div>
                  <div className="owl-dots">
                      <div className="owl-dot active"><span></span></div>
                      <div className="owl-dot"><span></span></div>
                      <div className="owl-dot"><span></span></div>
                  </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Service