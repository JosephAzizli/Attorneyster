import React from 'react'
import Laws from '../components/laws/Laws'
import Parker from '../components/parker/Parker'
import Opinion from '../components/opinions/Opinion'
import AnimatedPage from '../Animations/AnimatedPage'
import Navbar from '../components/navbar/Navbar'

const Pages = () => {
  return (
    <>
    <Navbar/>
    <AnimatedPage>
        <Parker/>
        <Laws/>
        <Opinion/>
    </AnimatedPage>
    </>
  )
}

export default Pages