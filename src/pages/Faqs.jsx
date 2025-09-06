import { RiQuestionLine } from '@remixicon/react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const Faqs = () => {

    useGSAP(() => {
        gsap.from('.faqs-container', {
            scrollTrigger: {
                trigger: '#faqs',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power4.out',
        })
    }, [])

    const desc = 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet. '
    const questions = [
        'What do I get with this kit?',
        'Lorem ipsum dolor sit amet?',
        'Does Assan4 use bootstrap5?',
        'How do i get the new updates?',
        'What is the refund policy ?',
        'Event question here?'
    ]

    return (
        <div id='faqs' className='py-15 bg-linear-to-tl from-primary to-secondary'>
            <div className="faqs-container container mx-auto max-w-[1280px] px-5">
                <p className="text-center font-bold text-[clamp(30px,3.5vw,100px)]">Frequently asked questions</p>

                <div className="mt-20 grid grid-cols-1 gap-15 md:grid-cols-2">
                    {
                        questions.map((question, index) => (
                            <div key={index} className="question flex gap-3">
                                <span>
                                    <RiQuestionLine size={40} />
                                </span>
                                <div className="flex flex-col gap-3">
                                    <p className="text-2xl font-semibold">{question}</p>
                                    <p className="">{desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <p className="mt-20 text-center">Didn't Get your asswer? </p>
                <p className="text-center">Don't worry, Send us an email here
                    <a href='email' aria-label='Access Page Email' className='cursor-pointer font-semibold text-white/70 hover:text-white/100 transition-colors duration-200'> event@maildomain.com</a>
                </p>
            </div>
        </div>
    )
}

export default Faqs