import {RiPlayLine} from '@remixicon/react'
import sr from '../components/ScrolReveal'

import aboutImg from '../assets/Images/about-img.jpg'
import amazonLogo from '../assets/Images/Amazon_logo.svg'
import grabLogo from '../assets/Images/Grab_logo.svg'
import spotifyLogo from '../assets/Images/Spotify_logo_with_text.svg.png'
import googleLogo from '../assets/Images/Google_logo.svg'
import nasdaqLogo from '../assets/Images/NASDAQ_Logo.svg'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        sr.reveal('.about-img', {origin: 'left'})
        sr.reveal('.about-content', {interval: '300', delay: 300})
    }, [])

    return (
        <div id='about' className='py-15'>
            <div className="container mx-auto p-5 flex flex-col gap-10 lg:flex-row">
                {/* About img */}
                <div className="flex items-center justify-center lg:w-1/2">
                    <img src={aboutImg} alt="About" className='about-img object-cover rounded-lg' />
                </div>

                {/* About content */}
                <div className="flex flex-col justify-center items-start lg:w-1/2">
                    <p className="about-content text-xl text-primary font-bold">Our History</p>
                    <p className="about-content mt-5 text-[clamp(30px,3.8vw,100px)] font-extrabold">
                        Welcome to designers MeetUp Session <span className="text-secondary">#3</span>
                    </p>
                    <p className="about-content mt-5 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime. Esse, aut officiis? Non aliquid repellendus nisi deserunt voluptatem quasi?
                    </p>

                    <button className="about-content mt-5 px-5 py-3 cursor-pointer rounded-lg bg-secondary flex items-center gap-x-1 transition-colors duration-200 hover:shadow-lg hover:shadow-secondary/50">
                        <RiPlayLine /> Watch Previous Editions
                    </button>

                    <p className="about-content mt-10 text-gray-400">Sponsored by</p>

                    <div className="flex items-center flex-wrap gap-5 mt-5">
                        <img src={amazonLogo} alt="" className='about-content w-25'/>
                        <img src={grabLogo} alt="" className='about-content w-40' />
                        <img src={spotifyLogo} alt="" className='about-content w-40' />
                        <img src={googleLogo} alt="" className='about-content w-40' />
                        <img src={nasdaqLogo} alt="" className='about-content w-40' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About