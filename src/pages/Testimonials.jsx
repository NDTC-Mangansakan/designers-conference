import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { RiStarFill, RiUserFill } from '@remixicon/react';

/* ------------ dummy testimonial data ------------ */
const testimonialsData = [
    {
        id: 1,
        quote:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore, obcaecati eligendi illo corrupti temporibus minus voluptates vero, veniam non praesentium labore at. Repellat, veniam.',
        name:'Lebron James',
        job: 'Product Designer',
        img: '/profile‑sarah.jpg',          // swap with your own path/URL
    },
    {
        id: 2,
        quote:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore, obcaecati eligendi illo corrupti temporibus minus voluptates vero, veniam non praesentium labore at. Repellat, veniam.',
        name: 'Anand Patel',
        job: 'Head of Marketing',
        img: '/profile‑anand.jpg',
    },
    {
        id: 3,
        quote:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore, obcaecati eligendi illo corrupti temporibus minus voluptates vero, veniam non praesentium labore at. Repellat, veniam.',
        name: 'Maria González',
        job: 'Full‑Stack Developer',
        img: '/profile‑maria.jpg',
    },
];

/* ------------ reusable slide card ------------ */
const TestimonialCard = ({ quote, name, job }) => (
    <div className="bg-main-bg mx-auto p-6 rounded-lg shadow-md flex flex-col gap-4">
        {/* rating */}
        <div className="flex justify-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
                <RiStarFill key={i} size={22} />
            ))}
        </div>

        {/* description */}
        <p className="text-[clamp(16px,2vw,90px)] text-center italic leading-relaxed">“{quote}”</p>

        {/* profile */}
        <div className="flex items-center justify-center gap-4 pt-2">
            <RiUserFill size={30} />
            <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{job}</p>
            </div>
        </div>
    </div>
);

/* ------------ main swiper component ------------ */
const Testimonials = () => (
    <div className="py-15 max-w-[768px] mx-auto px-5">
        <p className="text-[clamp(25px,4.5vw,100px)] text-center font-bold mb-10">Testimonials</p>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-90"
        >
            {testimonialsData.map((t) => (
                <SwiperSlide key={t.id}>
                    <TestimonialCard {...t} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default Testimonials;
