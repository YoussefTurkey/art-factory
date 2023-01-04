import React from 'react'
import aboutImg from '../../images/left-image.png'

const AboutTop = () => {
  return (
    <>
        <section className="about_top container" id='about'>
            <div className="row d-flex align-items-center justify-content-around">
                <div className="col-sm-12 col-md-6">
                    <img src={aboutImg} />
                </div>

                <div className="col-sm-12 col-md-4">
                    <h3>Vivamus sodales nisi id ante molestie venenatis</h3>
                    
                    <p className='mt-4'>This template is <a href="">last updated on 20 August 2019</a> for main menu drop-down arrow and sub menu text color.
                        Duis auctor dolor eu scelerisque vestibulum. 
                        Vestibulum lacinia, nisl sit amet tristique condimentum.
                    </p>

                    <p className='mt-4'>Sed a consequat velit. Morbi lectus sapien, 
                        vestibulum et sapien sit amet, ultrices malesuada odio. 
                        Donec non quam euismod, mattis dui a, ultrices nisi.
                    </p>

                    <button className='btn'>DISCOVER MORE</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutTop