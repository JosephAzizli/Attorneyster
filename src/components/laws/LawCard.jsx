import React from 'react'

import './LawCard.css'

const LawCard = ({ title, body, image }) => {
  return (
    <div className='LawCard   col-md-4 col-lg-4'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className='img-class'>
            <img src={image} alt="" />
            <a href="">View More</a>
        </div>
    </div>
  )
}

export default LawCard