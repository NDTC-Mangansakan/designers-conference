import { RiCheckboxCircleLine } from '@remixicon/react';
import sr from '../components/ScrolReveal';
import React, { useEffect } from 'react'

const Pricing = () => {

    useEffect(() => {
        sr.reveal('.price-card', {interval: 300})
    }, [])

    const pricesTitle = [ 'Bronze', 'Silver', 'Gold'];
    const prices = ['$99', '$199', '$299'];
    const priceDescriptions = [
        'Full access for One day',
        'Lunch and Coffee',
        'Meet Speakers',
        'Front Seat'
    ];
    return (
        <div id='pricing' className='py-15 bg-secondary-bg'>
            <div className="container mx-auto px-5">
                <p className="text-xl text-center">Event Pricing</p>
                <p className="mt-3 font-extrabold text-[clamp(25px,3.5vw,100px)] text-center">Book your seat now</p>

                <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:justify-center lg:items-center">
                    {
                        [...Array(3)].map((_, index) => (
                            <div key={index} className="price-card bg-main-bg rounded-lg p-5 lg:w-1/3 lg:mx-2">
                                {index === 1 && <p className="bg-primary inline-block px-3 py-1 rounded-3xl font-semibold text-xs mb-5">Recommended</p>}
                                <p className="font-semibold text-xl">{pricesTitle[index]}</p>
                                <p className="text-[50px] font-bold mt-3">{prices[index]}</p>
                                <ul className="mt-5">
                                    {
                                        priceDescriptions.map((desc, i) => (
                                            
                                            <li key={i} className={
                                                `${(index === 0 && i === 2) || 
                                                   (index === 0 && i === 3) || 
                                                   (index === 1 && i === 3)  ? 'line-through' : 'list-none'} 
                                                mt-3 text-white/90 flex items-center gap-x-2`
                                            }>
                                                <span className="text-gray-400"><RiCheckboxCircleLine/></span> {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <button className="mt-5 cursor-pointer w-full bg-secondary font-semibold text-white py-3 rounded-lg hover:bg-secondary/80 transition-colors duration-200">Get Ticket</button>
                            </div>
                        ))
                    }
                </div>

                <p className="mt-10 text-gray-400 text-center">Price Includes GST.</p>
            </div>
        </div>
    )
}

export default Pricing