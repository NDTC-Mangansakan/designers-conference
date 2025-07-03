import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [openNavLinks, setOpenNavLinks] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarBg = document.querySelector('.navbar-bg');
            if (window.scrollY > 0) {
                navbarBg.classList.add('top-0');
            } else {
                navbarBg.classList.remove('top-0');
            }
        }

        const handleNavLinkCss = () => {
            const links = document.querySelectorAll('.nav-link')
            const screenY = Math.ceil(window.scrollY)

            links.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    console.log(screenY, sectionTop, sectionHeight)

                    if (screenY >= sectionTop - 100 && screenY <= sectionTop + sectionHeight - 100) {
                        link.classList.add('text-white');
                    } else {
                        link.classList.remove('text-white');
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleNavLinkCss);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleNavLinkCss)
        }
    }, [])

    return (
        <>
            <nav className='h-[10vh] fixed top-0 left-0 right-0 flex items-center z-99'>
                <div className="container mx-auto px-5 flex items-center justify-between z-99">

                    {/* Logo */}
                    <div className="font-bold text-2xl">
                        <a href="#">Assan</a>
                    </div>

                    {/* button and menu/close icon or nav-links*/}
                    <div className="flex items-center gap-x-3 lg:gap-x-10">

                        {/* Navbar Links in lg screens and above */}
                        <div className='hidden lg:flex items-center gap-x-5'>
                            <a href="#home" className='nav-link'>Home</a>
                            <a href="#about" className='nav-link'>About</a>
                            <a href="#speakers" className='nav-link'>Speakers</a>
                            <a href="#schedule" className='nav-link'>Schedule</a>
                            <a href="#pricing" className='nav-link'>Pricing</a>
                            <a href="#faqs" className='nav-link'>Faqs</a>
                        </div>

                        {/* Navbar btn */}
                        <a href="#book-now" className='px-5 py-3 rounded-lg bg-primary font-semibold'>Book Now</a>
                        <div className="cursor-pointer relative w-[35px] h-[35px] lg:hidden" onClick={() => setOpenNavLinks(prev => !prev)}>
                            <RiMenuLine
                                size={35}
                                className={`absolute transition-all duration-300 ease-in-out ${openNavLinks ? 'opacity-0 scale-90 rotate-45' : 'opacity-100 scale-100 rotate-0'
                                    }`}
                            />
                            <RiCloseLine
                                size={35}
                                className={`absolute transition-all duration-300 ease-in-out ${openNavLinks ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-45'
                                    }`}
                            />
                        </div>
                    </div>
                </div>

                {/* background of navbar when user scrolls */}
                <div className="navbar-bg z-98 fixed -top-[20vh] left-0 right-0 bg-main-bg shadow-xl shadow-white/30 h-[10vh] transition-all duration-300"></div>
            </nav>

            {/* NavLinks for less than lg screen width */}
            <div className="fixed top-[10vh] left-0 right-0  z-97 lg:hidden">
                <div
                    className={`container px-5 mx-auto flex flex-col gap-y-5 py-5 bg-main-bg origin-top transition-all duration-300 ${openNavLinks ? 'scale-y-100' : 'scale-y-0'}`}>
                    <a href="#home" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>Home</a>
                    <a href="#about" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>About</a>
                    <a href="#speakers" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>Speakers</a>
                    <a href="#schedule" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>Schedule</a>
                    <a href="#pricing" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>Pricing</a>
                    <a href="#faqs" className='nav-link' onClick={() => setOpenNavLinks(prev => !prev)}>Faqs</a>
                </div>
            </div>

        </>
    )
}

export default Navbar