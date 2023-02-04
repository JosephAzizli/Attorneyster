import React from 'react'
import './Navbar.css'

import logo from "./logo.svg";
import phone from "./phone.svg"
import mail from "./mail.svg"

const Navbar = () => {
  return (
    <div className='container'>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" className="d-inline-block align-text-top"/>
    </a>
    <a className='consultation' href="">Book A Consultation</a>
  </div>
</nav>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About Us</a>
        <a className="nav-link" href="#">Pages</a>
        <a className="nav-link" href='#'>Contact Us</a>
      </div>
      <div className="contact d-flex">
        <div className='d-flex'>
            <img src={phone} alt="" />
            <div>
                <span>Call Us On:</span>
                <a href="">911-987654321</a>
            </div>           
        </div>
        <div className='d-flex'>
            <img src={mail} alt="" />
            <div>
                <span>Email Us On:</span>
                <a href="">yourmail@mail.com</a>
            </div>            
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar