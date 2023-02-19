import React from 'react'
import Cases from '../components/cases/Cases'
import Consultation from '../components/consultation/Consultation'
import Footer from '../components/footer/Footer'
import History from '../components/history/History'
import Navbar from '../components/navbar/Navbar'
import Team from '../components/team/Team'

import { motion } from 'framer-motion'
import FadeIn from '../Animations/FadeIn'
import AnimatedPage from '../Animations/AnimatedPage'
const About = () => {
  return (
    <>
    <FadeIn>
    <History/>
    </FadeIn>
    <AnimatedPage>
    <Cases/>
    </AnimatedPage>
    <FadeIn>
        <Team/>
    </FadeIn>
    
    <Consultation/>
</>
    
  )
}

export default About