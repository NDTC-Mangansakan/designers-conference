import React, { useEffect, useState } from 'react'
import gsap, { ScrollTrigger } from 'gsap/all'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Speakers from './pages/Speakers'
import Schedule from './pages/Schedule'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Faqs from './pages/Faqs'
import Footer from './pages/Footer'
import Loader from './components/Loader'

gsap.registerPlugin(ScrollTrigger)

const projectImages = [
  './assets/Images/home-bg.jpg',
  './assets/Images/about-img.jpg',
  './assets/Images/Amazon_logo.svg',
  './assets/Images/Google_logo.svg',
  './assets/Images/Grab_logo.svg',
  './assets/Images/NASDAQ_Logo.svg',
  './assets/Images/slack.svg',
  './assets/Images/speakers-img-1.jpg',
  './assets/Images/speakers-img-2.jpg',
  './assets/Images/speakers-img-3.jpg',
  './assets/Images/speakers-img-4.jpg',
  './assets/Images/speakers-img-5.jpg',
  './assets/Images/speakers-img-6.jpg',
  './assets/Images/Spotify_logo_with_text.svg.png',
]


const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let loadedCount = 0;

    projectImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleLoad; // Still count even if failed (optional)
    });

    function handleLoad() {
      loadedCount += 1;
      if (loadedCount === projectImages.length) {
        setIsLoading(false);
      }
    }
  }, []);


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Navbar />
      <Home />
      <About />
      <Speakers />
      <Schedule />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App