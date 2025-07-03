import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Speakers from './pages/Speakers'
import Schedule from './pages/Schedule'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Faqs from './pages/Faqs'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Speakers/>
      <Schedule/>
      <Pricing/>
      <Testimonials/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default App