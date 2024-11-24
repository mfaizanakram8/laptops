import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Port from '@/components/Portfolio'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Port/>
      <Products/>
    </div>
  )
}

export default page
