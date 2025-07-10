import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiFacebookFill,
    RiInstagramFill,
    RiTwitterXFill,
} from '@remixicon/react';

import img1 from '../assets/Images/speakers-new-img-1.webp';
import img2 from '../assets/Images/speakers-new-img-2.webp';
import img3 from '../assets/Images/speakers-new-img-3.webp';
import img4 from '../assets/Images/speakers-new-img-4.webp';
import img5 from '../assets/Images/speakers-new-img-5.webp';
import img6 from '../assets/Images/speakers-new-img-6.webp';

const speakers = [
    { name: 'Speaker Sharma', title: 'Web Designer', img: img1 },
    { name: 'Speaker Li', title: 'Frontend Engineer', img: img2 },
    { name: 'Speaker Aisha', title: 'UX Researcher', img: img3 },
    { name: 'Speaker Carlos', title: 'Product Manager', img: img4 },
    { name: 'Speaker Mei', title: 'Visual Designer', img: img5 },
    { name: 'Speaker Omar', title: 'Fullstack Dev', img: img6 },
];

const Speakers = () => {
    return (
        <section id="speakers" className="bg-secondary-bg py-15 rounded-2xl lg:bg-transparent">
            <div className="container relative mx-auto max-w-[1280px] px-5 lg:py-20">
                <div className="lg:flex">
                    {/* Swiper */}
                    <div className="speakers-swiper mt-10 relative lg:w-3/5 lg:mt-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                            }}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                        >
                            {speakers.map(({ name, title, img }, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative overflow-hidden group h-[520px] rounded-xl shadow-md text-white text-2xl lg:h-110">
                                        <img
                                            src={img}
                                            alt={`Photo of ${name}`}
                                            className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/30 opacity-0 group-hover:opacity-100 duration-700">
                                            <p className="font-semibold text-2xl">{name}</p>
                                            <p className="text-sm">{title}</p>
                                            <div className="mt-5 flex items-center gap-x-3">
                                                <a href="#" aria-label={`${name} on Facebook`}><RiFacebookFill size={20} /></a>
                                                <a href="#" aria-label={`${name} on Twitter`}><RiTwitterXFill size={20} /></a>
                                                <a href="#" aria-label={`${name} on Instagram`}><RiInstagramFill size={20} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Nav */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                            <button className="custom-prev bg-amber-100 text-black p-2 rounded-full hover:bg-amber-50" aria-label='Access Previous Speaker'>
                                <RiArrowLeftSLine size={24} />
                            </button>
                            <button className="custom-next bg-amber-100 text-black p-2 rounded-full hover:bg-amber-50" aria-label='Access Next Speaker'>
                                <RiArrowRightSLine size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Text Content (Desktop only) */}
                    <div className="z-10 hidden w-2/5 lg:flex flex-col justify-center items-start gap-5 lg:pl-10">
                        <p className="font-semibold text-secondary text-xl">Speakers</p>
                        <p className="font-extrabold text-3xl">Meet the incredible speakers</p>
                    </div>

                    {/* Background overlay */}
                    <div className="z-0 hidden bg-secondary-bg absolute top-0 bottom-0 right-0 w-4/5 rounded-4xl lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
