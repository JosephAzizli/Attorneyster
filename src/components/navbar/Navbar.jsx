import React from 'react'
import './Navbar.css'

import logo from "./logo.svg";
import phone from "./phone.svg"
import mail from "./mail.svg"

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-12">
          <div className="logo">
            <a href=""><img src={logo} alt="" /></a>
            <a href="#" className='mine'><p>Book a consultation</p> </a>
          </div>
          <nav>
          <div className="nav-links">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Pages</a>
            <a href="">Contact Us</a>
          </div>
          <div className="contact">
            <div>
            <img src={phone} alt="" />
            <div>
              <p>Call Us On</p>
              <a href="">911-987654321</a>
            </div>
            </div>
            <div>
            <img src={mail} alt="" />
            <div>
              <p>Email Us On:</p>
              <a href="">yourmail@mail.com</a>
            </div>
            </div>
          </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar