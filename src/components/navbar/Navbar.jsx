import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Navbar.css";

//IMAGES
import logo from "./images/logo.svg";
import phone from "./images/phone.svg";
import mail from "./images/mail.svg";

const Navbar = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");


  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-11">
          <div className="logo row">
            <Link to="/" className="col-12 col-md-3 col-lg-5" >
              <img src={logo} alt="" />
            </Link>
            <Link to="/form" className="col-12 col-md-12 col-lg-7 glass mine">
              <p>Book a consultation</p>{" "}
            </Link>
          </div>
          <nav className="nav">
            <div className="nav-links">
              <ul className={collapse}>
                <li className="nav__item">
                  <Link className="hvreffct nav__link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="hvreffct nav__link" to="/about">About Us</Link>
                </li>
                <li>
                  <Link className="hvreffct nav__link" to="/pages">Pages</Link>
                </li>
                <li>
                  <Link className="hvreffct nav__link" to="/contact">Contact Us</Link>
                </li>
              </ul>
              <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
            </div>
            <div className="contact ">
              <div className="phone">
                <a className="glass" href="#">
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
                <a className="glass" href="#">
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
