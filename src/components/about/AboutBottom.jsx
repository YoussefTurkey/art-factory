import React from 'react'
import aboutImg from '../../images/right-image.png'
import aboutIcon1 from '../../images/about-icon-01.png'
import aboutIcon2 from '../../images/about-icon-02.png'
import aboutIcon3 from '../../images/about-icon-03.png'


const AboutBottom = () => {
  return (
    <>
        <section className="about_bottom container">
            <div className="row d-flex align-items-center justify-content-around">
                <div className="col-sm-12 col-md-4">
                    <h3>Curabitur aliquam eget tellus id porta</h3>
                    
                    <p className='mt-5 mb-5 disc'>Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit. 
                        Aenean in feugiat purus.
                    </p>

                    <div className="row">
                        <div className="col-sm-12 term">
                            <img src={aboutIcon1} />

                            <div className="txt">
                                <h4>Nulla ultricies risus quis risus</h4>
                                <p>You can use this website template for commercial or non-commercial purposes.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 term">
                            <img src={aboutIcon2} />

                            <div className="txt">
                                <h4>Donec consequat commodo purus</h4>
                                <p>You have no right to re-distribute this template as a downloadable ZIP file on any website.</p>
                            </div>
                        </div>

                        <div className="col-sm-12 term">
                            <img src={aboutIcon3} />

                            <div className="txt">
                                <h4>Sed placerat sollicitudin mauris</h4>
                                <p>If you have any question or comment, please <a href="">contact</a> us on TemplateMo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <img src={aboutImg} />
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBottom