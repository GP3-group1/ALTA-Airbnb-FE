import React from 'react'
import Navbar from '../components/Navbar'

import seririt from '../assets/seririt.jpg'

const Reserve = () => {
    return (
        <>
            <Navbar />
            <div className='px-10 py-5'>
                <h1 className='font-bold text-2xl'>Ocean Beachfront Luxury</h1>
                <div className='flex flex-row gap-2'>
                    <h3>Star 4+</h3>
                    <h3>Seriririt Indonesia</h3>
                </div>
                {/* image reserve  */}
                <div className='w-full py-5 grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
                    <img src={seririt} className='w-full h-full' alt="" />
                    <div className='grid md:grid-cols-2 grid-cols-4 gap-5' >
                        <img src={seririt} alt="" />
                        <img src={seririt} alt="" />
                        <img src={seririt} alt="" />
                        <img src={seririt} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>
                        hosted by House Of Reservations
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 py-5 gap-5'>
                        <div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <h1 className='py-5 font-bold text-xl'>What this place offers</h1>
                            <ul className='grid grid-cols-1 md:grid-cols-2'>
                                <li>Private pool</li>
                                <li>Wifi</li>
                                <li>Air conditioning</li>
                                <li>Refrigerator</li>
                                <li>Coffee maker</li>
                                <li>Kitchen</li>
                                <li>Free parking on premises</li>
                                <li>TV with standard cable</li>
                            </ul>
                        </div>
                        <div className='p-5 rounded-md border-2 border-black '>
                            <div className='grid grid-cols-2'>
                                <h1><span className='text-xl font-bold'> $400</span> night</h1>
                                <div className='text-end font-semibold'>
                                    <p>Seririt, Bali, Indonesia</p>
                                    <p>star 4+</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-10 gap-10'>
                                <div className='border-2 text-black flex h-10 items-center justify-center rounded-lg'>Check in Date</div>
                                <div className='border-2 text-black flex h-10 items-center justify-center rounded-lg'>Check out Date</div>
                            </div>
                            <div className='bg-[#4397fb] text-white mt-10 h-10 flex justify-center items-center rounded-md text-xl font-medium '>Check Svailable</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve
