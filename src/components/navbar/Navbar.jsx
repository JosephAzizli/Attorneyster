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
          <div className="logo row">
            <a className='col-12 col-md-5' href=""><img src={logo} alt="" /></a>
            <a href="#" className='col-12 col-md-8 glass mine'><p>Book a consultation</p> </a>
          </div>
          <nav className='row top-nav'>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Pages</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
          <div className="contact col-12 col-md-10 col-lg-6">
            <div>
            <a href="" className='glass'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            <img src={phone} alt="" /></a>
            <div>
              <p>Call Us On:</p>
              <a href="">911-987654321</a>
            </div>
            </div>
            <div>
            <a href="" className='glass'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            <img src={mail} alt="" /></a>
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