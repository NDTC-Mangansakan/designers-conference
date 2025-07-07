import React, { useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import clsx from 'clsx';

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Pricing", href: "#pricing" },
    { name: "Faqs", href: "#faqs" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navbarBgRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // triggers when section is around middle
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navItems.forEach(item => {
            const section = document.querySelector(item.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Optional: Add top background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (navbarBgRef.current) {
                if (window.scrollY > 0) {
                    navbarBgRef.current.classList.add("top-0");
                } else {
                    navbarBgRef.current.classList.remove("top-0");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav className='h-[10vh] fixed top-0 left-0 right-0 flex items-center z-99'>
                <div className="container mx-auto px-5 flex items-center justify-between z-99">
                    <div className="font-bold text-2xl">
                        <a href="#">Assan</a>
                    </div>

                    <div className="flex items-center gap-x-3 lg:gap-x-10">
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-x-5">
                            {navItems.map(item => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={clsx("nav-link transition-colors", {
                                        "text-white": activeSection === item.href,
                                        "text-gray-400": activeSection !== item.href
                                    })}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <a href="#book-now" className='px-5 py-3 rounded-lg bg-primary font-semibold'>Book Now</a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation"
                            className="cursor-pointer relative w-[35px] h-[35px] lg:hidden"
                        >
                            <RiMenuLine
                                size={35}
                                className={clsx(
                                    "absolute top-0 transition-all duration-300 ease-in-out",
                                    isMobileMenuOpen && "opacity-0 scale-90 rotate-45",
                                    !isMobileMenuOpen && "opacity-100 scale-100 rotate-0"
                                )}
                            />
                            <RiCloseLine
                                size={35}
                                className={clsx(
                                    "absolute top-0 transition-all duration-300 ease-in-out",
                                    isMobileMenuOpen && "opacity-100 scale-100 rotate-0",
                                    !isMobileMenuOpen && "opacity-0 scale-90 rotate-45"
                                )}
                            />
                        </button>
                    </div>
                </div>

                {/* Scroll BG */}
                <div
                    ref={navbarBgRef}
                    className="scroll-navbar-bg z-98 fixed -top-[20vh] left-0 right-0 bg-main-bg shadow-xl shadow-white/30 h-[10vh] transition-all duration-300"
                ></div>
            </nav>

            {/* Mobile Nav */}
            <div className="fixed top-[10vh] left-0 right-0 z-97 lg:hidden">
                <div
                    className={clsx(
                        "container px-5 mx-auto flex flex-col gap-y-5 py-5 bg-main-bg origin-top transition-all duration-300",
                        isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
                    )}
                >
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={clsx("nav-link transition-colors", {
                                "text-white": activeSection === item.href,
                                "text-gray-400": activeSection !== item.href
                            })}
                            onClick={closeMobileMenu}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
