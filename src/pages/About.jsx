import { RiPlayLine } from '@remixicon/react';
import sr from '../components/ScrolReveal';
import { useEffect } from 'react';

import aboutImg from '../assets/Images/about-new-img.webp';
import amazonLogo from '../assets/Images/Amazon_logo.svg';
import grabLogo from '../assets/Images/Grab_logo.svg';
import spotifyLogo from '../assets/Images/Spotify_logo_with_text.svg.png';
import googleLogo from '../assets/Images/Google_logo.svg';
import nasdaqLogo from '../assets/Images/NASDAQ_Logo.svg';

const sponsors = [
    { src: amazonLogo, alt: 'Amazon logo', width: 'w-40' },
    { src: grabLogo, alt: 'Grab logo', width: 'w-40' },
    { src: spotifyLogo, alt: 'Spotify logo', width: 'w-40' },
    { src: googleLogo, alt: 'Google logo', width: 'w-40' },
    { src: nasdaqLogo, alt: 'NASDAQ logo', width: 'w-40' },
];

const About = () => {
    useEffect(() => {
        sr.reveal('.about-img', { origin: 'left' });
        sr.reveal('.about-group > *', { interval: 300, delay: 300 });
    }, []);

    return (
        <section id="about" className="py-15">
            <div className="container mx-auto p-5    flex flex-col gap-10 lg:flex-row">
                <div className="flex items-center justify-center lg:w-1/2">
                    <img src={aboutImg} alt="People at a design conference" className="about-img object-cover rounded-lg" />
                </div>

                <article className="about-group flex flex-col justify-center items-start lg:w-1/2">
                    <p className="text-xl text-primary font-bold">Our History</p>
                    <p className="mt-5 text-[clamp(30px,3.8vw,100px)] font-extrabold">
                        Welcome to designers MeetUp Session <span className="text-secondary">#3</span>
                    </p>
                    <p className="mt-5 text-xl text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime. Esse, aut officiis? Non aliquid repellendus nisi deserunt voluptatem quasi?
                    </p>

                    <button
                        aria-label="Watch previous editions"
                        className="mt-5 px-5 py-3 cursor-pointer rounded-lg bg-secondary flex items-center gap-x-1 transition-colors duration-200 hover:shadow-lg hover:shadow-secondary/50"
                    >
                        <RiPlayLine /> Watch Previous Editions
                    </button>

                    <p className="mt-10 text-gray-400">Sponsored by</p>

                    <div className="flex items-center flex-wrap gap-5 mt-5">
                        {sponsors.map(({ src, alt, width }, index) => (
                            <img key={index} src={src} alt={alt} loading="lazy" className={`${width}`} />
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
