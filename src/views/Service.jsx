import React from 'react'
import services1 from '../images/service-icon-01.png'
import services2 from '../images/service-icon-02.png'
import services3 from '../images/service-icon-03.png'
import Carousel from 'react-bootstrap/Carousel';

const Service = () => {
  return (
    <>
        <section className='services' id='services'>
            <Carousel className="carousel">
               <Carousel.Item className="cards">
                  <img src={services1} alt="" />
                  <Carousel.Caption>
                    <h3>First Box Service</h3>
                    <p>Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet. 
                      Sed a enim nec eros tempor cursus at id libero.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services2} alt="" />
                  <Carousel.Caption>
                    <h3>Second Box Service</h3>
                    <p>Pellentesque vitae urna ut nisi viverra tristique quis at dolor. In non sodales dolor, id egestas quam. Aliquam erat volutpat. 
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services3} alt="" />
                  <Carousel.Caption>
                    <h3>Third Box Service</h3>
                    <p>Quisque finibus libero augue, in ultrices quam dictum id. Aliquam quis tellus sit amet urna tincidunt bibendum.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services1} alt="" />
                  <Carousel.Caption>
                    <h3>Fourth Box Service</h3>
                    <p>Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit nec. Duis auctor dolor eu scelerisque vestibulum.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services2} alt="" />
                  <Carousel.Caption>
                    <h3>Fifth Box Service</h3>
                    <p>Curabitur aliquam eget tellus id porta. Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services3} alt="" />
                  <Carousel.Caption>
                    <h3>Sixth Box Service</h3>
                    <p>Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae lacus. Aliquam porttitor urna ut pellentesque.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className="cards">
                  <img src={services1} alt="" />
                  <Carousel.Caption>
                    <h3>Seventh Box Service</h3>
                    <p>Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam.
                    </p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
        </section>
    </>
  )
}

export default Service