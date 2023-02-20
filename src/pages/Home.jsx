import React from 'react'
import Footer from '../components/footer/Footer'
import Intro from '../components/intro/Intro'
import Navbar from '../components/navbar/Navbar'
import './Home.css'
import AnimatedPage from '../Animations/AnimatedPage'

const Home = () => {
  return (
    <div className='Home'>
    <AnimatedPage>
        <Navbar/>
    <Intro/>
    </AnimatedPage>
    </div>
  )
}

export default Home