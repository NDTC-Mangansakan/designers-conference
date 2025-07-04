import React, { useEffect, useState } from 'react'
import sr from '../components/ScrolReveal';

const Schedule = () => {
    const [toggleButton, setToggleButton] = useState(true);
    // if toggleButton is true, show Day 1 schedule, else show Day 2 schedule

    useEffect(() => {
        sr.reveal('.sched-part-1', {origin: 'left'})
        sr.reveal('.sched-part-2', { origin: 'right', interval: 200, delay: 300 })
    }, [])

    const scheduleOneData = [
        {
            time: "9:00 AM - 10:00 AM",
            title: "Registration Coffee",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "10:00 AM - 11:00 AM",
            title: "Opening Ceremony",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "11:00 AM - 12:30 PM",
            title: "Excepteur sint occaecat cupidatat",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "12:30 PM - 1:30 PM",
            title: "Lunch Break",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "2:00 PM - 3:00 PM",
            title: "Duis aute irure dolor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "3:00 PM - 4:00 PM",
            title: "Dolor in dolore eu",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        
    ]

    const scheduleTwoData = [
        {
            time: "9:00 AM - 10:00 AM",
            title: "Excepteur sint occaecat",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "10:00 AM - 11:00 AM",
            title: "Culpa qui officia deserunt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "11:00 AM - 12:30 PM",
            title: "Excepteur sint occaecat cupidatat",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "12:30 PM - 1:30 PM",
            title: "Lunch Break",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "2:00 PM - 3:00 PM",
            title: "Duis aute irure dolor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },
        {
            time: "3:00 PM - 4:00 PM",
            title: "Dolor in dolore eu",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?"
        },

    ]

    return (
        <div id='schedule' className='py-15'>
            <div className="container mx-auto px-5">

                <p className="text-primary font-semibold text-xl">Schedule</p>

                <div className="flex flex-col gap-10 lg:flex-row">
                    {/* Part 1 */}
                    <div className="sched-part-1 flex flex-col gap-y-5 lg:w-1/2">
                        <p className="font-extrabold text-[clamp(25px,3.5vw,100px)]">Schedule and Agenda</p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-y-3">
                            <div className={`${toggleButton ? 'bg-secondary' : 'bg-main-bg'} px-5 py-3 rounded-lg cursor-pointer`} onClick={() => setToggleButton(prev => !toggleButton && !prev)}>
                                <p className='text-white font-bold text-xl'>Day 1</p>
                                <p className='text-white/90 text-sm'>Friday, 20th October</p>
                            </div>

                            <div className={`${!toggleButton ? 'bg-secondary' : 'bg-main-bg'} p-5 rounded-lg cursor-pointer`} onClick={() => setToggleButton(prev => toggleButton && !prev)}>
                                <p className='text-white font-bold text-xl'>Day 2</p>
                                <p className='text-white/90 text-sm'>Friday, 21st October</p>
                            </div>
                        </div>
                    </div>

                    {/* Part 2 */}
                    <div className="flex flex-col gap-y-5 lg:w-1/2">

                        {
                            toggleButton ? (
                                scheduleOneData.map((item, index) => (
                                    <div key={index} className="sched-part-2 flex flex-col gap-1 lg:flex-row ">
                                        <p className="text-white/90 lg:w-1/3 pt-3 pl-5">{item.time}</p>
                                        <div className="mt-3 border-l-2 border-secondary-bg pl-5 lg:w-2/3">
                                            <p className="font-bold text-2xl">{item.title}</p>
                                            <p className="mt-3">{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                    scheduleTwoData.map((item, index) => (
                                        <div key={index} className="flex flex-col gap-1 lg:flex-row ">
                                            <p className="text-white/90 lg:w-1/3 pt-3 pl-5">{item.time}</p>
                                            <div className="mt-3 border-l-2  border-secondary-bg pl-5 lg:w-2/3">
                                                <p className="font-bold text-2xl">{item.title}</p>
                                                <p className="mt-3">{item.description}</p>
                                            </div>
                                        </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule