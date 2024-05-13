import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Programs from './components/Programs'
import Teams from './components/Teams'
import Testimonials from './components/Testimonials'

const page: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Teams />
      <Programs />
      <Testimonials />
    </div>
  )
}

export default page
