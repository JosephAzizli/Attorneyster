import React from 'react'

import './LawCard.css'

const LawCard = ({ title, body, image }) => {
  return (
    <div className='LawCard'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
            <img src={image} alt="" />
            <a href="">View More</a>
        </div>
    </div>
  )
}

export default LawCard