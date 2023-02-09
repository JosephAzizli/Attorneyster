import React from 'react'

import './LawCard.css'

const LawCard = ({ title, body }) => {
  return (
    <div className='LawCard'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
            <img src="" alt="" />
            <a href="">View More</a>
        </div>
    </div>
  )
}

export default LawCard