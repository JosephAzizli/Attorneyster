import React, {useEffect, useState} from "react";

import { Link } from "react-router-dom";

import ReactConfetti from 'react-confetti'

//CSS
import "./Footer.css";

//IMAGES
import footerimg from "./images/footerimg.svg";
import pattern1 from "./images/pattern1.svg";
import pattern2 from "./images/pattern2.svg";
import logo from "./images/logo.svg";

//ICONS
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    const [windowDimension, setDimension] = useState({width:window.innerWidth, height: window.innerHeight})
    const [Btn, setBtn] = useState(false)

    const detectSize = ()=>{
        setDimension({width:window.innerWidth, height: window.innerHeight})
    }

    useEffect(()=>{
        window.addEventListener('resize', detectSize);
        return ()=>{
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension]);
    
  return (
    <div className="footer">
      <div className="ftr_img">
        <img src={footerimg} alt="" />
      </div>
      <div className="footer_logo">
        <img src={pattern1} alt="" />
        <img src={logo} alt="" />
        <img src={pattern2} alt="" />
      </div>
      <div className="footer_links row">
        <div className="col-12 col-md-6 col-lg-3">
          <h2>Quick Link</h2>
          <div className="quick">
            <ul>
              <li>
                <Link className="hvreffct" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hvreffct" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hvreffct" to="/about">
                  Pricing
                </Link>
              </li>
              <li>
                <a className="hvreffct" href="#">
                  Testimonial
                </a>
              </li>
              <li>
                <Link className="hvreffct" to="/form">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hvreffct" href="">
                  Blog
                </a>
              </li>
              <li>
                <a className="hvreffct" href="#">
                  Blog Single
                </a>
              </li>
              <li>
                <Link className="hvreffct" to="/about">
                  Cases
                </Link>
              </li>
              <li>
                <a className="hvreffct" href="#">
                  Cases Single
                </a>
              </li>
              <li>
                <a className="hvreffct" href="#">
                  Practice Areas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h2>Utility Pages</h2>
          <ul>
            <li>
              <a className="hvreffct" href="#">
                Style Guide
              </a>
            </li>
            <li>
              <a className="hvreffct" href="#">
                Licenses
              </a>
            </li>
            <li>
              <a className="hvreffct" href="#">
                Protected
              </a>
            </li>
            <li>
              <a className="hvreffct" href="#">
                Changelog
              </a>
            </li>
            <li>
              <Link className="hvreffct" to="/error">
                Error Page
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h2>Practice Area</h2>
          <ul>
            <li>
              <Link className="hvreffct" to="/laws">
                Business Law
              </Link>
            </li>
            <li>
              <Link className="hvreffct" to="/laws">
                Construction Law
              </Link>
            </li>
            <li>
              <Link className="hvreffct" to="/laws">
                Car Accident
              </Link>
            </li>
            <li>
              <Link className="hvreffct" to="/laws">
                Criminal Law
              </Link>
            </li>
            <li>
              <Link className="hvreffct" to="/laws">
                Family Law
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h2>Contact Us</h2>
          <div>
            <p>Attorney Law Office, 121 King Street,Las Vegas 90027,USA.</p>
          </div>

          <ul>
            <li>
              <span>Phone:</span> <a href="#">(011)9876 54321</a>
            </li>
            <li>
              <span>Email: </span>
              <a href="#">Info@Example.Com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © Attorney Law | Designed by{" "}
          <a href="#" onClick={()=> setBtn(!Btn)}>
            <span>YUSIF AZIZLI</span>
          </a>{" "}
          - Powered by <span>Webflow.</span>
        </p>
        <div className="social-links">
          <p>Follow:</p>
          <a href="https://www.facebook.com/">
            <MdFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.twitter.com/">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterest />
          </a>
        </div>
      </div>
        {Btn && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={1000}
        />}
    </div>
    
    
  );
};

export default Footer;