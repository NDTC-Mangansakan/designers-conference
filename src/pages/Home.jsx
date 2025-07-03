import { RiPlayLine } from '@remixicon/react'
import sr from '../components/ScrolReveal'
import { useEffect } from 'react'

import homeImg from '../assets/Images/home-bg.jpg'

const Home = () => {

    useEffect(() => {
        sr.reveal('.home-text-reveal', {interval: 300})
        sr.reveal('.home-btns', {delay: 1200})
    }, [])

    
    return (
        <div id='home' className="py-[20vh] relative bg-gray-600 bg-no-repeat bg-cover bg-center" style={{backgroundImage : `url(${homeImg})`}}>
            <div className="text-center relative z-10">
                <p className="home-text-reveal text-xl font-bold">Prague, Czech Republic</p>
                <p className="text-[clamp(50px,8vw,80px)] font-extrabold mt-5">
                    <span className="home-text-reveal">Designers</span> <br />
                    <span className='home-text-reveal'>Conference</span>
                </p>
                <p className="home-text-reveal text-xl mt-5">July 01-02, 2025</p>

                {/* Home buttons */}
                <div className="home-btns flex items-center justify-center gap-x-5 mt-10">
                    <a href="#pricing" className='px-5 py-3 rounded-lg bg-white text-black font-semibold hover:shadow-lg hover:shadow-white transition-all duration-200'>
                        Participate
                    </a>
                    <a href="#learn-more" className='px-5 py-3 rounded-lg bg-secondary font-semibold inline-flex items-center hover:shadow-lg hover:shadow-secondary transition-all duration-200'>
                        <RiPlayLine />
                        Watch Teaser
                    </a>
                </div>
            </div>

            {/* Overlay for reduced opacity */}
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50 z-0"></div>
        </div>
    )
}

export default Home