import React from "react";

//CSS
import "./Navbar.css";

//IMAGES
import logo from "./images/logo.svg";
import phone from "./images/phone.svg";
import mail from "./images/mail.svg";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-11">
          <div className="logo row">
            <a className="col-12 col-md-3 col-lg-5" href="">
              <img src={logo} alt="" />
            </a>
            <a href="#" className="col-12 col-md-12 col-lg-7 glass mine">
              <p>Book a consultation</p>{" "}
            </a>
          </div>
          <nav className="row">
            <div className="nav-links col-12 col-md-6 col-lg-5">
              <ul className="menu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="contact col-12 col-md-6 col-lg-7">
              <div className="phone">
                <a className="glass" href="">
                  <img src={phone} alt="" />
                </a>
                <div>
                  <p>Call Us On:</p>
                  <a className="w-auto" href="#">
                    911-987654321
                  </a>
                </div>
              </div>
              <div className="mail">
                <a className="glass" href="">
                  <img src={mail} alt="" />
                </a>
                <div>
                  <p>Email Us On:</p>
                  <a href="#">yourmail@mail.com</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
