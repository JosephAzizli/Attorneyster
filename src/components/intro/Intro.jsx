import React from "react";

//CSS
import "./Intro.css";

//IMAGES
import pattern from "./images/pattern.svg";
import lawyer from "./images/vekilqaqash.svg";

const Intro = () => {
  return (
    <div className="Introduction row">
      <div className="col-12 col-md-5 col-lg-6 left-side">
        <img src={pattern} alt="" />
        <h1>We're Group Of Certified Law Professionals</h1>
        <p>
          we have helped countless maritime workers and their families go up
          against the largest offshore companies and win.
        </p>
        <div>
          <a className="glass" href="">
            Get In Touch
          </a>
        </div>
      </div>
      <img className="lawyer col-12 col-md-7 col-lg-6" src={lawyer} alt="" />
    </div>
  );
};

export default Intro;
