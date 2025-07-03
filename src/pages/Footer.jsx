import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-15 pb-10'>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 gap-10 border-b-[1px] border-b-white/30 pb-5 lg:gap-0 lg:grid-cols-3">
                    {/* Part 1 */}
                    <div className='lg:pr-5'>
                        <p className="text-3xl font-bold">Assan</p>
                        <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corrupti illo dolor nulla? Eveniet, expedita!</p>
                    </div>

                    {/* Part 2 */}
                    <div>
                        <p className="text-xl font-semibold">Need Info?</p>
                        <div className="mt-5 flex flex-col items-start gap-y-2">
                            <a href="#" className='hover:text-secondary transition-colors duration-200'>Contact Us</a>
                            <a href="#" className='hover:text-secondary transition-colors duration-200'>Press and Media</a>
                            <a href="#" className='hover:text-secondary transition-colors duration-200'>Legal Notice</a>
                            <a href="#" className='hover:text-secondary transition-colors duration-200'>Terms</a>
                            <a href="#" className='hover:text-secondary transition-colors duration-200'>Our Policy</a>
                        </div>
                    </div>

                    {/* Part 3 */}
                    <div>
                        <p className="text-xl font-semibold">Get Notification</p>
                        <div className='mt-5 flex flex-col'>
                            <input type="email" placeholder='Enter Email' className='border px-5 py-3 w-full outline-0' />
                            <button className='mt-2 bg-secondary w-full py-3 rounded cursor-pointer hover:bg-secondary/70 transition-colors duration-200'>Subscribe</button>
                            <div className="mt-10 flex items-center gap-x-5">
                                <a href="#" className='p-2 border border-gray-400 rounded-full hover:bg-gray-100/10'>
                                    <RiFacebookCircleFill />
                                </a>

                                <a href="#" className='p-2 border border-gray-400 rounded-full hover:bg-gray-100/10'>
                                    <RiTwitterXFill />
                                </a>

                                <a href="#" className='p-2 border border-gray-400 rounded-full hover:bg-gray-100/10'>
                                    <RiInstagramLine />
                                </a>

                                <a href="#" className='p-2 border border-gray-400 rounded-full hover:bg-gray-100/10'>
                                    <RiLinkedinBoxFill />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-center text-xs">© Copyright 2025. Assan </p>
            </div>
        </div>
    )
}

export default Footer