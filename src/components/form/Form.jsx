import React from "react";

import { motion } from "framer-motion";

import "./Form.css";

const animations = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

const Form = () => {
  return (
    <div className="form">
      <form action="#">
        <div>
          <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} class="inputbox">
            <input required="required" type="text" />
            <span>Full Name*</span>
            <i></i>
          </motion.div>
          <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} class="inputbox">
            <input required type="text" />
            <span>Email Adress*</span>
            <i></i>
          </motion.div>
        </div>
        <div>
          <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} class="inputbox">
            <input required type="text" />
            <span>Phone Number</span>
            <i></i>
          </motion.div>
          <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} class="inputbox">
            <input required type="text" />
            <span>Subject</span>
            <i></i>
          </motion.div>
        </div>
        <motion.div variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} class="inputbox">
          <input required type="text" />
          <span>Your Message</span>
          <i></i>
        </motion.div>
        <motion.button variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type:'spring', duration: 2.4, bounce:0.7 }} className="button2">Get An Appointment</motion.button>
      </form>
    </div>
  );
};

export default Form;
