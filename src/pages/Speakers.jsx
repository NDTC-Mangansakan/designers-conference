import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine, RiFacebookFill, RiInstagramFill, RiTwitterXFill } from '@remixicon/react';

import img1 from '../assets/Images/speakers-img-1.jpg';
import img2 from '../assets/Images/speakers-img-2.jpg';
import img3 from '../assets/Images/speakers-img-3.jpg';
import img4 from '../assets/Images/speakers-img-4.jpg';
import img5 from '../assets/Images/speakers-img-5.jpg';
import img6 from '../assets/Images/speakers-img-6.jpg';

const Speakers = () => {

    const images = [img1, img2, img3, img4, img5, img6];
    return (
        <div id='speakers' className="bg-secondary-bg py-15 rounded-2xl lg:bg-transparent">
            <div className="container relative mx-auto px-5 lg:py-20">

                <p className="speakers-text font-semibold text-secondary text-xl lg:hidden">Speakers</p>
                <p className="speakers-text font-extrabold text-[clamp(25px,6.5vw,100px)] lg:hidden">Meet the incredible speakers</p>

                <div className="lg:flex">
                    <div className="speakers-swiper mt-10 relative lg:w-3/5 lg:mt-0">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            className=""
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative overflow-hidden group h-130  rounded-xl shadow-md text-white text-2xl lg:h-110">
                                        <img src={img} alt="" className='w-full h-full object-cover transition-transform duration-900 group-hover:scale-110' />
                                        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-end p-5 bg-black/30 opacity-0 group-hover:opacity-100 duration-700">
                                            <p className="font-semibold text-2xl">Speaker Sharma</p>
                                            <p className='text-sm'>Web designer</p>
                                            <div className="mt-5 flex items-center gap-x-3">
                                                <a href="#"><RiFacebookFill size={20}/></a>
                                                <a href="#"><RiTwitterXFill size={20} /></a>
                                                <a href="#"><RiInstagramFill size={20} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Icon Buttons */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                            <button className="custom-prev bg-amber-100 text-black cursor-pointer p-2 rounded-full hover:bg-amber-50">
                                <RiArrowLeftSLine size={24} />
                            </button>
                            <button className="custom-next bg-amber-100 text-black cursor-pointer p-2 rounded-full hover:bg-amber-50">
                                <RiArrowRightSLine size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="z-1 hidden w-2/5 lg:inline-flex flex-col justify-center items-start gap-5 lg:pl-10">
                        <p className="font-semibold text-secondary text-xl">Speakers</p>
                        <p className="font-extrabold text-3xl">Meet the incredible speakers</p>
                    </div>

                    <div className="z-0 hidden bg-secondary-bg absolute top-0 bottom-0 right-0 w-4/5 rounded-4xl lg:block"></div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;
