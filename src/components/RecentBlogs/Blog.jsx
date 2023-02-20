import React from 'react'

import './Blog.css'


const Blog = ( sekil, tarix, basliq, metn) => {
  return (
    <div>
        <img src={sekil} alt="" />
        <div>
            <p>{tarix}</p>
        </div>
        <div>
            <h1>{basliq}</h1>
            <p>{metn}</p>
            <a href="#">View More</a>
        </div>
    </div>
  )
}

export default Blog