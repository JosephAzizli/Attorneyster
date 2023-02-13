import React from 'react'

import './Form.css'
const Form = () => {
  return (
    <div className='form'>
        <form action="#">
            <div>
                <input type="text" required />
                <label>Full Name*</label>
            </div>
            <div>
                <input type="text" required/>
                <label>Email Adress*</label>
            </div>
            <div>
                <input type="number" required/>
                <label>Phone Number</label>
            </div>
            <div>
                <input type="text" required/>
                <label>Subject</label>
            </div>
            <div>
                <input type="text" required/>
                <label>Your Message</label>
            </div>
        </form>
    </div>
  )
}

export default Form