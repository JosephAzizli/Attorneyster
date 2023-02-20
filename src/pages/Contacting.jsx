import React from 'react'
import Consultation from '../components/consultation/Consultation'
import Form from '../components/form/Form'

import FormAnimation from '../Animations/FormAnimation'
import Navbar from '../components/navbar/Navbar'

const Contacting = () => {
  return (
    <>
    <Navbar/>
    <FormAnimation>
        <Consultation/>
    </FormAnimation>
    </>
  )
}

export default Contacting