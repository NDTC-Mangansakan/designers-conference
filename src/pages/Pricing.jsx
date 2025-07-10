import React, { useEffect } from 'react';
import { RiCheckboxCircleLine } from '@remixicon/react';
import sr from '../components/ScrolReveal';

const plans = [
    {
        title: 'Bronze',
        price: '$99',
        features: ['Full access for One day', 'Lunch and Coffee'],
    },
    {
        title: 'Silver',
        price: '$199',
        features: ['Full access for One day', 'Lunch and Coffee', 'Meet Speakers'],
        recommended: true,
    },
    {
        title: 'Gold',
        price: '$299',
        features: ['Full access for One day', 'Lunch and Coffee', 'Meet Speakers', 'Front Seat'],
    },
];

const allFeatures = [
    'Full access for One day',
    'Lunch and Coffee',
    'Meet Speakers',
    'Front Seat'
];

const Pricing = () => {
    useEffect(() => {
        sr.reveal('.price-card', { interval: 300 });

        return () => {
            sr.clean('.price-card');
        };
    }, []);

    return (
        <section id="pricing" className="py-15 bg-secondary-bg">
            <div className="container mx-auto max-w-[1280px] px-5">
                <p className="text-xl text-center">Event Pricing</p>
                <p className="mt-3 font-extrabold text-[clamp(25px,3.5vw,100px)] text-center">Book your seat now</p>

                <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:justify-center lg:items-center">
                    {plans.map((plan, index) => (
                        <div key={index} className="price-card bg-main-bg rounded-lg p-5 lg:w-1/3 lg:mx-2">
                            {plan.recommended && (
                                <p className="bg-primary inline-block px-3 py-1 rounded-3xl font-semibold text-xs mb-5">
                                    Recommended
                                </p>
                            )}
                            <p className="font-semibold text-xl">{plan.title}</p>
                            <p className="text-[50px] font-bold mt-3">{plan.price}</p>

                            <ul className="mt-5">
                                {allFeatures.map((feature, i) => {
                                    const included = plan.features.includes(feature);
                                    return (
                                        <li
                                            key={i}
                                            className={`mt-3 flex items-center gap-x-2 text-white/90 ${!included ? 'line-through opacity-60' : ''
                                                }`}
                                        >
                                            <span className="text-gray-400">
                                                <RiCheckboxCircleLine />
                                            </span>
                                            {feature}
                                        </li>
                                    );
                                })}
                            </ul>

                            <button className="mt-5 w-full bg-secondary font-semibold text-white py-3 rounded-lg hover:bg-secondary/80 transition-colors duration-200">
                                Get Ticket
                            </button>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-gray-400 text-center">Price Includes GST.</p>
            </div>
        </section>
    );
};

export default Pricing;
