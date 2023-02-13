import React from 'react'
import './Intro.css'
import pattern from './pattern.svg'
import lawyer from './vekilqaqash.svg'
const Intro = () => {
  return (
    <div className="Introduction row">
        <div className="col-12 col-md-7 col-lg-6 left-side">
        <img src={pattern} alt="" />
        <h1>We're Group Of Certified Law Professionals</h1>
        <p>
        we have helped countless maritime workers and their families go up against the largest offshore companies and win.
        </p>
        <div><a href="">
            Get In Touch
        </a></div>
        </div>
        <div className="col-12 col-md-5 right-side">
            <img src={lawyer} alt="" />
        </div>
    </div>
  )
}

export default Intro