import React from 'react'
import Form from '../components/form/Form'

import FormAnimation from '../Animations/FormAnimation'
import Navbar from '../components/navbar/Navbar'

const Appointment = () => {
  return (
    <>
    <Navbar/>
    <FormAnimation>
    <Form/>
    </FormAnimation>
    </>
  )
}

export default Appointment