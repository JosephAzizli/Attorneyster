import React, { useRef, useState } from "react";

import './RecentBlogs.css'

import pattern from './pattern.svg'

const RecentBlogs = () => {
  return (
    <div>
        <h1>Recent Blogs</h1>
        <img src={pattern} alt="" />
        <div className="blogs">
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default RecentBlogs