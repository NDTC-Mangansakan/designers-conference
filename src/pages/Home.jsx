import { RiPlayLine } from '@remixicon/react';
import homeImg from '../assets/Images/home-new-bg.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const Home = () => {
    
    useGSAP(() => {
        gsap.from('.home-text-group', {
            y:50,
            opacity:0,
            duration:1,
            ease:'power4.out',
            delay:.3
        })

        gsap.from('.home-btns', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            delay: .6
        })
    })
    return (
        <section id='home' className="py-[20vh] relative bg-gray-600 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeImg})` }}>
            <div className="text-center relative z-10">
                <div className="home-text-group">
                    <p className="text-xl font-bold">Prague, Czech Republic</p>
                    <p className="text-[clamp(50px,8vw,80px)] font-extrabold mt-5">
                        <span>Designers</span> <br />
                        <span>Conference</span>
                    </p>
                    <p className="text-xl mt-5">July 01-02, 2025</p>
                </div>

                <div className="home-btns flex items-center justify-center gap-x-5 mt-10">
                    <a href="#pricing" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:shadow-lg hover:shadow-white transition-all duration-200" aria-label='Access the pricing page'>
                        Participate
                    </a>
                    <a href="#learn-more" className="px-5 py-3 rounded-lg bg-secondary text-white font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-secondary transition-all duration-200" aria-label="Watch teaser video">
                        <RiPlayLine />
                        Watch Teaser
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 bg-black/50 z-0" />
        </section>
    );
};

export default Home;
