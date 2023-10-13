import React from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
import SoftwareEngineering from '../../components/softeng'
import Companies from '../../components/companies'
import Credentials from '../../components/credentials'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <div className='container mx-auto relative'>
        <Navbar />
        <Hero />
        <SoftwareEngineering />
        <Companies />
        <Credentials />
        <Footer />
    </div>
  )
}

export default Home