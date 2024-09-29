import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Categories from '../components/Categories/Categories'
import FaqTestimonials from '../components/FaqTestimonials/FaqTestimonials'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <Services />
      <FaqTestimonials/>
      
    </div>
  )
}

export default HomePage
