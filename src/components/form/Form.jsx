import React from "react";

import "./Form.css";
const Form = () => {
  return (
    <div className="form">
      <form action="#">
        <div>
          <div class="inputbox">
            <input required="required" type="text" />
            <span>Full Name*</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required type="text" />
            <span>Email Adress*</span>
            <i></i>
          </div>
        </div>
        <div>
          <div class="inputbox">
            <input required type="text" />
            <span>Phone Number</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required type="text" />
            <span>Subject</span>
            <i></i>
          </div>
        </div>
        <div class="inputbox">
          <input required type="text" />
          <span>Your Message</span>
          <i></i>
        </div>
        <button className="button2">Get An Appointment</button>
      </form>
    </div>
  );
};

export default Form;
