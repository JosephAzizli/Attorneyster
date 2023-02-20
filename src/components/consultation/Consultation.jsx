import React from 'react'

import { Link } from 'react-router-dom';

//CSS
import './Consultation.css'


//IMAGES
import pattern from "./images/pattern.svg";
import phone from './images/phone.svg'

const Consultation = () => {
  return (
    <div className='consultation row' data-aos="fade-right">
      <div className="left-side col-12 col-md-5 col-lg-6">
        <h1 className='spec'>Our professional Expert law team is always ready to serve you</h1>
        <img src={pattern} alt="" />
        <p className='mytxt'>We’re always available for new cases big or small. Send us an email and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.</p>
        <div>
          <Link className="glass" to="/form">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="right-side col-12 col-md-7 col-lg-6 external-frame">
        <div className='internal-frame'>
          <h2>Get a Free Consultation</h2>
          <p>You can get free consultation and case evaluation from us via the following contact number</p>
          <div>
                <a href="#">
                  <img src={phone} alt="" />
                </a>
                <div>
                  <p>Call Us On:</p>
                  <a className="w-auto" href="#">
                    911-987654321
                  </a>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation