import React from 'react'
import './Parker.css'

import statue from "./statue.svg"
import hammer from "./hammer.svg"
import pattern from "./pattern.svg"
import notebook from "./notebook.svg"
import peter from "./peter.svg"
import exp from "./35.svg"
const Parker = () => {
  return (
    <div className='parker'>
        <div className='row'>
            <div className='col-12 col-md-4'><img src={statue} className='statue' alt="statue" /></div>
            <div className="text col-12 col-md-7">
                <h1>Welcome to Attorney Law - Lawyer & Law Firm Company</h1>
                <img src={pattern} alt="" />
                <p>Although we are located in Brooklyn, our maritime lawyers are proud to help the injured throughout the nation, including workers who were working in foreign waters at the time of the incident go up against the largest offshore companies and win.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-4'><img src={hammer} className='hammer' alt="" /></div>
            <div className='peter col-12 col-md-7'>
            <div>
                <img src={peter} alt="" />
                <h1>Peter Parker</h1>
            </div>
            <div className="badges">
            <div className="success">
                <img src={notebook} alt="" />
                <div>
                <p>95%</p>
                <p>Case Success</p>
                </div>
            </div>
            <div className="exp">
                <img src={exp} alt="" />
                <div>
                <p>Years</p>
                <p>Experience</p>
                </div>
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Parker