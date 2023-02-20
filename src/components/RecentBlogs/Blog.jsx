import React from 'react'

import './Blog.css'

import data from './blogdata.json'

const Blog = ( image, date, title, body) => {
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <p>{date}</p>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <a href="#">View More</a>
        </div>
    </div>
  )
}

export default Blog