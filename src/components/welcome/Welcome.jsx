import React from 'react'
import slider from '../../images/slider-icon.png'

const Welcome = () => {
  return (
    <>
        <div className="welcome_area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 welcome_txt">
                        <h1>
                            Art Factory is free
                            <strong>for YOU</strong>
                        </h1>

                        <p>This template is available for 100% free of charge on TemplateMo. 
                            Download, modify and use this for your business website.
                        </p>

                        <button className='btn'>FIND OUT MORE</button>
                    </div>

                    <div className="col-sm-12 col-md-6 welcome_img">
                        <img src={slider} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Welcome