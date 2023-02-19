import React from 'react'
import Laws from '../components/laws/Laws'
import Parker from '../components/parker/Parker'
import Opinion from '../components/opinions/Opinion'
import AnimatedPage from '../Animations/AnimatedPage'

const Pages = () => {
  return (
    <AnimatedPage>
        <Parker/>
        <Laws/>
        <Opinion/>
    </AnimatedPage>
  )
}

export default Pages