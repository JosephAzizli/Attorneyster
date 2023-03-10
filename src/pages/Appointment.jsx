import React from 'react'

import Form from '../components/form/Form'
import Navbar from '../components/navbar/Navbar'
import AnimatedPage from '../Animations/AnimatedPage'

const Appointment = () => {
  return (
    <>
    <Navbar/>
    <AnimatedPage>
    <Form/>
    </AnimatedPage>
    </>
  )
}

export default Appointment