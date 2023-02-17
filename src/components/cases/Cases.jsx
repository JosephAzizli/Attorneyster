import React from 'react'

import './Cases.css'

import pattern from './pattern.svg'
import img1 from './clients.svg'
import img2 from './succsfulcases.svg'
import img3 from './casesserved.svg'

const Cases = () => {
  return (
    <div className='Cases'>
        <h1>Fighting to get what <br /> you deserve</h1>
        <div className='pattern'><img  src={pattern} alt="" /></div>
        <p>Our board-certified family law attorneys work to achieve a fair and timely resolution of the legal issues in your case.</p>
        <div className='caseBadges row'>
          <img className='col-12 col-md-6 col-lg-4' src={img1} alt="" />
          <img className='col-12 col-md-6 col-lg-4' src={img2} alt="" />
          <img className='col-12 col-md-6 col-lg-4' src={img3} alt="" />
        </div>
    </div>
  )
}

export default Cases