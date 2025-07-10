import React, { useEffect, useState } from 'react';
import sr from '../components/ScrolReveal';

// Reusable component
const ScheduleItem = ({ time, title, description, className = '' }) => (
    <div className={`flex flex-col gap-1 lg:flex-row ${className}`}>
        <p className="text-white/90 lg:w-1/3 pt-3 pl-5">{time}</p>
        <div className="mt-3 border-l-2 border-secondary-bg pl-5 lg:w-2/3">
            <p className="font-bold text-2xl">{title}</p>
            <p className="mt-3">{description}</p>
        </div>
    </div>
);

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('day1');

    useEffect(() => {
        sr.reveal('.sched-part-1', { origin: 'left' });
        sr.reveal('.sched-part-2', { origin: 'right', interval: 200, delay: 300 });

        return () => {
            sr.clean('.sched-part-1');
            sr.clean('.sched-part-2');
        };
    }, []);

    const schedules = {
        day1: [
            { time: '9:00 AM - 10:00 AM', title: 'Registration Coffee', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '10:00 AM - 11:00 AM', title: 'Opening Ceremony', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '11:00 AM - 12:30 PM', title: 'Excepteur sint occaecat cupidatat', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '12:30 PM - 1:30 PM', title: 'Lunch Break', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '2:00 PM - 3:00 PM', title: 'Duis aute irure dolor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '3:00 PM - 4:00 PM', title: 'Dolor in dolore eu', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
        ],
        day2: [
            { time: '9:00 AM - 10:00 AM', title: 'Excepteur sint occaecat', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '10:00 AM - 11:00 AM', title: 'Culpa qui officia deserunt', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '11:00 AM - 12:30 PM', title: 'Excepteur sint occaecat cupidatat', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '12:30 PM - 1:30 PM', title: 'Lunch Break', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '2:00 PM - 3:00 PM', title: 'Duis aute irure dolor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
            { time: '3:00 PM - 4:00 PM', title: 'Dolor in dolore eu', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe, fugit dolores atque earum ducimus?' },
        ],
    };

    const scheduleData = schedules[activeDay];

    return (
        <section id="schedule" className="py-15">
            <div className="container mx-auto max-w-[1280px]     px-5">
                <p className="text-primary font-semibold text-xl">Schedule</p>

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                    {/* Left Panel */}
                    <div className="sched-part-1 flex flex-col gap-y-5 lg:w-1/2">
                        <p className="font-extrabold text-[clamp(25px,3.5vw,100px)]">Schedule and Agenda</p>

                        <div className="flex flex-col gap-y-3">
                            <button
                                onClick={() => setActiveDay('day1')}
                                aria-pressed={activeDay === 'day1'}
                                className={`px-5 py-3 rounded-lg text-left transition-colors duration-200 ${activeDay === 'day1' ? 'bg-secondary' : 'bg-main-bg'
                                    }`}
                            >
                                <p className="text-white font-bold text-xl">Day 1</p>
                                <p className="text-white/90 text-sm">Friday, 20th October</p>
                            </button>

                            <button
                                onClick={() => setActiveDay('day2')}
                                aria-pressed={activeDay === 'day2'}
                                className={`px-5 py-3 rounded-lg text-left transition-colors duration-200 ${activeDay === 'day2' ? 'bg-secondary' : 'bg-main-bg'
                                    }`}
                            >
                                <p className="text-white font-bold text-xl">Day 2</p>
                                <p className="text-white/90 text-sm">Friday, 21st October</p>
                            </button>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="flex flex-col gap-y-5 lg:w-1/2">
                        {scheduleData.length > 0 ? (
                            scheduleData.map((item, index) => (
                                <ScheduleItem key={index} {...item} className="sched-part-2" />
                            ))
                        ) : (
                            <p className="text-white text-lg">No schedule available for this day.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
